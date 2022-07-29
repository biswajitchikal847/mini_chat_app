import React from 'react'
import './Chatmessage.css';
function Chatmessage({message,time}) {
    return (
        <div className='chat_message'>
            <div className="chat_message_text">
                <p>{message} </p>
            </div>
            <div className="chat_message_date">
                <p>
                   {time}
                </p>
            </div>
        </div>
    )
}

export default Chatmessage