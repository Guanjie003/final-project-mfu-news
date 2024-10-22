import React from 'react'
import './Common.css'
import logoblackwhite from '../img/Logo-blackwhite.png'
import envelope from '../img/envelope-icon.svg'

export default function Footer() {
    
  return (
    <footer>
        <img src={logoblackwhite} class="logofooter"/>
        <p class="contact">Contact us</p>
        <img src={envelope} class="envelope"/>
        <p class="gmail">gmail</p>
    </footer>
  );
}