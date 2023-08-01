import React from 'react';
import { keyframes, styled } from '@mui/system';
import BackgroundBasic from './BackgroundBasic';
import { IBackgroundProps } from './types';

const moveAndRotate = keyframes`
  0% {
    transform: translateY(-50%) translate(60%, 20%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) translate(-100%, 70%) rotate(230deg);
  }
`;

const AnimatedSymbol = styled('img')({
  position: 'fixed',
  width: '100vw',
  height: '100%',
  filter: 'blur(15px)',
  animation: `${moveAndRotate} 80s linear infinite`,
  zIndex: -1,
});

const BackgroundAnimation: React.FC<IBackgroundProps> = ({
  children,
  color = 'default',
  sx,
}) => {
  return (
    <BackgroundBasic color={color} sx={sx}>
      <AnimatedSymbol src="/imgs/symbolGradient.svg" />
      {children}
    </BackgroundBasic>
  );
};

export default BackgroundAnimation;
