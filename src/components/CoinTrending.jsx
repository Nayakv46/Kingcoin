import React from 'react'
import { Link } from 'react-router-dom';
import { currencyFormat } from '../utils';
import './coinTrending.css';

const CoinTrending = ({ coin }) => {

  return (
    <Link to={`/coin/${coin.id}`} >
    <div className="home_content-coin">
        {/* <span>{coin.score+1}</span> */}
        <img src={coin.image} alt={coin.name} />
        <p>{coin.name} <span className={coin.price_change_percentage_24h > 0 ? `text-green` : `text-red`}>{coin.price_change_percentage_24h.toFixed(2)}%</span></p>
        <p>{currencyFormat(coin.current_price)}</p>
    </div>
    </Link >
  )
}

export default CoinTrending