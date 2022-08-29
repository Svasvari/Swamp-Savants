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

    //STATES///////////////////////////////////////////////////////////////////////////////

    //Main States
    const weaponsMasterList = [].concat(weaponsSmall, weaponsMedium, weaponsLarge);
    const [weaponsPool, setWeaponsPool] = useState([].concat(weaponsSmall, weaponsMedium, weaponsLarge));
    const [toolPool, setToolPool] = useState(tools);

    //Toggle Options
    const [quartermaster, setQuartermaster] = useState(false);
    const [customAmmo, setCustomAmmo] = useState(false);
    const [disableScopes, setDisableScopes] = useState(false);
    const [fixedMedkit, setFixedMedkit] = useState(false);
    const [fixedMeleeTool, setFixedMeleeTool] = useState(false);

    //Weapons
    const [weaponOne, setWeaponOne] = useState("N/A");
    const [weaponOneAmmo, setWeaponOneAmmo] = useState('N/A');
    const [weaponTwo, setWeaponTwo] = useState("N/A");
    const [weaponTwoAmmo, setWeaponTwoAmmo] = useState('N/A');

    //Tools
    const [toolOne, setToolOne] = useState('N/A');
    const [toolTwo, setToolTwo] = useState('N/A');
    const [toolThree, setToolThree] = useState('N/A');
    const [toolFour, setToolFour] = useState('N/A');

    //Consumables
    const [consumableOne, setConsumableOne] = useState('N/A');
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
        //Roll Weapons
        let randomWeaponOne = '';
        let randomWeaponOneAmmo = '';
        let randomWeaponTwo = '';
        let randomWeaponTwoAmmo = '';

        if (quartermaster) {
            let largeWeapons = weaponsPool.filter((weapon) => weapon.size === 'L');

            randomWeaponOne = largeWeapons[Math.floor(Math.random() * largeWeapons.length)];
            randomWeaponOneAmmo = customAmmo ? randomWeaponOne.specialAmmo[Math.floor(Math.random() * randomWeaponOne.specialAmmo.length)] : '';
            setWeaponOne(randomWeaponOne);
            setWeaponOneAmmo(randomWeaponOneAmmo);

            randomWeaponTwo = weaponsMedium[Math.floor(Math.random() * weaponsMedium.length)];
            randomWeaponTwoAmmo = customAmmo ? randomWeaponTwo.specialAmmo[Math.floor(Math.random() * randomWeaponTwo.specialAmmo.length)] : '';
            setWeaponTwo(randomWeaponTwo);
            setWeaponTwoAmmo(randomWeaponTwoAmmo);
        } else {
            //Roll Weapon One
            randomWeaponOne = weaponsPool[Math.floor(Math.random() * weaponsPool.length)];
            randomWeaponOneAmmo = customAmmo ? randomWeaponOne.specialAmmo[Math.floor(Math.random() * randomWeaponOne.specialAmmo.length)] : '';
            setWeaponOne(randomWeaponOne);
            setWeaponOneAmmo(randomWeaponOneAmmo);

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
            setWeaponTwo(randomWeaponTwo);
            setWeaponTwoAmmo(randomWeaponTwoAmmo);
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
            setToolOne(randomToolOne[0]);
            currentToolPool = currentToolPool.filter((tool) => tool.name !== 'First Aid Kit');
        } else {
            randomToolOne = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            setToolOne(randomToolOne);
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolOne.name);
        }
        //Tool 2
        if (fixedMeleeTool) {
            let randomMeleeTools = toolPool.filter((tool) => tool.type === 'melee')
            randomToolTwo = randomMeleeTools[Math.floor(Math.random() * randomMeleeTools.length)];
            setToolTwo(randomToolTwo);
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
        } else {
            randomToolTwo = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
            setToolTwo(randomToolTwo);
            currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolTwo.name);
        }
        //Tool 3
        randomToolThree = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        setToolThree(randomToolThree);
        currentToolPool = currentToolPool.filter((tool) => tool.name !== randomToolThree.name);

        //Tool 4
        randomToolFour = currentToolPool[Math.floor(Math.random() * currentToolPool.length)];
        setToolFour(randomToolFour);

        //Roll Consumables
        let randomConsumableOne = '';
        let randomConsumableTwo = '';
        let randomConsumableThree = '';
        let randomConsumableFour = '';

        //Consumable One
        randomConsumableOne = consumables[Math.floor(Math.random() * consumables.length)];
        setConsumableOne(randomConsumableOne);

        //Consumable Two
        randomConsumableTwo = consumables[Math.floor(Math.random() * consumables.length)];
        setConsumableTwo(randomConsumableTwo);

        //Consumable Three
        randomConsumableThree = consumables[Math.floor(Math.random() * consumables.length)];
        setConsumableThree(randomConsumableThree);

        //Consumable Four
        randomConsumableFour = consumables[Math.floor(Math.random() * consumables.length)];
        setConsumableFour(randomConsumableFour);
    }

    return (

        <div className="Deck">
            {console.log(weaponsPool)}
            <h3>
                <span role="img">♢</span>Loudout Randomizer<span role="img">♢</span>
            </h3>
            <h4>
                A <span>Randomized</span> Loadout Generator
            </h4>
            <div className="main-panel-container">
                <div className="options-container">
                    <button onClick={() => setFixedMedkit(!fixedMedkit)}>{fixedMedkit ? 'Disable Fixed Medkit' : 'Enable Fixed Medkit '}</button>
                    <button onClick={() => setFixedMeleeTool(!fixedMeleeTool)}>{fixedMeleeTool ? 'Disable Fixed Melee Tool' : 'Enable Fixed Melee Tool '}</button>
                    <button onClick={() => setCustomAmmo(!customAmmo)}>{customAmmo ? 'Disable Custom Ammo' : 'Enable Custom Ammo '}</button>
                    <button onClick={() => setQuartermaster(!quartermaster)}>{quartermaster ? 'Disable Quartermaster' : 'Enable Quartermaster '}</button>
                    <button onClick={() => handleDisableScopes()}>{disableScopes ? 'Enable Scopes' : 'Disable Scopes'}</button>
                </div>
                <div className="loudout-container">
                    <div className="weapon-slot-container">
                        <div className="weapon-slot">
                            <h2 className="test">{weaponOne.name}</h2>
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponOneAmmo}</h2>
                        </div>
                    </div>
                    <div className="weapon-slot-container">
                        <div className="weapon-slot">
                            <h2 className="test">{weaponTwo.name}</h2>
                        </div>
                        <div className="ammo-slot">
                            <h2 className="test">{weaponTwoAmmo}</h2>
                        </div>
                    </div>
                    <div className="tool-slot-container">
                        <div className="tool-slot">
                            <h2 className="test">{toolOne.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{toolTwo.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{toolThree.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{toolFour.name}</h2>
                        </div>
                    </div>
                    <div className="tool-slot-container">
                        <div className="tool-slot">
                            <h2 className="test">{consumableOne.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{consumableTwo.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{consumableThree.name}</h2>
                        </div>
                        <div className="tool-slot">
                            <h2 className="test">{consumableFour.name}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => roll()}>GENERATE</button>
        </div>


    );
};

export default LoudoutRandomizer;