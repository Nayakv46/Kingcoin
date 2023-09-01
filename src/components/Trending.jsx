import React from 'react';

import useAxios from '../hooks/useAxios';
import CoinTrending from './CoinTrending';
import Skeleton from './Skeleton';

import bitcoinImg from '../assets/bitcoin-img.png';
import ethImg from '../assets/ethereum-img.png';

import { BiChevronDown } from 'react-icons/bi';

import './trending.css';

const Trending = () => {
    // const { response, loading } = useAxios('search/trending');

    const { response, loading, error } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`);
    console.log(response);

    if(error){
      return (
        <section className="error">
          <div className="error_content">
            <Skeleton />
            <h2>In case of coins not loading, try again in a few moments...</h2>
            
          </div>
        </section>
      )
    }

    if(loading) {
      return (
        <Skeleton/>
      )
    }

  return (
    <section id="home">
        <div className="home_title">
          <img className="btc-float" src={bitcoinImg} alt="Bitcoin" />
          <h1>
          TRACK AND TRADE <br/><span>CRYPTO CURRENCIES</span>
          </h1>
          <img className="eth-float" src={ethImg} alt="Ethereum" />
        </div>

        <div className="home_button">
            <a href="#market">
            See Prices<BiChevronDown size={30} />
            </a>
        </div>

        <div className="home_content">

          { response && response.map(coin => <CoinTrending key={coin.symbol} coin={coin} />)}
        </div>
        {/* { response ? <CoinTrending key={response.symbol} coin={response} /> : null } */}
    </section>
  )
}

export default Trending