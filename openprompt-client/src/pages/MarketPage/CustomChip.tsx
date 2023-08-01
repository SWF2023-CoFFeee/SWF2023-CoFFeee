import { Chip } from '@mui/material';
import palette from '@/styles/mui/palette';

const StableDiffusionICon = () => {
  return (
    <img
      src="/imgs/stable-diffusion-logo.png"
      width="18"
      height="18"
      alt="Stable Diffusion Logo"
    />
  );
};

interface CustomChipProps {
  AI_type?: string;
}

const CustomChip: React.FC<CustomChipProps> = ({ AI_type }) => {
  const AI_type_icon =
    AI_type === 'StableDiffusion' ? <StableDiffusionICon /> : <></>;

  return (
    <>
      <Chip
        label={AI_type}
        icon={AI_type_icon}
        sx={{
          maxWidth: '120px',
          height: '25px',
          backgroundColor: palette.grey[600],
          color: 'white',
          marginBottom: '0px',
          paddingLeft: '5px',
          '& .MuiChip-label': {
            fontSize: '12px',
            fontWeight: 'normal',
            color: palette.grey[200],
            fonttFamily: 'Noto Sans',
            p: '6px',
          },
        }}
      />
    </>
  );
};

export default CustomChip;
