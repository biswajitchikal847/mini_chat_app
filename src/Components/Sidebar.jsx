import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'
import Userprofile from './Userprofile';
function Sidebar({currentUser}) {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <div className="sidebar_header_img">
            <img src={currentUser.photoURL} alt="" />
        </div>
        <div className="sidebar_header_btn">
            <TollIcon />
            <InsertCommentIcon />
            <MoreVertIcon />
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_input">
         <SearchIcon />
         <input type="text" name='search' placeholder='Search...' />
        </div>
      </div>
      <div className="sidebar_chat_list">
          <Userprofile name="masai student" photourl="./userlogo.png" />
          <Userprofile name="newton student" photourl="./userlogo.png"/>
          
    
      </div>
    </div>
  )
}

export default Sidebar