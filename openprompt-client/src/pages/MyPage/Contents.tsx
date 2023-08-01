import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import CustomCardOutlinedGradient from '@/components/common/CustomUI/card/CustomCardOutlinedGradient';
import CustomCardOutlinedRounded from '@/components/common/CustomUI/card/CustomCardOutlinedRounded';
import palette from '@/styles/mui/palette';
import CustomChip from '../MarketPage/CustomChip';
import sampleImg from './sample-img.png';

const ContentDonateHistory = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
    </Container>
  );
};

const EthereumIcon = () => {
  return (
    <img src="/imgs/eth-logo.png" width="13" height="22" alt="Ethereum Logo" />
  );
};

const ContentOwnNFT = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        p: '0',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
      </Grid>
    </Container>
  );
};

const ContentPersonalInfo = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
    </Container>
  );
};

export { ContentDonateHistory, ContentOwnNFT, ContentPersonalInfo };

const CardExample = () => {
  return (
    <Card
      sx={{
        width: '240px',
        maxHeight: '312px',
        borderRadius: '0.8rem',
        border: `solid 1px ${palette.grey[400]}`,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            width="213px"
            height="213px"
            image={sampleImg}
            alt="card image"
            sx={{
              maxWidth: '214px',
              borderRadius: '0.8rem',
              backgroundColor: '#000000',
            }}
          />

          <CardContent
            sx={{
              padding: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '95%',
              height: '100%',
              gap: '5px',
            }}
          >
            <Typography sx={{ width: '100%' }} variant="body2">
              NameNameName
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box
                  sx={{
                    marginBottom: '7px',
                    width: '24px',
                    height: '24px',
                    margin: '0px',
                  }}
                >
                  <EthereumIcon />
                </Box>
                <Typography variant="body1">0.05ETH</Typography>
              </Box>
              <Box>
                <CustomChip AI_type="StableDiffusion" />
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
