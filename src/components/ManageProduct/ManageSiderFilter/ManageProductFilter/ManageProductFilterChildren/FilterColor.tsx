import { Button } from 'antd';
import { useState } from 'react';

export default function FilterColor() {
  const colors = ['#FF0000', '#00FF00', '#310dd351', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FFFFFF'];
  const [selectedColors, setSelectedColors] = useState<string[]>([colors[0]]);

  const handleColorClick = (color: string) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColor) => selectedColor !== color)
        : [...prevSelectedColors, color]
    );
  };

  return (
    <div>
      {colors.map((color, index) => (
        <Button
          size='large'
          key={index}
          style={{
            backgroundColor: color,
            width: '40px',
            height: '40px',
            margin: '5px',
            position: 'relative'
          }}
          onClick={() => handleColorClick(color)}
        >
          {selectedColors.includes(color) && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '24px',
                color: color === '#000000' ? '#FFFFFF' : '#000000'
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
