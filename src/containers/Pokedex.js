import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pokedex() {
    return (
        <div className="Pokedex-container">
            <Header />
            <Navbar />
            <Card />
            <Footer />
        </div>
    );
}
