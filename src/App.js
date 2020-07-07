import React, {useState} from 'react'
import './App.css';
import Footer from './footer'
import Message from './message'


function App() {
  const [messages,setMessages] = useState([])
  return (
    <main className="main">
      <header>
        <img src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png" alt="logo"/>
        <span>Chat App</span>
      </header>

      {messages.map((m,i)=> <Message key={i} text={m} />)}
      
      <Footer 
        onSend={(text)=> setMessages([...messages, text])}
      />

    </main>
  );
}

export default App;
