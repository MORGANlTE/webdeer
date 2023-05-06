import logo from './logo.svg';
import './App.css';
import { DefaultRoute, Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import About from './pages/About';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import { QuizProvider } from './context/QuizContext';
import { createContext } from 'react';
import Results from './pages/Results';

function App() {
  
  return (
    <QuizProvider>
      <div className="App">
        <Router>
          <Routes>
          <Route 
              path="/about"
              element={<About/>}
              />
              <Route 
              path="/changelog"
              element={<Changelog/>}
              />
              <Route 
              path="/quiz"
              element={<Quiz/>}
              />
               <Route 
              path="/results"
              element={<Results/>}
              />
            <Route path="/home" element={<Navigate to="/" replace={true} />} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
    </QuizProvider>
  );
}

export default App;
