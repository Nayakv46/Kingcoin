import React from 'react';

import './join.css';

import bitcoinImg from '../assets/bitcoin-img.png';
import ethImg from '../assets/ethereum-img.png';

const Join = () => {
  return (
    <section id="join" className="join">
        <div className="join__content">
            <img src={bitcoinImg} alt="bitcoin" className="btc-float2" />
            <div className="join__content-text">
                <h1>JOIN US VIA <br/><span>DISCORD</span></h1>
                <p>Invest and manage all your crypto at one place.</p>

            </div>
            <img src={ethImg} alt="ethereum" className="eth-float2" />

            <div className="join__content-button">
                <a href="https://discord.com" target="_blank" rel="noreferrer" >Join via Discord</a>
            </div>
        </div>
    </section>
  )
}

export default Join