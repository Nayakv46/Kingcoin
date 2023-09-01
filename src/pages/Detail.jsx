import React from 'react'
import HistoryChart from '../components/HistoryChart'
import CoinDetail from '../components/CoinDetail'
import './detail.css';

const Detail = () => {
  return (
    <div className="detail_wrapper">
      <CoinDetail />
      <HistoryChart />
    </div>
  )
}

export default Detail