
import React, { useRef, useEffect, useState } from "react";
import $ from 'jquery'

const LoudoutRandomizer = () => {

    const weaponsSmall = [
        { name: 'Bornheim No. 3', size: 'S', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889146/Tarot%20Cards/borneheim-no3_vctocq.png' },
        { name: 'Bornheim No. 3 Extended', size: 'S', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889055/Tarot%20Cards/bornheim-extended_ktju8j.png' },
        { name: 'Caldwell Conversion Uppercut', size: 'S', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Explosive'], image: '' },
        { name: 'Caldwell Pax', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'Dumdum'], image: '' },
        { name: 'Caldwell Pax Claw', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'Dumdum'], image: '' },
        { name: 'Scottfield Model 3', size: 'S', defaultAmmo: 'Medium', specialAmmo: ['', 'Incendiary', 'FMJ'], image: '' },
    ];

    const weaponsMedium = [
        { name: 'Bornheim No. 3 Match', size: 'M', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661887574/Tarot%20Cards/bornheim_match_mdngtb.jpg' },
        // { name: 'Bornheim No. 3 Pair', size: 'M', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
        // { name: 'Bornheim No. 3 Extended Pair', size: 'M', defaultAmmo: 'Compact', specialAmmo: ['', 'Incendiary', 'High Velocity'], image: '' },
    ];

    const weaponsLarge = [
        // { name: 'Berthier Mle 1892', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: '' },
        { name: 'Lebel 1886', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888932/Tarot%20Cards/lebel_fxon4g.png' },
        { name: 'Lebel 1886 Aperture', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888788/Tarot%20Cards/lebel-apeture_huzfek.png' },
        { name: 'Lebel 1886 Marksman', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], scope: 'marksman', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661883811/Tarot%20Cards/lebel_marksman.jpeg_yvfcyq.png' },
        { name: 'Lebel 1886 Talon', size: 'L', defaultAmmo: 'Long', specialAmmo: ['', 'Incendiary', 'Spitzer'], image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888684/Tarot%20Cards/lebel-talon_mgx3gs.png' },
    ];

    const tools = [
        { name: 'Alert Trip Mine', image: '' },
        { name: 'Blank Fire Decoys', image: '' },
        { name: 'Choke Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891054/Tarot%20Cards/choke-bomb_h1ugv8.png' },
        { name: 'Concertina Trip Mine', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890746/Tarot%20Cards/concertina-mine_uwkm7u.png' },
        { name: 'Decoy Fuses', image: '' },
        { name: 'Decoys', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890748/Tarot%20Cards/decoys_gernzt.png' },
        { name: 'Dusters', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891055/Tarot%20Cards/dusters_okdzh4.png' },
        { name: 'Electric Lamp', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890752/Tarot%20Cards/lamp_uyszss.png' },
        { name: 'First Aid Kit', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890339/Tarot%20Cards/medkit_x1pqx5.png' },
        { name: 'Flare Pistol', image: '' },
        { name: 'Fusees', image: '' },
        { name: 'Heavy Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890333/Tarot%20Cards/heavy-knife_uxnh6n.png' },
        { name: 'Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891068/Tarot%20Cards/knife_xbrvxb.png' },
        { name: 'Knuckle Knife', type: 'melee', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890750/Tarot%20Cards/knuckle-knife_ijtllt.png' },
        { name: 'Poison Trip Mine', image: '' },
        { name: 'Quad Derringer', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890330/Tarot%20Cards/derringer_z0pbny.png' },
        { name: 'Spyglass', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889783/Tarot%20Cards/spyglass_gzeu0h.png' },
        { name: 'Throwing Knives', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890346/Tarot%20Cards/throwing-knives_yfmt0q.png' },
    ];

    const consumables = [
        { name: 'Ammo Box', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891052/Tarot%20Cards/ammo-box_inhglj.png' },
        { name: 'Antidote Shot', image: '' },
        { name: 'Big Dynamite Bundle', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890739/Tarot%20Cards/big-dynamite-bundle_m8ujd6.png' },
        { name: 'Chaos Bomb', image: '' },
        { name: 'Concertina Bomb', image: '' },
        { name: 'Dynamite Bundle', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890741/Tarot%20Cards/dynamite-bundle_fubjxp.png' },
        { name: 'Dynamite Stick', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891060/Tarot%20Cards/dynamite-stick_rhwho9.png' },
        { name: 'Fire Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890331/Tarot%20Cards/firebomb_xkroes.png' },
        { name: 'Flash Bomb', image: '' },
        { name: 'Frag Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890743/Tarot%20Cards/frag_eqe339.png' },
        { name: 'Hellfire Bomb', image: '' },
        { name: 'Hive Bomb', image: '' },
        { name: 'Liquid Fire Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890338/Tarot%20Cards/liquid-firebomb_h6iioi.png' },
        { name: 'Poison Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891090/Tarot%20Cards/poison-bomb_mi0ohq.png' },
        { name: 'Regeneration Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889795/Tarot%20Cards/regen-shot_wct8jk.png' },
        { name: 'Stamina Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661889797/Tarot%20Cards/stam-shot_dv2aun.png' },
        { name: 'Sticky Bomb', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890756/Tarot%20Cards/sticky_xifdeg.png' },
        { name: 'Vitality Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890342/Tarot%20Cards/vitality-shot_zblhw9.png' },
        { name: 'Waxed Dynamite Stick', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661891065/Tarot%20Cards/wax-stick_r7zmqg.png' },
        { name: 'Weak Antidote Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888577/Tarot%20Cards/weak-antidote-shot_ll5fj2.png' },
        { name: 'Weak Regeneration Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661890377/Tarot%20Cards/weak-regen-shot_sruqvx.png' },
        { name: 'Weak Stamina Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661888391/Tarot%20Cards/weak-stam-shot_akwoxo.png' },
        { name: 'Weak Vitality Shot', image: 'https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661887961/Tarot%20Cards/weak-vitality-Shot_rt5fls.png' },
    ];

    //Loader Logic
    const [loadingText, setLoadingText] = useState('GENERATE');
    const [repeat, setRepeat] = useState(false);
    const updateLoader = () => {
        const loadingCircle = document.querySelector('.loading-circle');
        let load = 0;

        const myInterval = setInterval(count, 140);
        function count() {
            if (load === 100) {
                setGenerating(false);
                setLoadingText(<img className='repeat' src='https://res.cloudinary.com/dqcmy8k1n/image/upload/v1661865924/Tarot%20Cards/repeat_sor1y0.png' alt='' />);
                setRepeat(true);
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
    const [weaponOneAmmo, setWeaponOneAmmo] = useState('');
    const [weaponTwo, setWeaponTwo] = useState('');
    const [weaponTwoAmmo, setWeaponTwoAmmo] = useState('');

    //Tools
    const [toolOne, setToolOne] = useState('');
    const [toolTwo, setToolTwo] = useState('');
    const [toolThree, setToolThree] = useState('');
    const [toolFour, setToolFour] = useState('N/A');

    //Consumables
    const [consumableOne, setConsumableOne] = useState('');
    const [consumableTwo, setConsumableTwo] = useState('');
    const [consumableThree, setConsumableThree] = useState('');
    const [consumableFour, setConsumableFour] = useState('');

    //Text Outputs
    const [w1, setW1] = useState('');
    const [w2, setW2] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [t3, setT3] = useState('');
    const [t4, setT4] = useState('');
    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');

    //Filters
    const [activeFilter, setActiveFilter] = useState('');


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

    // function([string1, string2],target id,[color1,color2])    
    function consoleText(go, words, id, consoleId, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById(consoleId);
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        target.setAttribute('style', 'color:' + colors[0]);
        window.setInterval(function () {

            if (waiting === false) {
                go(words[0].substring(0, letterCount))
                letterCount += x;
                if (letterCount > words[0].length) {
                    waiting = true;
                }
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'
                visible = true;
            }
        }, 400)
    }

    const clearText = () => {
        let idArray = ['w1', 'w2', 't1', 't2', 't3', 't4', 'c1', 'c2', 'c3', 'c4'];
        for (let i = 0; i < idArray.length; i++) {
            let target = document.getElementById(idArray[i]);
            target.innerHTML = "";
        }
    }

    //Generate Loudout
    const roll = () => {
        setGenerating(true);
        setRepeat(false);
        updateLoader();
        if (repeat) {
            clearText();
        }
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

        let timeoutStart = 1000;

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
                consoleText(setW1, [randomWeaponOne.name], 'w1', 'w1c', ['white']);
                setWeaponOneAmmo(randomWeaponOneAmmo);
            }, timeoutStart + 1000);

            randomWeaponTwo = weaponsMedium[Math.floor(Math.random() * weaponsMedium.length)];
            randomWeaponTwoAmmo = customAmmo ? randomWeaponTwo.specialAmmo[Math.floor(Math.random() * randomWeaponTwo.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponTwo(randomWeaponTwo);
                consoleText(setW2, [randomWeaponTwo.name], 'w2', 'w2c', ['white']);
                setWeaponTwoAmmo(randomWeaponTwoAmmo);
            }, timeoutStart + 2000);

        } else {
            //Roll Weapon One
            randomWeaponOne = weaponsPool[Math.floor(Math.random() * weaponsPool.length)];
            randomWeaponOneAmmo = customAmmo ? randomWeaponOne.specialAmmo[Math.floor(Math.random() * randomWeaponOne.specialAmmo.length)] : '';
            setTimeout(() => {
                setWeaponOne(randomWeaponOne);
                consoleText(setW1, [randomWeaponOne.name], 'w1', 'w1c', ['white']);
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
                consoleText(setW2, [randomWeaponTwo.name], 'w2', 'w2c', ['white']);
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
                consoleText(setT1, [randomToolOne[0].name], 't1', 't1c', ['white']);
            }, timeoutStart + 3000);
        } else {
            randomToolOne = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolOne.name);
            setTimeout(() => {
                setToolOne(randomToolOne);
                consoleText(setT1, [randomToolOne.name], 't1', 't1c', ['white']);
            }, timeoutStart + 3000);
        }
        //Tool 2
        if (fixedMeleeTool) {
            let randomMeleeTools = toolPool.filter((tool) => tool.type === 'melee')
            randomToolTwo = randomMeleeTools[Math.floor(Math.random() * randomMeleeTools.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            setTimeout(() => {
                setToolTwo(randomToolTwo);
                consoleText(setT2, [randomToolTwo.name], 't2', 't2c', ['white']);
            }, timeoutStart + 4000);
        } else {
            randomToolTwo = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
            setTimeout(() => {
                setToolTwo(randomToolTwo);
                consoleText(setT2, [randomToolTwo.name], 't2', 't2c', ['white']);
            }, timeoutStart + 4000);
        }
        //Tool 3
        randomToolThree = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolThree.name);
        setTimeout(() => {
            setToolThree(randomToolThree);
            consoleText(setT3, [randomToolThree.name], 't3', 't3c', ['white']);
        }, timeoutStart + 5000);

        //Tool 4
        randomToolFour = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        setTimeout(() => {
            setToolFour(randomToolFour);
            consoleText(setT4, [randomToolFour.name], 't4', 't4c', ['white']);
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
            consoleText(setC1, [randomConsumableOne.name], 'c1', 'c1c', ['white']);
        }, timeoutStart + 7000);

        //Consumable Two
        randomConsumableTwo = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableTwo(randomConsumableTwo);
            consoleText(setC2, [randomConsumableTwo.name], 'c2', 'c2c', ['white']);
        }, timeoutStart + 8000);


        //Consumable Three
        randomConsumableThree = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableThree(randomConsumableThree);
            consoleText(setC3, [randomConsumableThree.name], 'c3', 'c3c', ['white']);
        }, timeoutStart + 9000);


        //Consumable Four
        randomConsumableFour = consumables[Math.floor(Math.random() * consumables.length)];
        setTimeout(() => {
            setConsumableFour(randomConsumableFour);
            consoleText(setC4, [randomConsumableFour.name], 'c4', 'c4c', ['white']);
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
                {/* <div className="options-container">
                    <button onClick={() => setFixedMedkit(!fixedMedkit)}>{fixedMedkit ? 'Disable Fixed Medkit' : 'Enable Fixed Medkit '}</button>
                    <button onClick={() => setFixedMeleeTool(!fixedMeleeTool)}>{fixedMeleeTool ? 'Disable Fixed Melee Tool' : 'Enable Fixed Melee Tool '}</button>
                    <button onClick={() => setCustomAmmo(!customAmmo)}>{customAmmo ? 'Disable Custom Ammo' : 'Enable Custom Ammo '}</button>
                    <button onClick={() => setQuartermaster(!quartermaster)}>{quartermaster ? 'Disable Quartermaster' : 'Enable Quartermaster '}</button>
                    <button onClick={() => handleDisableScopes()}>{disableScopes ? 'Enable Scopes' : 'Disable Scopes'}</button>
                </div> */}
                <div className="loudout-container">
                    <h4 className="test">Primary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot" style={(repeat && generating) || weaponOne.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponOne.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && weaponOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponOneAmmo}</h2>
                        </div>
                    </div>
                    <h4 className="test">Secondary Weapon</h4>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot" style={(repeat && generating) || weaponTwo.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${weaponTwo.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && weaponTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponTwoAmmo}</h2>
                        </div>
                    </div>
                    <h4 className="test">Tools</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot" style={(repeat && generating) || toolOne.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolOne.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolTwo.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolTwo.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolThree.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolThree.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolThree === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || toolFour.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${toolFour.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && toolFour === '' ? <div id="loader"></div> : ''}
                        </div>
                    </div>
                    <h4 className="test">Consumables</h4>
                    <div className="tool-slot-container">
                        <div className="tool-slot" style={(repeat && generating) || consumableOne.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableOne.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableOne === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableTwo.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableTwo.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableTwo === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableThree.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableThree.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableThree === '' ? <div id="loader"></div> : ''}
                        </div>
                        <div className="tool-slot" style={(repeat && generating) || consumableFour.image === undefined ? { borderColor: 'rgb(128, 128, 128, 0.1)' } : { backgroundImage: `url(${consumableFour.image})`, borderColor: 'rgb(128, 128, 128)' }}>
                            {generating && consumableFour === '' ? <div id="loader"></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="loading-box">
                    <div className="loading-circle">
                        {repeat === false ?
                            <p className="loading-count" style={generating ? { color: 'red' } : {}} onClick={generating ? () => { } : () => roll()}><span id="loadingNumber">{loadingText}</span></p>
                            :
                            <p className="loading-count-two" style={generating ? { color: 'red' } : {}} onClick={generating ? () => { } : () => roll()}><span id="loadingNumber">{loadingText}</span></p>}
                    </div>
                </div>

                <div className="info-box">
                    <div className='console-container'>Primary Weapon:<span id='w1'>{w1}</span><div className='console-underscore' id='w1c'>&#95;</div></div>
                    <div className='console-container'>Secondary Weapon:<span id='w2'>{w2}</span><div className='console-underscore' id='w2c'>&#95;</div></div>
                    <div className='console-container'>Tool 1:<span id='t1'>{t1}</span><div className='console-underscore' id='t1c'>&#95;</div></div>
                    <div className='console-container'>Tool 2:<span id='t2'>{t2}</span><div className='console-underscore' id='t2c'>&#95;</div></div>
                    <div className='console-container'>Tool 3:<span id='t3'>{t3}</span><div className='console-underscore' id='t3c'>&#95;</div></div>
                    <div className='console-container'>Tool 4:<span id='t4'>{t4}</span><div className='console-underscore' id='t4c'>&#95;</div></div>
                    <div className='console-container'>Consumable 1:<span id='c1'>{c1}</span><div className='console-underscore' id='c1c'>&#95;</div></div>
                    <div className='console-container'>Consumable 2:<span id='c2'>{c2}</span><div className='console-underscore' id='c2c'>&#95;</div></div>
                    <div className='console-container'>Consumable 3:<span id='c3'>{c3}</span><div className='console-underscore' id='c3c'>&#95;</div></div>
                    <div className='console-container'>Consumable 4:<span id='c4'>{c4}</span><div className='console-underscore' id='c4c'>&#95;</div></div>

                </div>
            </div>
            <div className="left-container">
                <div className="options-box">
                    <div className="form">
                        <h4>Enable Custom Ammo</h4>
                        <input type={'checkbox'} className='checkbox' onClick={() => setCustomAmmo(!customAmmo)} />
                    </div>
                    <div className="form">
                        <h4>Enable Quartermaster</h4>
                        <input type={'checkbox'} className='checkbox' onClick={() => setQuartermaster(!quartermaster)} />
                    </div>
                    <div className="form">
                        <h4>Enable Fixed Medkit</h4>
                        <input type={'checkbox'} className='checkbox' onClick={() => setFixedMedkit(!fixedMedkit)} />
                    </div>
                    <div className="form">
                        <h4>Enable Fixed Melee</h4>
                        <input type={'checkbox'} className='checkbox' onClick={() => setFixedMeleeTool(!fixedMeleeTool)} />
                    </div>
                </div>
                <div className="options-box">
                    <h4 className="exclusion"><span>EXCLUSIONS</span></h4>
                    <div className="left-col">
                        <div className="row">
                            <h4 class="dropdown" onClick={() => {setActiveFilter('compact')}} style={activeFilter === 'compact' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Compact Ammo</h5>
                            </h4>
                            <h4 class="dropdown" onClick={() => {setActiveFilter('medium')}} style={activeFilter === 'medium' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Medium Ammo</h5>
                            </h4>
                        </div>
                        <div className="row">
                            <h4 class="dropdown" onClick={() => {setActiveFilter('long')}} style={activeFilter === 'long' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Long Ammo</h5>
                            </h4>
                            <h4 class="dropdown" onClick={() => {setActiveFilter('special')}} style={activeFilter === 'special' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Special Ammo</h5>
                            </h4>
                        </div>
                        <div className="row">
                            <h4 class="dropdown" onClick={() => {setActiveFilter('tools')}} style={activeFilter === 'tools' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Tools</h5>
                            </h4>
                            <h4 class="dropdown" onClick={() => {setActiveFilter('consumables')}} style={activeFilter === 'consumables' ? {backgroundColor:'rgb(128, 128, 128, 0.5)'} : {}}>
                                <h5>Consumables</h5>
                            </h4>
                        </div>
                    </div>
                    <div className="right-col">
                        {activeFilter === 'compact' ?
                            <div className="" >
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Aperture</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Talon</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                                <div className="drop-form">
                                    <input type={'checkbox'} className='checkbox' />
                                    <p>Lebel 1886 Marksman</p>
                                </div>
                            </div>
                            :
                            ''
                            }
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="bottom"></div>
            </div>
        </div>


    );
};

export default LoudoutRandomizer;