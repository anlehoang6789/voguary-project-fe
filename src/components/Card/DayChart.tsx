import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Ngày 17', 'Ngày 18', 'Ngày 19', 'Ngày 20', 'Ngày 21', 'Ngày 22', 'Ngày 23'],
  datasets: [
    {
      label: 'Doanh thu',
      data: [50000, 612305, 133455, 756332, 0, 0, 0],
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
