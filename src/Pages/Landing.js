
import Parallax from "parallax-js";
import React, { useRef, useEffect, useState } from "react";

const Landing = () => {
    const speed = 400;
    const list = useRef(null);
    const [state, setState] = useState([]);

    useEffect(() => {
        const parallax = new Parallax(list.current);
        parallax.enable();

        for (let i = 1; i < 6; i++) {
            twinkleLoop(i);
        }

        function twinkleLoop(i) {
            let duration = Math.random() * 5 + 3;

            duration = duration - (495 - speed) / 100;
            twinkle(i, duration);

            setTimeout(function () {
                twinkleLoop(i);
            }, duration * 1000);
        }

        function twinkle(id, duration) {
            let top = Math.floor(Math.random() * 85) + 0 + "%";
            let left = Math.floor(Math.random() * 85) + 0 + "%";
            setState([]);

            let speck = (
                <div
                    key={id}
                    className="speck"
                    id={`speck${id}`}
                    style={{
                        top: top,
                        left: left,
                        animationDuration: duration + "s",
                        animationTimingFunction: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
                        animationName: "twinkle"
                    }}
                ></div>
            );
            setState([speck]);
        }

        (function () {
            // Add event listener
            document.addEventListener("mousemove", parallax);
            const elem = document.querySelector("#parallax");
            // Magic happens here
            function parallax(e) {
                let _w = window.innerWidth / 2;
                let _h = window.innerHeight / 2;
                let _mouseX = e.clientX;
                let _mouseY = e.clientY;
                let _depth1 = `${50 - (_mouseX - _w) * 0.00}% ${50 - (_mouseY - _h) * 0.00}%`;
                let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.002}%`;
                let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${50 - (_mouseY - _h) * 0.006}%`;
                let x = `${_depth3}, ${_depth2}, ${_depth1}`;
                elem.style.backgroundPosition = x;
            }
        })();
    }, []);



    return (
        <div id="parallax">
            <ul ref={list} id="scene" data-friction-x="0.03" data-friction-y="0.05">
                <li className="layer" id="specks" data-depth="0.1">
                    {state.map((speck) => speck)}
                </li>
                <li className="layer" id="layer-1" data-depth="0.15">
                    <div className="img" id="img-1"></div>
                </li>
                <li className="layer" id="layer-2" data-depth="0.25">
                    <div className="img" id="img-2"></div>
                </li>
                <li className="layer" id="layer-3" data-depth="0.45">
                    <div className="img" id="img-3"></div>
                </li>
            </ul>
        </div>

    );
};

export default Landing;