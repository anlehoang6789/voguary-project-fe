import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  datasets: [
    {
      label: 'Doanh thu',
      data: [50000, 60000, 55000, 70000, 65000, 72000, 68000, 75000, 80000, 78000, 85000, 90000],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointRadius: 5
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export default function LineChart() {
  return (
    <div>
      <h2>Biểu đồ doanh thu theo 12 tháng</h2>
      <Line data={data} options={options} />
    </div>
  );
}
