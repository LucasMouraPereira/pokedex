import React from 'react';
import {FaSearch} from 'react-icons/fa'


export default function Navbar() {
    return (
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="#">Geração 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 3</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 4</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 5</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 6</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Geração 7</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Geração 8</a>
            </li>
            <span> Pesquise seu pokemon </span>
            <form>
                <div className="from-row">
                    <div className="col">
                        <input type="text" className="from-control" placeholder="Pesquisar"/>
                        <button type="button">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </form>  
        </ul> 
    );
}

