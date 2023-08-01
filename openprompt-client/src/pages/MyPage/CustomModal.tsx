import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Radio,
  Avatar,
} from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '@/styles/mui/theme';
import CustomChip from '../MarketPage/CustomChip';
import sampleImg from './sample-img.png';
const EthereumIcon = () => {
  return (
    <img src="/imgs/eth-logo.png" width="13" height="22" alt="Ethereum Logo" />
  );
};

const BackdropFilter = styled('div')({
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const style = {
  position: 'absolute',
  top: '50.5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '99.9%',
  maxWidth: 1100,
  height: '100.5%',
  bgcolor: '#050C1A',
  boxShadow: 24,
  paddingTop: '45px',
  paddingBottom: '45px',
  paddingLeft: '60px',
  paddingRight: '60px',
  color: 'white',
  fontFamily: 'Roboto', // 이거 바꿔야 함 !!! 에러 방지용
  border: '1px transparent',
  borderImageSlice: 1,
  borderRadius: '40px',
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
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

const CustomModal = () => {
  const [open, setOpen] = useState(false);
  const selectedValue = 0;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <BackdropFilter onClick={handleClose} />
          <Box
            sx={{
              backgroundColor: 'red',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: 1100,
              height: 700,
              borderRadius: '53px',
              border: '4px solid transparent',
              background: `linear-gradient(160deg, rgba(255, 255, 255, 1) 0%, rgba(128, 128, 128, 0) 45%)`,
            }}
          >
            <Card sx={style}>
              <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flex: '1.1',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    gap: '15px',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={sampleImg}
                    alt="Image"
                    sx={{ flex: '0.9', borderRadius: '25px' }}
                  />
                  <Box
                    sx={{
                      flex: '0.1',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '40px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CustomChip AI_type="StableDiffusion" />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Avatar
                        variant="rounded"
                        {...stringAvatar('Kent Dodds')}
                        sx={{ width: 26, height: 26, marginRight: '10px' }}
                      />
                      <Typography>Username</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: '0.9',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    paddingLeft: '50px',
                  }}
                >
                  <Box
                    sx={{
                      flex: '0.1',
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Box>
                      <ClearIcon />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      flex: '0.80',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <Box sx={{ flex: '0.1' }}>
                      <Typography variant="body4">NameNameName</Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: '0.1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0px',
                      }}
                    >
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
                      <Typography variant="body4">0.008ETH</Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: '0.1',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                      }}
                    >
                      <Typography
                        variant="body5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Register Type
                      </Typography>
                      <Radio
                        checked={selectedValue === 0}
                        value="0"
                        name="radio-buttons"
                      />
                    </Box>
                    <Box
                      sx={{
                        flex: '0.2',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <Typography variant="body5">Copyright Name</Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          border: '1px solid #AEFF29',
                          padding: '10px',
                          borderRadius: '7px',
                        }}
                      >
                        American Barbizon School_Satori Canton
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: '0.5',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <Typography variant="body5">Prompt</Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          border: '1px solid #AEFF29',
                          padding: '10px',
                          borderRadius: '7px',
                        }}
                      >
                        Close up of a forest drwaing on white paper laying on a
                        oak wooden table with color pencils and coffee on it,
                        shot from above in natural sunlight. The style is hyper
                        - realistic, with a high level of detail in the texture.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      flex: '0.1',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      gap: '20px',
                    }}
                  >
                    {/* <Button variant={'rounded'} sx={{ color: palette.primary.main, flex: '0.5' }}>Copy Prompt</Button> */}
                    <Button
                      variant="rounded"
                      type="submit"
                      sx={{
                        flex: '0.5',
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.black.main,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Register
                    </Button>
                    <Button
                      variant="roundedOutlined"
                      sx={{ flex: '0.5', gap: '4px' }}
                    >
                      <GetAppIcon />
                      <Typography>Download</Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </>
      </Modal>
    </div>
  );
};

export default CustomModal;
