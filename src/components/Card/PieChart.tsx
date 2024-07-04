import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { useGetMostOrderedProductCategoryQuery } from 'services/dashboard.services';

export default function PieChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'pie'> | null>(null); // Xác định kiểu cụ thể của biểu đồ

  const { data, error, isLoading } = useGetMostOrderedProductCategoryQuery();

  useEffect(() => {
    if (data) {
      const categoryLabels = data.map((category) => category.categoryName);
      const orderCounts = data.map((category) => category.orderCount);

      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chartInstanceRef.current = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: categoryLabels,
              datasets: [
                {
                  data: orderCounts,
                  backgroundColor: ['#4F46E5', '#F43F5E', '#10B981', '#3B82F6', '#F59E0B', '#6366F1', '#EF4444'],
                  hoverBackgroundColor: ['#4338CA', '#DC2626', '#059669', '#2563EB', '#D97706', '#4C51BF', '#B91C1C']
                }
              ]
            },
            options: {}
          });
        }
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className='p-1 ml-14 '>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
