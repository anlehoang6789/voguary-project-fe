import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

export default function PieChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'pie'> | null>(null); // Xác định kiểu cụ thể của biểu đồ

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Hủy bỏ biểu đồ cũ trước khi tạo biểu đồ mới
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        // Tạo biểu đồ mới
        chartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Nam', 'Nữ'],
            datasets: [
              {
                data: [18, 82],
                backgroundColor: ['#4F46E5', '#F43F5E'],
                hoverBackgroundColor: ['#4439CC', '#E11A3C']
              }
            ]
          },
          options: {
            // Cấu hình thêm tùy chọn nếu cần
          }
        });
      }
    }
    // Hủy bỏ biểu đồ khi component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='max-w-full md:w-2/3 p-1 ml-14 '>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
