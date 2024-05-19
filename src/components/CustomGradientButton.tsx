import { TinyColor } from '@ctrl/tinycolor';
import { ConfigProvider } from 'antd';
import React from 'react';

interface CustomGradientButtonProps {
  children: React.ReactNode;
}

export default function CustomGradientButton({ children }: CustomGradientButtonProps) {
  //Custom color gradient cho button
  const colorGradientButton = ['#00c6ff', '#0072ff'];
  const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colorGradientButton.join(', ')})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colorGradientButton).join(', ')})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colorGradientButton).join(', ')})`,
            lineWidth: 0
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}
