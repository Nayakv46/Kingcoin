import { React, useState, useEffect } from 'react'
//import useAxios from '../hooks/useAxios';
import Coin from './Coin';

//import axios from 'axios';
import './markets.css';

//import Skeleton from './Skeleton';

const Markets = () => {
  const [Page, setPage] = useState(1); 
  const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${Page}&sparkline=false`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  //const [coins, setCoins] = useState("");
 
  // const { response, loading, refetch } = useAxios(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${Page}&sparkline=false`);

  const pageHandler = (e) => {

    document.querySelectorAll("button").forEach(button => button.classList.remove("activePage"));

    e.target.classList.add("activePage");
    setPage(e.target.innerText);

  }


  // if(loading){
  //   return (
  //     <Skeleton className="" />
  //   )
  // }

    

  return (
    <section id="market">
      <h1 className="markets-title">Market Update</h1>
      <div className="markets">
        <div className="markets-wrapper">
          <div className="markets-legend">
            <span>Coin</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Market Cap</span>
          </div>
          <div className="markets-list">
            {/* { response && response.map(coin => <Coin key={coin.id} coin={coin} />)} */}
            {data && data.map(coin => <Coin key={coin.id} coin={coin} />)}
          </div>
        </div>
      </div>
      <div className="market_page-buttons">
        <button className="activePage" onClick={(e) => {pageHandler(e); }}>1</button>
        <button onClick={(e) => {pageHandler(e); }}>2</button>
        <button onClick={(e) => {pageHandler(e);}}>3</button>
        <button onClick={(e) => {pageHandler(e); }}>4</button>
        <button onClick={(e) => {pageHandler(e); }}>5</button>
      </div>
    </section>
  )
}

export default Markets