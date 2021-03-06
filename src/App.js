import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from "datu"
import {BrowserRouter, Route} from 'react-router-dom'
import NamePicker from './NamePicker'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2)
    {
      window.location.pathname='/home'
    }
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  const [name,setName] = useState('')
  return (
    <main className="main">
      <header>
        <div style={{display:'flex', alignItems:'center'}}> 
          <img src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png" alt="logo"/>
          <span>Chat App</span>
        </div>
        <NamePicker saveName={setName} />
      </header>

      <div className="messages">
      {messages.map((m,i)=> {
        return <Message key={i} text={m.text} name = {m.name} isMe = {m.name === name}
        />
      })}
      </div>

      <Footer 
        onSend={text=> send({text, room, name})}
      />

    </main>
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyA6XwOdQm7l3ScoTFEmEJx6do49eRbgXmY",
  authDomain: "hichatsnap.firebaseapp.com",
  databaseURL: "https://hichatsnap.firebaseio.com",
  projectId: "hichatsnap",
  storageBucket: "hichatsnap.appspot.com",
  messagingSenderId: "589457684546",
  appId: "1:589457684546:web:ce74ebcff49b47560915db"
};
initialize(firebaseConfig)
