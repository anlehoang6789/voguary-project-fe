import { Alert, Button, Skeleton } from 'antd';
import { useState } from 'react';
import { useGetAllColorQuery } from 'services/color.services';

export default function FilterColor() {
  // const colors = ['#FF0000', '#00FF00', '#310dd351', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FFFFFF'];
  const { data: colors, isLoading, error, isSuccess } = useGetAllColorQuery();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorClick = (color: string) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColors) => selectedColors !== color)
        : [...prevSelectedColors, color]
    );
  };

  return (
    <div>
      {isLoading && <Skeleton active />}
      {error && <Alert message='Error loading colors' type='error' />}
      {isSuccess &&
        colors &&
        colors.map((color) => (
          <Button
            size='large'
            key={color.colorId}
            style={{
              backgroundColor: color.hexCode,
              width: '40px',
              height: '40px',
              margin: '5px',
              position: 'relative'
            }}
            onClick={() => handleColorClick(color.hexCode)}
          >
            {selectedColors.includes(color.hexCode) && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '24px',
                  color: color.hexCode === '#000000' ? '#FFFFFF' : '#000000'
                }}
              >
                ✓
              </div>
            )}
          </Button>
        ))}
    </div>
  );
}
