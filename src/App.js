import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro/>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
