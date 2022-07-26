import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Landing from './Pages/Landing';

function App() {
  return (
    <Router>
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <span className="stylish">Insomnious</span>
          <span className="logo">TV</span>
        </div>
        <ul className="navigation">
          <li className="parent"><a className="link" href="/featured">Featured</a></li>
          <li className="parent" id='games'><a className="link" href="/games">Games</a>
            <div className="dd">
              <ul>
                <li className="subparent"><a className="link" href="/games/hunt-showdown">Hunt: Showdown</a></li>
                <li className="subparent"><a className="link" href="/games/elden-ring">Elden Ring</a></li>
              </ul>
            </div>
          </li>
          <li className="parent"><a className="link" href="/about">About</a></li>
          <li className="parent"><a className="link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/featured" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
