import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetMonthlyRevenue2024Query } from 'services/dashboard.services'; // Thay đổi đường dẫn tới dashboardApi

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export default function LineChart() {
  const { data: monthlyRevenueData, error, isLoading } = useGetMonthlyRevenue2024Query();

  const [data, setData] = useState({
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
        data: [], // Dữ liệu sẽ được cập nhật sau khi nhận được từ API
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5
      }
    ]
  });

  useEffect(() => {
    if (monthlyRevenueData) {
      const revenueValues = Object.values(monthlyRevenueData)[0]; // Lấy giá trị từ key '6/2024'
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: revenueValues
          }
        ]
      });
    }
  }, [monthlyRevenueData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <div>
      <h2>Biểu đồ doanh thu theo 12 tháng</h2>
      <Line data={data} options={options} />
    </div>
  );
}
