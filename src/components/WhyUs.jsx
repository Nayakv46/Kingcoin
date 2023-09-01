import React from 'react';

import whyUsImg from '../assets/choose-image.png';

import WhyUsBox from './WhyUsBox';

import './whyUs.css';

const WhyUs = () => {
  return (
    <section id="choose" className="whyus">
        <h1>WHY <span>CHOOSE US</span></h1>
        <div className='whyus__content'>
            <div className="whyus__content-left">
                <WhyUsBox icon="wallet" header="CONNECT YOUR WALLET" paragraph="Use Trust Wallet or Metamask to connect to the app." />
                <WhyUsBox icon="pen-ruler" header="SELECT YOUR QUANTITY" paragraph="Upload your crypto and set a title, description and price." />
                <WhyUsBox icon="bolt" header="CONFIRM TRANSACTION" paragraph="Earn by selling your crypto on our marketplace." />
            </div>

            <div className="whyus__content-middle">
                <img src={whyUsImg} alt="whyus" />
            </div>

            <div className="whyus__content-right">
                <WhyUsBox icon="satellite-dish" header="RECEIVE YOUR OWN NFTS" paragraph="Invest all your crypto at one place on one platform." />
                <WhyUsBox icon="chess-knight" header="TAKE  A MARKET TO SELL" paragraph="Discover and collect the right crypto collections to buy or sell." />
                <WhyUsBox icon="boxes-stacked" header="DRIVE YOUR COLLECTION" paragraph="We make it easy to Discover, Invest and manage." />
            </div>
        </div>
    </section>
  )
}

export default WhyUs