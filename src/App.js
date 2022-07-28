
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatpage from './Components/Chatpage';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/chatpage" element={<Home />} />
        <Route path="/" element={<Chatpage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
