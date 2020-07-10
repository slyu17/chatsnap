import React, {useState} from 'react'

function Footer(props){
  const [text,setText] = useState('')
  return <footer class="footer">
    <input value={text} 
      onChange={e=> setText(e.target.value)}
      placeholder="Type Your Message Here"
      onKeyPress={e=> {
        if(e.key==='Enter'&& text) {
          props.onSend(text)
          setText('')
        }}
      }
    />
    <button onClick={()=> {
        if(text){
          props.onSend(text)
          setText('')
        }
      }}>
      ↑
    </button>
  </footer>
}
export default Footer