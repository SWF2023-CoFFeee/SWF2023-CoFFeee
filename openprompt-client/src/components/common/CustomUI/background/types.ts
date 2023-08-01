import { ReactNode, CSSProperties } from 'react';

export type TBackgroundVariant = 'basic' | 'animation' | 'gradient';

export type TBackgroundColor = 'default' | 'white' | '#050C1A';

export interface ISubBackgroundProps {
  children: ReactNode;
  sx?: CSSProperties;
}

export interface IBackgroundProps extends ISubBackgroundProps {
  color?: TBackgroundColor;
}

export const BackgroundColors = {
  default: '#050C1A',
  white: '#FFFFFF',
  '#050C1A': '#050C1A',
};
