import {
  Button,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import palette from '@/styles/mui/palette';
import Template from '@/components/common/CustomUI/template';
import successLottie from './openprompt_success.json';

export const SUCCESS_TYPE = ['copyright_regist', 'copyright_buy', 'ticket_buy'];
type TransActionVariant = 'copyright_regist' | 'copyright_buy' | 'ticket_buy';

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const { successtype } = useParams();
  return (
    <Template>
      <LottieComponent variant={successtype} />
    </Template>
  );
};

export default SuccessPage;

interface SuccessPageProps {
  variant: TransActionVariant;
}

const LottieComponent: React.FC<any> = ({ variant }) => {
  let successType = '';
  switch (variant) {
    case 'copyright_regist':
      successType = 'Copyright registration complete!';
      break;
    case 'copyright_buy':
      successType = 'Copyright purchase complete!';
      break;
    case 'ticket_buy':
      successType = 'Ticket purchase complete!';
      break;
  }

  const data_copyright_name = '';
  const data_prompt = '';

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Lottie options={defaultOptions} height={240} width={240} />
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h3" sx={{ marginBottom: '80px' }}>
          Ticket purchase complete!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          <Typography variant="body5">Copyright Name</Typography>
          <TextField
            variant="outlined"
            value={data_copyright_name}
            disabled
            sx={{
              '&.Mui-disabled': {
                color: palette.white, // text color 변경
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: palette.primary.main, // border color 변경
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography variant="body5">Prompt</Typography>
          <Box
            component={TextareaAutosize}
            name="Outlined"
            placeholder="Type in here…"
            value={data_prompt}
            minRows={5}
            disabled // 추가된 속성
            sx={{
              border: 'none',
              width: '100%',
              backgroundColor: 'transparent',
              borderColor: palette.primary.main, // 추가된 속성
              outline: `2px solid ${palette.primary.main}`,
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '16px',
              fontFamily: 'Noto Sans',
              color: palette.white,
              '&:focus': {
                outline: `2px solid ${palette.primary.main}`,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: '40px',
            marginTop: '40px',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="rounded"
            sx={{
              width: '50%',
              backgroundColor: palette.grey[300],
              color: palette.black.main,
              //hover 색상 조금 더 진하게
              '&:hover': {
                backgroundColor: palette.grey[400],
              },
            }}
          >
            Market
          </Button>
          <Button sx={{ width: '50%' }} variant="roundedOutlined">
            MyPage
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
