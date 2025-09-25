import { ChartConfiguration } from 'chart.js';
import { Animal } from '../models/animal';

export const ZOO_STATS_CHART_CONFIG = (data:Animal): ChartConfiguration<'bar'> => ({
  type: 'bar',
  data: {
    labels : ['Zoo Stats'],
    datasets: [
      {
        label: 'Total Animals',
        data:[ data.age],
        backgroundColor: '#4CAF50',
      },
      

    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
});
