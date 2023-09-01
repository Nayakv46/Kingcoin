import React from 'react'
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { currencyFormat } from '../utils';

import './coindetail.css';
import Skeleton from './Skeleton';

const CoinDetail = () => {
    const { id } = useParams()
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`);
    console.log(response);
    if(!response) {
        return <Skeleton />
    }
  return (
    <section className="coindetail">
        <div className="coindetail-content_left">
          <img src={response.image.large} alt={response.name} />
          <h1>{response.name}</h1>
          <h4>Rank: #{response.coingecko_rank}</h4>
        </div>

        <div className="coindetail-content_right">
          <div className="coindetail-content_right-info">

            <div className="info-change">
              24h Change: <span className={response.market_data.price_change_percentage_24h > 0 ? `text-green` : `text-red`}>{response.market_data.price_change_percentage_24h.toFixed(2)}%</span>
            </div>

            <div className="info-price">
              Price: <span className={response.market_data.price_change_percentage_1h_in_currency.usd > 0 ? `text-green` : `text-red`} >{currencyFormat(response.market_data.current_price.usd)}</span>
            </div>
            
            <div className="info-symbol">
              Symbol: 
              <span> {response.symbol}</span>
            </div>

          </div>
          
          <p dangerouslySetInnerHTML={{ __html: response.description.en}} className="coindetail-content_right-description"></p>
        </div>
    </section>
  )
}

export default CoinDetail