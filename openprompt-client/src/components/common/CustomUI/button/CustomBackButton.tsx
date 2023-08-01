import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import palette from '@/styles/mui/palette';

export type CustomBackButtonVariant = 'outlined' | 'fill';

interface CustomBackButtonProps {
  variant?: CustomBackButtonVariant;
  sx?: React.CSSProperties;
}

export const CustomBackButton: React.FC<CustomBackButtonProps> = ({
  variant = 'fill',
  sx,
}) => {
  const navigate = useNavigate();

  return (
    <IconButton
      sx={{
        display: 'inline-flex',
        width: '38px',
        height: '38px',
        alignItems: 'center',
        justifyContent: 'center',
        border: variant === 'outlined' ? '1px solid white' : 'none',
        borderRadius: '100%',
        backgroundColor:
          variant === 'fill' ? palette.black.main : 'transparent',
        padding: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
          border:
            variant === 'outlined' ? `1px solid ${palette.grey[300]}` : 'none',
          backgroundColor:
            variant === 'fill' ? palette.grey[600] : palette.grey[300],
        },
        '& .MuiSvgIcon-root': {
          width: '20px',
          height: '20px',
          color: 'white',
        },
      }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
