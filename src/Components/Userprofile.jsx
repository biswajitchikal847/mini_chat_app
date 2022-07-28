import React from 'react'
import './Userprofile.css'
function Userprofile({name, photourl}) {
  return (
    <div className='user_profile'>
        <div className="user_image">
            <img src={photourl} alt="" />
        </div>
        <div className="user_info">
            <p className="user_name">
             {name}
            </p>
        </div>
    </div>
  )
}

export default Userprofile