import React from 'react';
import { Link } from 'react-router-dom';

import { currencyFormat } from '../utils';

import './coin.css';

const Coin = ({ coin }) => {


  return (
    <Link to={`/coin/${coin.id}`} >
    <div className='coin-row'>
        <div className='coin-name'>
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            
        </div>
        <span className='coin-price'>{currencyFormat(coin.current_price)}</span>
        <span className={`coin-change ${coin.price_change_percentage_24h < 0 ? 'text-red' : 'text-green'}`}>
            {coin.price_change_percentage_24h.toFixed(2)} %
        </span>
        <div className='coin-market_cap'>
    
            <span>{currencyFormat(coin.market_cap)}</span>
        </div>
    </div>
    </Link >
  )
}

export default Coin