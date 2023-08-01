import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  TextareaAutosize,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Button,
  Icon,
  Tooltip,
} from '@mui/material';
import { WarningAmber } from '@mui/icons-material';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';
import theme from '@/styles/mui/theme';
import { useWeb3 } from '@/lib/hooks/useWeb3';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { ADDR_TOKEN_KEY } from '@/constants/token';
import { CoffeeeAbi, CONTRACT_ADDR } from '@/lib/abis/OpenPromptABI';
import CustomNoMaxWidthTooltip from '@/components/common/CustomUI/card/CustomNoMaxWidthTooltip';
import { useInputs } from '@/lib/hooks/useInputs';

const CopyrightRegisterPage = () => {
  const { web3 } = useWeb3();
  const [userAddr] = useLocalStorage(ADDR_TOKEN_KEY, '');
  const [copyrightForRegisterFormData, onChangeCopyrightForRegisterFormData] =
    useInputs<{
      prompt: string;
      AI_model: string;
      currentAddress: string;
      copyright_name: string;
    }>({
      prompt: '',
      AI_model: '',
      currentAddress: userAddr,
      copyright_name: '',
    });

  const onSubmitCopyrightForRegisterFormData = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    console.log(copyrightForRegisterFormData);
  };

  // ---------------------NFT----------------------
  if (!web3 || !userAddr) return null;

  const contract = new web3.eth.Contract(CoffeeeAbi, CONTRACT_ADDR);

  const data1 = (contract.methods['mintNFT'] as any)(
    'ipfs://QmVbwfFH65T4wBptztFDbeikwAfeBDSyq7y25TH13KJcVn',
    '333333333333333',
  ).encodeABI();
  const mintParam = {
    from: userAddr,
    to: CONTRACT_ADDR,
    gasLimit: web3.utils.toHex('50000000'),
    gasPrice: web3.utils.toHex(web3.utils.toWei('0.0000000000000001', 'ether')),
    data: data1,
  };
  const onMint = async () => {
    try {
      await window.ethereum
        ?.request({
          method: 'eth_sendTransaction',
          params: [mintParam],
        })
        .then((res) => console.log('success', res));
    } catch (error) {
      console.error('An error occurred while making the donation: ', error);
    }
  };

  const getNFTsByOwner = async (address: string) => {
    const tokens = await (contract.methods.getNFTsByOwner as any)(
      address,
    ).call();

    console.log(tokens);
    return tokens;
  };

  const onGetNFT = async (userAddr: string) => {
    try {
      const tokenIds = await getNFTsByOwner(userAddr);
      console.log('Received token IDs:', tokenIds);

      const uriPromises = tokenIds.map(async (tokenId: any) => {
        const data = (contract.methods['getIpfsUri'] as any)(
          tokenId,
        ).encodeABI();
        const getIpfsUriParam = {
          from: userAddr,
          to: CONTRACT_ADDR,
          data: data,
        };

        return window.ethereum?.request({
          method: 'eth_call',
          params: [getIpfsUriParam],
        });
      });

      const uris = await Promise.all(uriPromises);
      console.log('NFTs URIs:', uris);

      const urisDecoded = uris.map((uri) => {
        const str = web3.utils.hexToUtf8(uri);
        const match = str.match(/ipfs:\/\/\S+/);
        return match ? match[0].replace(/\0+$/, '') : '';
      });
      console.log('Decoded URIs:', urisDecoded);
    } catch (error) {
      console.error('An error occurred while making the donation: ', error);
    }
  };
  // -------------------------------------------

  return (
    <Template>
      <Box sx={{ textAlign: 'center', mb: '67px' }}>
        <Typography
          variant="h3"
          sx={{ color: palette.grey[400], marginBottom: '30px' }}
        >
          Copyright register
        </Typography>
      </Box>
      <form onSubmit={onSubmitCopyrightForRegisterFormData}>
        <Stack
          gap="24px"
          sx={{
            width: '416px',
            mb: '40px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body5">Prompt</Typography>
            <Box
              component={TextareaAutosize}
              name="prompt"
              placeholder="Enter your Prompt"
              minRows={5}
              sx={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                outline: '1px solid #FFF',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '16px',
                fontFamily: 'Noto Sans',
                color: palette.white,
                '&:focus': {
                  outline: `2px solid ${palette.primary.main}`,
                },
              }}
              onChange={onChangeCopyrightForRegisterFormData}
            />
          </Box>

          <CustomNoMaxWidthTooltip
            arrow
            sx={{ maxWidth: 'none' }}
            title={<Typography variant="body1">{userAddr}</Typography>}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="body5">Current Account</Typography>
              <TextField
                name="currentAddress"
                variant="outlined"
                disabled
                value={userAddr}
                onChange={onChangeCopyrightForRegisterFormData}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ paddingLeft: '10px', marginTop: '6px' }}>
                        <img
                          src="/imgs/meta-logo.png"
                          width="24"
                          height="24"
                          alt="Ethereum Logo"
                        />
                      </Box>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  color: palette.white,
                  '&:hover': {
                    border: 'none',
                  },
                }}
              />
            </Box>
          </CustomNoMaxWidthTooltip>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body5">AI Model</Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="AI_model"
                value={copyrightForRegisterFormData.AI_model}
                onChange={onChangeCopyrightForRegisterFormData}
              >
                <FormControlLabel
                  value="Midjourney"
                  label="Midjourney"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
                <FormControlLabel
                  value="DALL-E"
                  label="DALL-E"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
                <FormControlLabel
                  value="Stable Diffusion"
                  label="Stable Diffusion"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="body5">Copyright Name</Typography>
              <TextField
                variant="outlined"
                name="copyright_name"
                value={copyrightForRegisterFormData.copyright_name}
                onChange={onChangeCopyrightForRegisterFormData}
              />
            </Box>
          </Box>
        </Stack>
        <Button
          variant="rounded"
          type="submit"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.black.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Register
        </Button>
        {/* <Button
          variant="rounded"
          type="button"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.black.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          onClick={() => {
            onGetNFT(userAddr);
          }}
        >
          onGetNFT
        </Button> */}
      </form>

      <Box
        sx={{
          border: '1px solid #E74A3B',
          backgroundColor: 'rgba(231, 74, 59, 0.15)',
          color: palette.white,
          padding: '16px',
          borderRadius: '4px',
          mt: '56px',
          width: '416px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <Icon style={{ color: '#E74A3B' }}>
            <WarningAmber />
          </Icon>
          <Typography variant="body2">Registration not possible.</Typography>
        </Box>
        <Typography variant="body1" sx={{ ml: '37px' }}>
          There is a prompt with 60% similarity to the purchased ticket, and
          registration is not possible.
        </Typography>
      </Box>
    </Template>
  );
};

export default CopyrightRegisterPage;
