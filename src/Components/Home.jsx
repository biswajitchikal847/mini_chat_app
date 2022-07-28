import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <Sidebar />
             <div className="home_bg">
                <img src="./whatsapp_logo.png" alt="" />
             </div>
        </div>
        </div>
  )
}

export default Home