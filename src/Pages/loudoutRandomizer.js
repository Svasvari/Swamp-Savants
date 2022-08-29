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

    //STATES
    const weaponsMasterList = [].concat(weaponsSmall, weaponsMedium, weaponsLarge);
    const [weaponsPool, setWeaponsPool] = useState([].concat(weaponsSmall, weaponsMedium, weaponsLarge));

    const [quartermaster, setQuartermaster] = useState(false);
    const [customAmmo, setCustomAmmo] = useState(true);
    const [disableScopes, setDisableScopes] = useState(false);

    const [weaponOne, setWeaponOne] = useState("N/A");
    const [weaponOneAmmo, setWeaponOneAmmo] = useState('N/A');
    const [weaponTwo, setWeaponTwo] = useState("N/A");
    const [weaponTwoAmmo, setWeaponTwoAmmo] = useState('N/A');

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

            return;
        }

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

    return (

        <div className="Deck">
            {console.log(weaponsPool)}
            <h3>
                <span role="img">♢</span>Loudout Randomizer<span role="img">♢</span>
            </h3>
            <h4>
                A <span>Randomized</span> Loadout Generator
            </h4>
            <h2 className="test">Name: {weaponOne.name} / Ammo Type: {weaponOneAmmo}</h2>
            <h2 className="test">Name: {weaponTwo.name} / Ammo Type: {weaponTwoAmmo}</h2>
            <button onClick={() => setQuartermaster(!quartermaster)}>{quartermaster ? 'Disable Quartermaster' : 'Enable Quartermaster '}</button>
            <button onClick={() => handleDisableScopes()}>{disableScopes ? 'Enable Scopes' : 'Disable Scopes'}</button>
            <button onClick={() => roll()}>GENERATE</button>
        </div>


    );
};

export default LoudoutRandomizer;