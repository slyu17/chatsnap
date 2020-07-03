import React, {useState} from 'react'

function Footer(){
  const [text,setText] = useState('')
  return <footer class="footer">
    <input value={text} 
      onChange={e=> setText(e.target.value)}
      placeholder="Type Your Message Here"
    />
    <button>
      ↑
    </button>
  </footer>
}
export default Footer