import React from 'react'

function Message (props){
    return <div className="msg" style = {{flexDirection: props.isMe ? 'row-reverse' : 'row'}}>
        <div>
            <div className = "msg-name" style = {{flexDirection: props.isMe ? 'row-reverse' : 'row'}}>
                {props.name || "Unknown"}
            </div>
            <div className="msg-Bubble">
                {props.text}
            </div>
        </div>
    </div> 
}

export default Message