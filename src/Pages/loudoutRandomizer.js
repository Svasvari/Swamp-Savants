import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useRef, useEffect, useState } from "react";

const LoudoutRandomizer = () => {

    const weaponsSmall = [
        { name: 'Bornheim No. 3', size: 'S', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
        { name: 'Bornheim No. 3 Extended', size: 'S', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
        { name: 'Caldwell Conversion Uppercut', size: 'S', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Explosive'], image: '' },
        { name: 'Caldwell Pax', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'Dumdum'], image: '' },
        { name: 'Caldwell Pax Claw', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'Dumdum'], image: '' },
        { name: 'Scottfield Model 3', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'FMJ'], image: '' },
    ];

    const weaponsMedium = [
        { name: 'Bornheim No. 3 Match', size: 'S', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
        { name: 'Bornheim No. 3 Pair', size: 'M', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
        { name: 'Bornheim No. 3 Extended Pair', size: 'M', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
    ];

    const weaponsLarge = [
        { name: 'Berthier Mle 1892', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: '' },
        { name: 'Lebel 1886', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: '' },
        { name: 'Lebel 1886 Talon', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: '' },
        { name: 'Lebel 1886 Marksman', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], scope: 'marksman', image: '' },

    ];

    const tools = [
        { name: 'Alert Trip Mine', image: '' },
        { name: 'Blank Fire Decoys', image: '' },
        { name: 'Choke Bomb', image: '' },
        { name: 'Concertina Trip Mine', image: '' },
        { name: 'Decoy Fuses', image: '' },
        { name: 'Decoys', image: '' },
        { name: 'Dusters', type: 'melee', image: '' },
        { name: 'Electric Lamp', image: '' },
        { name: 'First Aid Kit', image: '' },
        { name: 'Flare Pistol', image: '' },
        { name: 'Fusees', image: '' },
        { name: 'Heavy Knife', type: 'melee', image: '' },
        { name: 'Knife', type: 'melee', image: '' },
        { name: 'Knuckle Knife', type: 'melee', image: '' },
        { name: 'Poison Trip Mine', image: '' },
        { name: 'Quad Derringer', image: '' },
        { name: 'Spyglass', image: '' },
        { name: 'Throwing Knives', image: '' },
    ];

    const consumables = [
        { name: 'Ammo Box', image: '' },
        { name: 'Antidote Shot', image: '' },
        { name: 'Big Dynamite Bundle', image: '' },
        { name: 'Chaos Bomb', image: '' },
        { name: 'Concertina Bomb', image: '' },
        { name: 'Dynamite Bundle', image: '' },
        { name: 'Dynamite Stick', image: '' },
        { name: 'Fire Bomb', image: '' },
        { name: 'Flash Bomb', image: '' },
        { name: 'Frag Bomb', image: '' },
        { name: 'Hellfire Bomb', image: '' },
        { name: 'Hive Bomb', image: '' },
        { name: 'Liquid Fire Bomb', image: '' },
        { name: 'Poison Bomb', image: '' },
        { name: 'Stamina Shot', image: '' },
        { name: 'Sticky Bomb', image: '' },
        { name: 'Vitality Shot', image: '' },
        { name: 'Waxed Dynamite Stick', image: '' },
        { name: 'Weak Antidote Shot', image: '' },
        { name: 'Weak Stamina Shot', image: '' },
        { name: 'Weak Vitality Shot', image: '' },
    ];

    //Loader Logic
    const [loadingText, setLoadingText] = useState('GENERATE');
    const updateLoader = () => {
        const loadingNumber = document.querySelector('#loadingNumber');
        const loadingCircle = document.querySelector('.loading-circle');
        let load = 0;

        const myInterval = setInterval(count, 120);
        function count() {
            if (load === 100) {
                setGenerating(false);
                setLoadingText('GENERATE');
                clearInterval(myInterval);
            } else {
                load += (load < 100);
                setLoadingText(load + '%');
            }
            loadingCircle.style.background = 'conic-gradient(from 0deg at 50% 50%, red 0%, red ' + load + '%, #101012 ' + load + '%)';
        }
    }

    //STATES///////////////////////////////////////////////////////////////////////////////

    //Main States
    const weaponsMasterList = [].concat(weaponsSmall, weaponsMedium, weaponsLarge);
    const [weaponsPool, setWeaponsPool] = useState([].concat(weaponsSmall, weaponsMedium, weaponsLarge));
    const [toolPool, setToolPool] = useState(tools);
    const [generating, setGenerating] = useState(false);

    //Toggle Options
    const [quartermaster, setQuartermaster] = useState(false);
    const [customAmmo, setCustomAmmo] = useState(false);
    const [disableScopes, setDisableScopes] = useState(false);
    const [fixedMedkit, setFixedMedkit] = useState(false);
    const [fixedMeleeTool, setFixedMeleeTool] = useState(false);

    //Weapons
    const [weaponOne, setWeaponOne] = useState('');
    const [weaponOneAmmo, setWeaponOneAmmo] = useState('N/A');
    const [weaponTwo, setWeaponTwo] = useState("N/A");
    const [weaponTwoAmmo, setWeaponTwoAmmo] = useState('N/A');

    //Tools
    const [toolOne, setToolOne] = useState('N/A');
    const [toolTwo, setToolTwo] = useState('N/A');
    const [toolThree, setToolThree] = useState('N/A');
    const [toolFour, setToolFour] = useState('N/A');

    //Consumables
    const [consumableOne, setConsumableOne] = useState('');
    const [consumableTwo, setConsumableTwo] = useState('N/A');
    const [consumableThree, setConsumableThree] = useState('N/A');
    const [consumableFour, setConsumableFour] = useState('N/A');

    //FUNCTIONS/////////////////////////////////////////////////////////////////////////////

    //Handle Toggle Scopes
    const handleDisableScopes = () => {
        setDisableScopes(!disableScopes);
        if (!disableScopes) {
            setWeaponsPool(weaponsPool.filter((weapon) => !weapon.scope));
        } else {
            let scopes = weaponsMasterList.filter((weapon) => weapon.scope);
            setWeaponsPool([].concat(weaponsPool, scopes));
        }
    }

    //Generate Loudout
    const roll = () => {
        setGenerating(true);
        updateLoader();
        setWeaponOne('');
        setWeaponTwo('');
        setWeaponOneAmmo('');
        setWeaponTwoAmmo('');
        setToolOne('');
        setToolTwo('');
        setToolThree('');
        setToolFour('');
        setConsumableOne('');
        setConsumableTwo('');
        setConsumableThree('');
        setConsumableFour('');

        let timeoutStart = 2000;

        //Roll Weapons
        let randomWeaponOne = '';
        let randomWeaponOneAmmo = '';
        let randomWeaponTwo = '';
        let randomWeaponTwoAmmo = '';

        if (quartermaster) {
            let largeWeapons = weaponsPool.filter((weapon) => weapon.size === 'L');

            randomWeaponOne = largeWeapons[Math.floor(Math.random() * largeWeapons.length)];
            randomWeaponOneAmmo = customAmmo ? randomWeaponOne.specialAmmo[Math.floor(Math.random() * randomWeaponOne.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponOne(randomWeaponOne);
                setWeaponOneAmmo(randomWeaponOneAmmo);
            }, timeoutStart + 1000);

            randomWeaponTwo = weaponsMedium[Math.floor(Math.random() * weaponsMedium.length)];
            randomWeaponTwoAmmo = customAmmo ? randomWeaponTwo.specialAmmo[Math.floor(Math.random() * randomWeaponTwo.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponTwo(randomWeaponTwo);
                setWeaponTwoAmmo(randomWeaponTwoAmmo);
            }, timeoutStart + 2000);

        } else {
            //Roll Weapon One
            randomWeaponOne = weaponsPool[Math.floor(Math.random() * weaponsPool.length)];
            randomWeaponOneAmmo = customAmmo ? randomWeaponOne.specialAmmo[Math.floor(Math.random() * randomWeaponOne.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponOne(randomWeaponOne);
                setWeaponOneAmmo(randomWeaponOneAmmo);
            }, timeoutStart + 1000);


            //Roll Weapon Two
            let weapon2Pool = [];
            if (randomWeaponOne.size === 'L') {
                weapon2Pool = weaponsPool.filter((weapon) => weapon.size === 'S');
            } else if (randomWeaponOne.size === 'M') {
                weapon2Pool = weaponsPool.filter((weapon) => weapon.size !== 'L');
            } else if (randomWeaponOne.size === 'S') {
                weapon2Pool = weaponsPool;
            }
            randomWeaponTwo = weapon2Pool[Math.floor(Math.random() * weapon2Pool.length)];
            randomWeaponTwoAmmo = customAmmo ? randomWeaponTwo.specialAmmo[Math.floor(Math.random() * randomWeaponTwo.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponTwo(randomWeaponTwo);
                setWeaponTwoAmmo(randomWeaponTwoAmmo);
            }, timeoutStart + 2000);

        }

        //Roll Tools
        let randomToolOne = '';
        let randomToolTwo = '';
        let randomToolThree = '';
        let randomToolFour = '';
        let currentToolPool = toolPool;

        //Tool 1
        if (fixedMedkit) {
            randomToolOne = tools.filter((tool) => tool.name === 'First Aid Kit')
            currentToolPool = currentToolPool.filter((tool) => tool.name !== 'First Aid Kit');
            setTimeout(() => {
                setToolOne(randomToolOne[0]);
            }, timeoutStart + 3000);
        } else {
            randomToolOne = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolOne.name);
            setTimeout(() => {
                setToolOne(randomToolOne);
            }, timeoutStart + 3000);
        }
        //Tool 2
        if (fixedMeleeTool) {
            let randomMeleeTools = toolPool.filter((tool) => tool.type === 'melee')
            randomToolTwo = randomMeleeTools[Math.floor(Math.random() * randomMeleeTools.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            setTimeout(() => {
                setToolTwo(randomToolTwo);
            }, timeoutStart + 4000);
        } else {
            randomToolTwo = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            setTimeout(() => {
                setToolTwo(randomToolTwo);
            }, timeoutStart + 4000);
        }
        //Tool 3
        randomToolThree = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolThree.name);
        setTimeout(() => {
            setToolThree(randomToolThree);
        }, timeoutStart + 5000);

        //Tool 4
        randomToolFour = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        setTimeout(() => {
            setToolFour(randomToolFour);
        }, timeoutStart + 6000);


        //Roll Consumables
        let randomConsumableOne = '';
        let randomConsumableTwo = '';
        let randomConsumableThree = '';
        let randomConsumableFour = '';

        //Consumable One
        randomConsumableOne = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableOne(randomConsumableOne);
        }, timeoutStart + 7000);

        //Consumable Two
        randomConsumableTwo = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableTwo(randomConsumableTwo);
        }, timeoutStart + 8000);


        //Consumable Three
        randomConsumableThree = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableThree(randomConsumableThree);
        }, timeoutStart + 9000);


        //Consumable Four
        randomConsumableFour = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableFour(randomConsumableFour);
        }, timeoutStart + 10000);

    }

    return (

        <div className="Deck">
            <div className="scroll-indicator">
                <div className="top"></div>
            </div>
            <h3 className="loudout-title">
                <span role="img">♢</span>Loudout Randomizer<span role="img">♢</span>
                <h4 className="loudout-subtitle">
                    A <span>Randomized</span> Loadout Generator
                </h4>
            </h3>
            <div className="main-panel-container">
                <div className="options-container">
                    <button onClick={() => setFixedMedkit(!fixedMedkit)}>{fixedMedkit ? 'Disable Fixed Medkit' : 'Enable Fixed Medkit '}</button>
                    <button onClick={() => setFixedMeleeTool(!fixedMeleeTool)}>{fixedMeleeTool ? 'Disable Fixed Melee Tool' : 'Enable Fixed Melee Tool '}</button>
                    <button onClick={() => setCustomAmmo(!customAmmo)}>{customAmmo ? 'Disable Custom Ammo' : 'Enable Custom Ammo '}</button>
                    <button onClick={() => setQuartermaster(!quartermaster)}>{quartermaster ? 'Disable Quartermaster' : 'Enable Quartermaster '}</button>
                    <button onClick={() => handleDisableScopes()}>{disableScopes ? 'Enable Scopes' : 'Disable Scopes'}</button>
                </div>
                <div className="loudout-container">
                    <h4 className="test">Primary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot">
                            {generating && weaponOne === '' ? <div id="loader"></div> : <h2 className="test">{weaponOne.name}</h2>}
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponOneAmmo}</h2>
                        </div>
                    </div>
                    <h4 className="test">Secondary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot">
                            {generating && weaponTwo === '' ? <div id="loader"></div> : <h2 className="test">{weaponTwo.name}</h2>}
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponTwoAmmo}</h2>
                        </div>
                    </div>
                    <h4 className="test">Tools</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot">
                            {generating && toolOne === '' ? <div id="loader"></div> : <h2 className="test">{toolOne.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && toolTwo === '' ? <div id="loader"></div> : <h2 className="test">{toolTwo.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && toolThree === '' ? <div id="loader"></div> : <h2 className="test">{toolThree.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && toolFour === '' ? <div id="loader"></div> : <h2 className="test">{toolFour.name}</h2>}
                        </div>
                    </div>
                    <h4 className="test">Consumables</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot">
                            {generating && consumableOne === '' ? <div id="loader"></div> : <h2 className="test">{consumableOne.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && consumableTwo === '' ? <div id="loader"></div> : <h2 className="test">{consumableTwo.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && consumableThree === '' ? <div id="loader"></div> : <h2 className="test">{consumableThree.name}</h2>}
                        </div>
                        <div className="tool-slot">
                            {generating && consumableFour === '' ? <div id="loader"></div> : <h2 className="test">{consumableFour.name}</h2>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading-box">
                <div className="loading-circle">
                    <p className="loading-count" style={generating ? { color: 'red' } : { color: 'white' }} onClick={() => roll()}><span id="loadingNumber">{loadingText}</span></p>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="bottom"></div>
            </div>
        </div>


    );
};

export default LoudoutRandomizer;