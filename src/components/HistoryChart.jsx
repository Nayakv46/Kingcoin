import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom';


import './historyChart.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import Skeleton from './Skeleton';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const HistoryChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);
    
    if(!response) {
        return <Skeleton />
    }

    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function(context){
                let label = context.dataset.label || '';

                if (label) {
                  label += ': ';
                }
                if(context.parsed.y !== null){
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              },

            }
          }
        }

    }

    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
        datasets: [
            {
                fill: true,
                label: id,
                data: coinChartData.map(val => val.y),
                borderColor: '#189735',
                backgroundColor: (context) => {

                  if(!context.chart.chartArea){
                    return;
                  }
                  const { ctx, chartArea: {top, bottom} } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  gradientBg.addColorStop(0, 'rgba(32, 201, 151, 0.8')
                  gradientBg.addColorStop(0.25, 'rgba(32, 201, 151, 0.6')
                  gradientBg.addColorStop(0.5, 'rgba(32, 201, 151, 0.4')
                  gradientBg.addColorStop(0.75, 'rgba(32, 201, 151, 0.2')
                  gradientBg.addColorStop(1, 'rgba(255,255,255,0');
                  return gradientBg;
                }
            }
        ]
    }

  return (
    <section className="coingraph">
      <div className="coingraph_wrapper">
        <Line height="250" options={options} data={data} />
      </div>
    </section>
  )
}

export default HistoryChart