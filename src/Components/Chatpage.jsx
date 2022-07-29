import React from 'react'
import Chatcontainer from './Chatcontainer'
import Sidebar from './Sidebar'
import './Chatpage.css'
function Chatpage() {
  return (
    <div className='Chatpage'>
        <div className="chatpage_container">
        <Sidebar/>
        <Chatcontainer />
        </div>
    </div>
  )
}

export default Chatpage