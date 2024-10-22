import React from 'react'
import './Common.css'
import WebLogo from '../img/Logo.png'

export default function Header() {

    return (
        <header>
            <img src={WebLogo} class="logoimg"/>
            <div class="langContainer" style={{ right: '100px' }}>
                <a class="lang en">En</a>
                <div class="langLine"></div>
                <a class="lang th">Th</a>
            </div>
        </header>
    );
}