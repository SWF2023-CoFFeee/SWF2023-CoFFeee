import { Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import Template from '../template';
import loadingLottie from './openprompt_loading.json';

const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Box>
  );
};

type TransActionVariant = 'copyright_regist' | 'copyright_buy' | 'ticket_buy';

interface CustomTransactionLoadingProps {
  variant: TransActionVariant;
}

const CustomTransactionLoading: React.FC<CustomTransactionLoadingProps> = ({
  variant,
}) => {
  let loadingText = '';
  switch (variant) {
    case 'copyright_regist':
      loadingText = 'Copyright\nregistration in progress';
      break;
    case 'copyright_buy':
      loadingText = 'Copyright\ntransaction in progress';
      break;
    case 'ticket_buy':
      loadingText = 'Ticket\ntransaction in progress';
      break;
  }

  return (
    <Template>
      <LottieComponent />
      <Typography
        variant="h3"
        style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
      >
        {loadingText}
      </Typography>
    </Template>
  );
};

export default CustomTransactionLoading;
