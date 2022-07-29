import React from 'react'
import './Chatcontainer.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Chatcontainer.css'
import Chatmessage from './Chatmessage';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';
import { useState } from 'react';
function Chatcontainer() {
const [message, setMessage] = useState('');
const [openEmoji, setOpenEmoji] = useState(false);

    return (
        <div className='chat_container'>
            <div className="chat_container_header">
                <div className="chat_user_info">
                    <div className="chat_user_img">
                        <img src="./userlogo.png" alt="" />
                    </div>
                    <p>Biswal babu</p>
                </div>
                <div className="caht_container_header_btn">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="chat_display_container">
                <Chatmessage message="Hi dudue, how are you" time="28-07-2022" />
                <Chatmessage message="Hi dudue, how are you" time="28-07-2022" />
                <Chatmessage message="Hi dudue, how are you" time="28-07-2022" />
                <Chatmessage message="Hi dudue, how are you" time="28-07-2022" />

            </div>
            <div className="chat_input">
                {openEmoji && <Picker onEmojiClick={(event,emojiObject) => {
                    setMessage(message + emojiObject.emoji);
                }}
                 />}
                {/* <Picker /> */}
                <div className="chat_input_btn">
                    <InsertEmoticonIcon 
                    onClick={() => {
                        setOpenEmoji(!openEmoji)
                    }}
                    />
                    <AttachFileIcon />
                </div>
                <form >
                    <input type="text" placeholder='Type a Message' value={message} 
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }} />
                </form>
                <div className="chat_input_send_btn">
                   <SendIcon />
                </div>
            </div>
        </div>
    )
}

export default Chatcontainer