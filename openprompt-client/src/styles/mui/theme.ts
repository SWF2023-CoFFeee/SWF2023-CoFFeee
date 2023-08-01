import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

export const primaryHover = {
  '&:hover': {
    backgroundColor: '#79B21C',
  },
};

export const lightHover = {
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 백그라운드 hover 효과 변경
  },
};

const theme = createTheme({
  palette: palette,
  typography: typography,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.white,
        },
      },
      variants: [
        {
          props: { variant: 'h3' },
          style: {
            fontFamily: 'Oswald',
            fontWeight: 'bold',
            fontSize: '38px',
            lineHeight: 'auto',
          },
        },
        {
          props: { variant: 'body3' },
          style: {
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '40px',
            display: 'block',
          },
        },
        {
          props: { variant: 'body4' },
          style: {
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: 'auto',
            display: 'block',
          },
        },
        {
          props: { variant: 'body5' },
          style: {
            fontFamily: 'Oswald',
            fontWeight: 'medium',
            fontSize: '14px',
            lineHeight: 'auto',
          },
        },
        {
          props: { variant: 'button' },
          style: {
            fontFamily: 'Oswald',
            fontWeight: 'medium',
            fontSize: '18px',
            lineHeight: 'auto',
            display: 'block',
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: palette.grey[300],
          },
          '& label.Mui-focused': {
            color: palette.primary.main,
          },
          // TextField standard
          '& .MuiInput-underline': {
            '&:before': {
              borderBottomColor: palette.grey[300],
            },
            borderBottomColor: palette.grey[400],
          },
          // TextField Filled
          '& .MuiFilledInput-root': {
            backgroundColor: palette.grey[600],
            '&:hover': {
              backgroundColor: palette.grey[600],
            },
          },
          // TextField outlined
          '& .MuiOutlinedInput-root': {
            padding: '0px',
            borderRadius: '7px',
            '& input': {
              padding: '12px 16px',
            },
            '& fieldset': {
              borderColor: palette.white,
            },
            '&:hover fieldset': {
              borderColor: palette.white,
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
    //MuiDisabled outline white만들기
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& input': {
              color: palette.white,
            },
            '& fieldset': {
              borderColor: palette.white,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: palette.white,
          '&.Mui-disabled .MuiInputBase-input': {
            opacity: 1,
            WebkitTextFillColor: palette.grey[400],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(150,150,150, 0.4)',
          color: palette.white,
          border: 'white',
        },
      },
    },
    // BUTTON
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.white,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // 소문자 허용 override
          fontSize: '16px',
          fontWeight: 'medium',
          fontFamily: 'Oswald',
          lineHeight: 'auto',
        },
      },
      variants: [
        // Transparent
        {
          // transparent variant와 Mui의 color prop은 공존할 수 없음( opacity 구조적 한계)
          props: { variant: 'transparent', size: 'small' },
          style: {
            textTransform: 'none',
            color: palette.white,
            backgroundColor: 'rgba(5, 12, 26, 0.6)',
            padding: '5px 20px',
            minWidth: '70px',
            ...primaryHover,
          },
        },
        {
          props: { variant: 'transparent', size: 'medium' },
          style: {
            textTransform: 'none',
            color: palette.white,
            backgroundColor: 'rgba(5, 12, 26, 0.6)',
            padding: '7px 30px',
            minWidth: '90px',
            ...primaryHover,
          },
        },
        {
          props: { variant: 'transparent', size: 'large' },
          style: {
            textTransform: 'none',
            color: palette.white,
            backgroundColor: 'rgba(5, 12, 26, 0.6)',
            padding: '9px 40px',
            minWidth: '110px',
            ...primaryHover,
          },
        },
        {
          props: { variant: 'transparentLight', size: 'small' },
          style: {
            textTransform: 'none',
            color: palette.black.main,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '5px 20px',
            minWidth: '70px',
            ...lightHover,
          },
        },
        {
          props: { variant: 'transparentLight', size: 'medium' },
          style: {
            textTransform: 'none',
            color: palette.black.main,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '7px 30px',
            minWidth: '90px',
            ...lightHover,
          },
        },
        {
          props: { variant: 'transparentLight', size: 'large' },
          style: {
            textTransform: 'none',
            color: palette.black.main,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '9px 40px',
            minWidth: '110px',
            ...lightHover,
          },
        },
        // Rounded
        {
          props: { variant: 'rounded', size: 'small' },
          style: {
            padding: '8px 25px',
            minWidth: '80px',
            borderRadius: '150px',
            color: '#FFFFFF',
            backgroundColor: palette.black.main,
            ...primaryHover,
          },
        },
        {
          props: { variant: 'rounded', size: 'medium' },
          style: {
            padding: '10px 35px',
            minWidth: '100px',
            borderRadius: '150px',
            color: '#FFFFFF',
            backgroundColor: palette.black.main,
            ...primaryHover,
          },
        },
        {
          props: { variant: 'rounded', size: 'large' },
          style: {
            padding: '12px 45px',
            minWidth: '120px',
            borderRadius: '150px',
            color: '#FFFFFF',
            backgroundColor: palette.black.main,
            ...primaryHover,
          },
        },

        // RoundedOutlined
        {
          props: { variant: 'roundedOutlined', size: 'small' },
          style: {
            padding: '7px 25px',
            minWidth: '80px',
            borderRadius: '150px',
            color: palette.grey[200],
            backgroundColor: 'transparent',
            border: `2px solid ${palette.grey[200]}`,
          },
        },
        {
          props: { variant: 'roundedOutlined', size: 'medium' },
          style: {
            padding: '9px 35px',
            minWidth: '100px',
            borderRadius: '150px',
            color: palette.grey[200],
            backgroundColor: 'transparent',
            border: `2px solid ${palette.grey[200]}`,
          },
        },
        {
          props: { variant: 'roundedOutlined', size: 'large' },
          style: {
            padding: '11px 45px',
            minWidth: '120px',
            borderRadius: '150px',
            color: palette.grey[200],
            backgroundColor: 'transparent',
            border: `2px solid ${palette.grey[200]}`,
          },
        },
      ],
    },
  },
});

export default theme;
