import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';

const StableDiffusionICon = () => {
  return (
    <img
      src="/imgs/stable-diffusion-logo.png"
      width="24"
      height="24"
      alt="Stable Diffusion Logo"
    />
  );
};

const EthereumIcon = () => {
  return (
    <img
      src="/imgs/eth-logo.png"
      width="22"
      height="35.83"
      alt="Ethereum Logo"
    />
  );
};

const ProductDetailPage = () => {
  const { productid } = useParams();
  // TODO 이걸로 GET 하세요

  // 수정해야함
  const product_type = 'Ticket';
  const owner_id = 'true';
  const my_id = 'true';
  const owner_name = 'Username';
  const like_cnt = 132;
  const price = 15;
  const AI_type = 'Stable Diffusion';
  const title = 'NameNameName';

  const AI_type_icon =
    AI_type === 'Stable Diffusion' ? <StableDiffusionICon /> : <></>;

  return (
    <Template>
      <Box sx={{ width: '95%', minHeight: 'calc(100vh - 120px)' }}>
        <Box sx={{ alignSelf: 'left', marginBottom: '50px' }}>
          {/* <CustomBackButton variant="outlined" /> */}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{ color: palette.grey[400], marginBottom: '30px' }}
          >
            {product_type}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Container
            sx={{
              width: '525px',
              height: '525px',
              backgroundColor: 'red',
              marginRight: '3%',
              borderRadius: '10px',
            }}
          ></Container>
          <Container
            sx={{
              width: '50%',
              paddingTop: '20px',
            }}
          >
            <Typography variant="h2" sx={{ textAlign: 'left' }}>
              {title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: '7px' }}>
                <EthereumIcon />
              </Box>
              <Typography
                variant="h2"
                sx={{ marginBottom: '15px', marginLeft: '5px' }}
              >
                {price} ETH
              </Typography>
            </Box>
            <Chip
              label={AI_type}
              icon={AI_type_icon}
              sx={{
                backgroundColor: palette.grey[600],
                color: 'white',
                marginBottom: '20px',
                paddingLeft: '5px',
                '& .MuiChip-label': {
                  fontSize: '18px',
                  fontWeight: 'normal',
                  color: palette.grey[200],
                  fonttFamily: 'Noto Sans',
                },
              }}
            />
            <Box
              sx={{
                paddingLeft: '5px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{ color: 'white' }}
                fontSize="large"
              />
              <Typography sx={{ marginLeft: '12px' }} variant="body2">
                {like_cnt}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              {`Check out this amazing style!`}
              <br />
              <br />
              {`Grab this Midjourney v5.2 prompt, add your own ideas, and get a ton of these unique beauties. They're perfect for posters, album covers, nfts, etc. Try it!`}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Avatar
                variant="rounded"
                {...stringAvatar('Kent Dodds')}
                sx={{ width: 26, height: 26, marginRight: '10px' }}
              />
              <Typography variant="body2"> {owner_name}</Typography>
            </Box>

            {owner_id !== my_id ? (
              <OnwerButtonGroup />
            ) : (
              <Button
                variant="rounded"
                sx={{
                  width: '400px',
                  backgroundColor: palette.primary.main,
                  color: palette.black.main,
                  marginBottom: '40px',
                }}
              >
                {`Buy Now`}
              </Button>
            )}

            <Typography variant="body1" sx={{ color: palette.grey[400] }}>
              After purchasing, you will gain access to the prompt file, which
              you can use with Midjourney. You must already have access to
              Midjourney to use this prompt.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Template>
  );
};

export default ProductDetailPage;

const OnwerButtonGroup = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
      <Button
        variant="rounded"
        sx={{
          width: '138px',
          height: '53px',
          backgroundColor: palette.primary.main,
          color: palette.black.main,
          marginBottom: '40px',
        }}
      >
        <EditIcon sx={{ marginRight: '8px' }} />
        Edit
      </Button>
      <Button
        variant="roundedOutlined"
        sx={{
          width: '138px',
          height: '53px',
          border: `2px solid ${palette.primary.main}`,
          marginBottom: '40px',
          color: palette.primary.main,
        }}
      >
        <DeleteIcon
          sx={{
            marginRight: '8px',
          }}
          color="primary"
        />
        Delete
      </Button>
    </Box>
  );
};

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
