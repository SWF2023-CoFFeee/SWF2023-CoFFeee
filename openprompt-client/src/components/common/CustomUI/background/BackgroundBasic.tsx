// BackgroundBasic.tsx
import { styled } from '@mui/system';
import { IBackgroundProps, BackgroundColors } from './types';

const BackgroundBasic = styled('div')<IBackgroundProps>(
  ({ color = 'default', style }) => ({
    backgroundColor: BackgroundColors[color],
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    zIndex: 0,
    paddingTop: '120px',
    ...style,
  }),
);

export default BackgroundBasic;
