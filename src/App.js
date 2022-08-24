import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";
import $ from 'jquery';

import Landing from './Pages/Landing';
import LoudoutRandomizer from './Pages/loudoutRandomizer';
import PrestigeRoulette from './Pages/prestigeRoulette';

function App() {

  const [page, setPage] = useState(1);


  return (
    <Router>
      <nav className="navigationWrapper">
        <a className='link-logo' href='/'><div className="logoWrapper">
          <span className="stylish">Swamp</span>
          <span className="logo">Savant</span>
        </div></a>
        <ul className="navigation">
          <li className="parent" onClick={() => setPage(2)}>Loadout Randomizer</li>
          <li className="parent" onClick={() => setPage(3)}>Prestige Roulette</li>
          <li className="parent"><a className="link" href="/about">About</a></li>
          <li className="parent"><a className="link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      {/* {page === 1 ? (
        <Landing />)
        : 
        (<></>)
      }
      {page === 2 ? (
        <LoudoutRandomizer />)
        : 
        (<></>)
      } */}

      <div class="slider">
        <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
        <input type="radio" name="slider" title="slide2" class="slider__nav" />
        <input type="radio" name="slider" title="slide3" class="slider__nav" />
        <input type="radio" name="slider" title="slide4" class="slider__nav" />
        <div class="slider__inner">
          <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
            <Landing />
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
            <LoudoutRandomizer />
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-television"></i>
            <PrestigeRoulette />
          </div>
          <div class="slider__contents"><i class="slider__image fa fa-television"></i>
            <PrestigeRoulette />
          </div>
        </div>
      </div>
      <Routes>
      </Routes>
    </Router >
  );
}

export default App;
