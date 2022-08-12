
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatpage from './Components/Chatpage';
import Home from './Components/Home';
import Login from './Components/Login';
import { useState } from 'react';
import { auth } from './Firebase';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  // console.log(user)

  const signOut =() => {
    auth.signOut()
    .then(() => {
      setUser(null);
      localStorage.removeItem("user");

    })
    .catch((err) => alert(err.message))
  }

  return (
    <Router>
      <div className="App">
        {
          user ? ( <Routes>
          <Route path="/" element={<Home currentUser={user} signOut={signOut}/>} />
          <Route path="/chatpage" element={<Chatpage currentUser={user} signOut={signOut} />} />
          </Routes>) : <Login setUser={setUser} />
        }
     
      </div>
    </Router>
  );
}

export default App;
