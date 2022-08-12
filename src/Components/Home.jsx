import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'

function Home({currentUser, signOut}) {
  return (
    <div className='home'>
        <div className='home_container'>
            <Sidebar currentUser={currentUser} signOut={signOut}/>
             <div className="home_bg">
                <img src="./whatsapp_logo.png" alt="" />
             </div>
        </div>
        </div>
  )
}

export default Home