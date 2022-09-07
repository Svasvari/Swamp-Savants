import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";
import $ from 'jquery'

import Landing from './Pages/Landing';
import LoudoutRandomizer from './Pages/loudoutRandomizer';
import About from './Pages/About';

function App() {

  const [screenID, setScreenID] = useState(1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  let doc = document.getElementById('menu-check');
  if (doc) {
    doc.checked = '';
  }

  const handleDot1 = (screenID) => {
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let screen1 = document.getElementById("page1");
    let screen2 = document.getElementById("page2");
    let screen3 = document.getElementById("page3");
    dot1.setAttribute("style", "background:red");
    dot2.setAttribute("style", "background:white");
    dot3.setAttribute("style", "background:white");

    //From screen3 to screen1
    if (screenID === 3) {
      screen1.style.transform = "translateY(0%)";
      screen3.style.transform = "translateY(100%)";
      screen2.style.transform = "translateY(100%)";
      screen2.style.opacity = "0";

    } else if (screenID === 2) {
      //From screen2 to screen1
      screen1.style.transform = "translateY(0%)";
      screen2.style.transform = "translateY(100%)";
    }
    setScreenID(1);
  }
  const handleDot2 = (screenID) => {
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let screen1 = document.getElementById("page1");
    let screen2 = document.getElementById("page2");
    let screen3 = document.getElementById("page3");
    dot1.setAttribute("style", "background:white");
    dot2.setAttribute("style", "background:red");
    dot3.setAttribute("style", "background:white");


    //From screen3 to screen 2
    if (screenID === 3) {
      screen2.style.opacity = "100";
      screen3.style.transform = "translateY(100%)";
    } else if (screenID === 1) {
      //From screen1 to screen 2
      screen2.style.opacity = "100";
      screen2.style.transform = "translateY(0%)";
      screen1.style.transform = "translateY(-100%)";
    }
    screen2.style.transform = "translateY(0%)";
    screen3.style.transform = "translateY(100%)";

    setScreenID(2);
  }
  const handleDot3 = (screenID) => {
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let screen1 = document.getElementById("page1");
    let screen2 = document.getElementById("page2");
    let screen3 = document.getElementById("page3");
    dot1.setAttribute("style", "background:white");
    dot2.setAttribute("style", "background:white");
    dot3.setAttribute("style", "background:red");

    //From screen1 to screen3
    if (screenID === 1) {
      screen1.style.transform = "translateY(-100%)";
      screen3.style.transform = "translateY(0%)";
      screen2.style.transform = "translateY(-100%)";
      screen2.style.opacity = "0";
    } else if (screenID === 2) {
      //From screen2 to screen3
      screen2.style.transform = "translateY(-100%)";
      screen3.style.transform = "translateY(0%)";
    }
    setScreenID(3);
  }

  window.onresize = (event) => {
    setInnerWidth(window.innerWidth);
  };

  return (
    <div className='main'>
      <nav className="navigationWrapper">
        <div className="logoWrapper" onClick={() => handleDot1(screenID)}>
          <span className="stylish" >Swamp</span>
          <span className="logo">Savant</span>
        </div>
        {window.innerWidth > 650 ?
          <ul className="navigation">
            <li className={screenID === 1 ? ("parent") : ('parent2')} onClick={() => handleDot2(screenID)}>Loadout Randomizer</li>
            <li className={screenID === 1 ? ("parent") : ('parent2')} onClick={() => handleDot3(screenID)}>About</li>
          </ul>
          :
          <div id="menuToggle" >
            <input id='menu-check' type="checkbox" />
            <span style={screenID !== 1 ? { background: '#fff' } : {}}></span>
            <span style={screenID !== 1 ? { background: '#fff' } : {}}></span>
            <span style={screenID !== 1 ? { background: '#fff' } : {}}></span>
            <ul id="menu">
              <li onClick={() => { handleDot1(screenID) }}>Home</li>
              <li onClick={() => handleDot2(screenID)}>Loudout Randomizer</li>
              <li onClick={() => handleDot3(screenID)}>About</li>
            </ul>
          </div>
        }
      </nav>
      <div id="page2" style={screenID !== 2 ? { opacity: '0%' } : {}}>
        <LoudoutRandomizer handleDot1={handleDot1} handleDot3={handleDot3} />
      </div>
      <div id="page3" >
        <About handleDot2={handleDot2} />
      </div>
      <div id="page1">
        <Landing />
        <div className="wrapper">
          <div className="btn_fab" onClick={() => handleDot2(screenID)}>Enter</div>
        </div>
      </div>
      <div className="slider">
        <div className="items-group">
          <div className="item">
          </div>
          <div className="item">
          </div>
          <div className="item">
          </div>
        </div>

        <div className="navigations">
          <ul className="dots">
            <li id='dot1' onClick={() => { handleDot1(screenID) }} />
            <li id='dot2' onClick={() => handleDot2(screenID)} />
            <li id='dot3' onClick={() => handleDot3(screenID)} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
