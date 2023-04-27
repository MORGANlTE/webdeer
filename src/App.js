import logo from './logo.svg';
import './App.css';
import { DefaultRoute, Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/about"
            element={<About/>}
            />
          <Route path="/home" element={<Navigate to="/" replace={true} />} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
