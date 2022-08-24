import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Landing from './Pages/Landing';
import LoudoutRandomizer from './Pages/loudoutRandomizer';
import PrestigeRoulette from './Pages/prestigeRoulette';

function App() {
  return (
    <Router>
      <nav className="navigationWrapper">
        <a className='link-logo' href='/'><div className="logoWrapper">
          <span className="stylish">Swamp</span>
          <span className="logo">Savant</span>
        </div></a>
        <ul className="navigation">
          <li className="parent"><a className="link" href="/loudout-randomizer">Loadout Randomizer</a></li>
          <li className="parent" id='games'><a className="link" href="/prestige-roulette">Prestige Roulette</a></li>
          <li className="parent"><a className="link" href="/about">About</a></li>
          <li className="parent"><a className="link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/loudout-randomizer" element={<LoudoutRandomizer />} />
          <Route path="/prestige-roulette" element={<PrestigeRoulette />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
