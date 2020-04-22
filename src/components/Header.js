import React from 'react';
import headerImg from '../assets/images/Pokemon_Header.png';


export default function Header() {
    return (
        <header>
            <img src={headerImg} alt="Poke"/>
        </header>
    );
}