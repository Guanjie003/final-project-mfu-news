import React from 'react'
import './Common.css'
import WebLogo from '../img/Logo.png'
import UserIcon from '../img/user-icon.svg'
import AngleIcon from '../img/angle-icon.svg'

export default function HeaderSignedIn() {

    return (
        <header>
            <img src={WebLogo} class="logoimg"/>
            <div class="langContainer" style={{ right: '450px' }}>
                <a class="lang en">En</a>
                <div class="langLine"></div>
                <a class="lang th">Th</a>
            </div> 
            <div class="linebetween"/>
            <div class="user">
                <img src={UserIcon} class="userimg"/>
                <p class="position">position</p>
                <p class="username">username</p>
                <img src={AngleIcon} class="angle"/>
            </div>
        </header>
  );
}