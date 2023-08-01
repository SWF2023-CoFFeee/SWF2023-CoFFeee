import React from 'react';
import BackgroundBasic from './BackgroundBasic';
import BackgroundAnimation from './BackgroundAnimation';
import BackgroundGradient from './BackgroundGradient';
import {
  BackgroundColors,
  IBackgroundProps,
  TBackgroundVariant,
} from './types';

interface BackgroundMainProps extends IBackgroundProps {
  variant: TBackgroundVariant;
}

export const Background: React.FC<BackgroundMainProps> = ({
  children,
  variant = 'basic',
  color = 'default',
  sx,
}) => {
  const baseStyle = {
    backgroundColor: BackgroundColors[color],
  };

  switch (variant) {
    case 'basic':
      return (
        <BackgroundBasic sx={{ ...baseStyle, ...sx }}>
          {children}
        </BackgroundBasic>
      );
    case 'animation':
      return (
        <BackgroundAnimation sx={{ ...baseStyle, ...sx }}>
          {children}
        </BackgroundAnimation>
      );
    case 'gradient':
      return (
        <BackgroundGradient sx={{ ...baseStyle, ...sx }}>
          {children}
        </BackgroundGradient>
      );
    default:
      return null;
  }
};
