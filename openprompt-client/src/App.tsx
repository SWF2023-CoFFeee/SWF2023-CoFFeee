import { Global, css } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import queryClient from '@/lib/queries/queryClient';
import DynamicRoutes from './DynamicRoutes';
import theme from './styles/mui/theme';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Medium.ttf') format('truetype');
    font-weight: medium; // medium의 대표적인 값은 500입니다.
    font-style: normal;
  }
  @font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Regular.ttf') format('truetype');
    font-weight: regular;
    font-style: normal;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <DynamicRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
