import React from 'react';

const PrestigeRoulette = ({ handleDot2 }) => {
    return (
        <div className="Deck">
            <div className="scroll-indicator-top-about">
                <div className="top" onClick={() => handleDot2(3)}></div>
            </div>
            <h3 className="about-title">
                <span role="img">♢</span>About<span role="img">♢</span>
            </h3>
            <hr style={{ color: '#fff', width: '30%' }} />
            <p className="about-p">
                Have you ever thought to yourself that <span>Hunt: Showdown</span> was too easy?<br /><br />Perhaps you are simply tired of using the same old loadouts game after game?
            </p>
            <p className="about-p">
                Whether you are seeking a new challenge, or trying to fight off burn-out, <span>Swamp Savant's Loadout Randomizer</span> can help you re-imagine and re-invigorate your gameplay.<br /><br />
                With various customization options available to choose from, you can tailor your expereince however you like in order to get the most out of your loadout.
            </p>
            <p className="about-p">
                Don't enjoy using sniper scopes? No worries, neither do I. With just a few clicks, it's like they don't even exist.
            </p>
            <p className="about-p">
                Perhaps you're more of the "act first, think later" type and want to make sure you have something reliable for that close-range push. <br />
                Easily filter potential results by weapon class to ensure you get what you are looking for.
            </p>
            <p className="about-p">
                And for the maddest of lads who consider the First Aid Kit to be unnecessary baggage, there is a little something for you as well.
            </p>
            <p className="about-p">
                You can fine-tune your experience or leave it completely up to fate.
            </p>
            <p className="about-p">
                Let <span>Swamp Savant's Loadout Randomizer</span> guide your hunts today.
            </p>
            <hr style={{ color: '#fff', width: '30%' }} />
            <div className='disclaimer'>
                <h4>! DISCLAIMER !</h4>
                <p>All images and symbols that represent elements from the game are copyright of the Crytek group in the EU, U.S. and/or other territories.<br/>
                    Visit <a href='https://www.huntshowdown.com/'>huntshowdown.com</a> or <a href='https://www.crytek.com/'>crytek.com</a> for more information.</p>
            </div>
            <hr style={{ color: 'rgb(245, 245, 245)', width: '30%', opacity: '0%' }} />
            <hr style={{ color: 'rgb(245, 245, 245)', width: '30%', opacity: '0%' }} />
        </div>
    );
}

export default PrestigeRoulette;