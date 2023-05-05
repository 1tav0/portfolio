import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Intro/>}/>
          <Route exact path="/profile" element={<AboutMe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
