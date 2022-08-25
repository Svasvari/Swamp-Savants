import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";
import $ from 'jquery'

import Landing from './Pages/Landing';
import LoudoutRandomizer from './Pages/loudoutRandomizer';
import PrestigeRoulette from './Pages/prestigeRoulette';

function App() {

  const [page, setPage] = useState(0);

  return (
    <div>
      <nav className="navigationWrapper">
        <div className="logoWrapper" onClick={() => setPage(0)}>
          <span className="stylish">Swamp</span>
          <span className="logo">Savant</span>
        </div>
        <ul className="navigation">
          <li className="parent" onClick={() => setPage(1)}>Loadout Randomizer</li>
          <li className="parent" onClick={() => setPage(2)}>Prestige Roulette</li>
          <li className="parent"><a className="link" href="/about">About</a></li>
          <li className="parent"><a className="link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      {page === 0 ? (
        <Landing />)
        :
        (<></>)
      }
      {page === 1 ? (
        <LoudoutRandomizer />)
        :
        (<></>)
      }
      {page === 2 ? (
        <PrestigeRoulette />)
        :
        (<></>)
      }

      <div class="slider">
        <div class="items-group">
          <div class="item">
          </div>
          <div class="item">
          </div>
          <div class="item">
          </div>
        </div>

        <div class="navigations">
          <ul class="dots">
            <li id='dot1' onClick={() => {
              let elem = document.getElementById('dot1');
              elem.className = '.slider .navigations .dots li.active'
              setPage(0);
              }}/>
            <li className='dot2' onClick={() => setPage(1)}/>
            <li className='dot3' onClick={() => setPage(2)}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
