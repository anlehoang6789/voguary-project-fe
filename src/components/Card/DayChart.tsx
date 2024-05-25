import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'],
  datasets: [
    {
      label: 'Doanh thu',
      data: [5000, 6000, 5500, 7000, 6500, 7200, 6800],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1
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

export default function DayChart() {
  return (
    <div>
      <h2>Biểu đồ doanh thu theo ngày</h2>
      <Bar className='mt-20' data={data} options={options} />
    </div>
  );
}
