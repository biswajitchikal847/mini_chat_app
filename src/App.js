
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatpage from './Components/Chatpage';
import Home from './Components/Home';
import Login from './Components/Login';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState();

  return (
    <Router>
      <div className="App">
        {
          user ? ( <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatpage" element={<Chatpage />} />
          </Routes>) : <Login setUser={setUser} />
        }
     
      </div>
    </Router>
  );
}

export default App;
