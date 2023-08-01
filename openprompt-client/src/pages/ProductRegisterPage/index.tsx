import { useState } from 'react';
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';
import CustomNoMaxWidthTooltip from '@/components/common/CustomUI/card/CustomNoMaxWidthTooltip';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { ADDR_TOKEN_KEY } from '@/constants/token';
import { useInputs } from '@/lib/hooks/useInputs';
import ImageBox from './ImageBox';
import DropdownSelectMenu from './DropdownSelectMenu';

const MetaIcon = () => {
  return (
    <img src="/imgs/meta-logo.png" width="24" height="24" alt="Ethereum Logo" />
  );
};

const ProductRegisterPage = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [userAddr] = useLocalStorage(ADDR_TOKEN_KEY, '');
  const [productForRegisterFormData, onChangeProductForRegisterFormData] =
    useInputs<{
      product_type: string;
      currentAddress: string;
      product_title: string;
      product_price: string;
      description: string;
      copyright_id: string;
      AI_model: string;
      image: File | null;
    }>({
      product_type: '',
      currentAddress: userAddr,
      product_title: '',
      product_price: '',
      description: '',
      copyright_id: '',
      AI_model: '',
      image: null,
    });

  const onSubmitProductForRegisterFormData = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    console.log(productForRegisterFormData);
  };

  return (
    <Template>
      <Typography
        variant="h3"
        sx={{ color: palette.grey[400], marginBottom: '30px' }}
      >
        Register for sale
      </Typography>
      <Box sx={{ width: '100%' }}>
        <form onSubmit={onSubmitProductForRegisterFormData}>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: '669px',
              gap: '24px',
            }}
          >
            {/* Left */}
            <Box
              sx={{
                width: '503px',
                height: '100%',
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
            >
              {/* Register Type : radioButton*/}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Typography variant="body5">Register Type</Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="product_type"
                    value={productForRegisterFormData.product_type}
                    onChange={onChangeProductForRegisterFormData}
                  >
                    <FormControlLabel
                      value="Ticket"
                      label="Ticket"
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
                      value="Copyright"
                      label="Copyright"
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
              </Box>
              {/* Current Account: disabled TextFied */}
              <CustomNoMaxWidthTooltip
                arrow
                sx={{ maxWidth: 'none' }}
                title={<Typography variant="body1">{userAddr}</Typography>}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '24px',
                  }}
                >
                  <Typography variant="body5">Current Account</Typography>
                  <TextField
                    name="currentAddress"
                    variant="outlined"
                    disabled
                    value={userAddr}
                    onChange={onChangeProductForRegisterFormData}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box sx={{ paddingLeft: '10px', marginTop: '6px' }}>
                            <MetaIcon />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </CustomNoMaxWidthTooltip>
              {/* Image: ImageBox */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '24px',
                  gap: '10px',
                }}
              >
                <Typography variant="body5">Image</Typography>
                <ImageBox
                  name="image"
                  onChange={onChangeProductForRegisterFormData}
                />
              </Box>
            </Box>
            {/* Right */}
            <Box
              sx={{
                width: '503px',
                height: '100%',
                paddingLeft: '40px',
                paddingRight: '40px',
                // backgroundColor: 'red',
              }}
            >
              {/* Product Title: TextField */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Typography variant="body5">Product Title</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your product title"
                  name="product_title"
                  value={productForRegisterFormData.product_title}
                  onChange={onChangeProductForRegisterFormData}
                />
              </Box>
              {/* Price: TextField */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginTop: '24px',
                }}
              >
                <Typography variant="body5">Price</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your product price"
                  name="product_price"
                  value={productForRegisterFormData.product_price}
                  onChange={onChangeProductForRegisterFormData}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box sx={{ paddingLeft: '10px', marginTop: '6px' }}>
                          <img
                            src="/imgs/eth-logo.png"
                            width="17"
                            height="24"
                            alt="Ethereum Logo"
                          />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {/* Description: TextField */}
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '24px',
                  }}
                >
                  <Typography variant="body5">Description</Typography>
                  <Box
                    component={TextareaAutosize}
                    placeholder="Enter your product description"
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
                    name="description"
                    value={productForRegisterFormData.description}
                    onChange={onChangeProductForRegisterFormData}
                  />
                </Box>
              </Box>
              {/* Select Copyright : DropDown Menu */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginTop: '24px',
                }}
              >
                <Typography variant="body5">Select Copyright</Typography>
                <DropdownSelectMenu
                  label="Please select one copyright to sell."
                  options={[
                    { value: 'red', label: '빨강' },
                    { value: 'blue', label: '파랑' },
                    { value: 'green', label: '초록' },
                  ]}
                  selectedValue={selectedColor}
                  name="copyright_id"
                  value={productForRegisterFormData.copyright_id}
                  onChange={onChangeProductForRegisterFormData}
                />
              </Box>
              <Button
                type="submit"
                variant="rounded"
                sx={{
                  width: '400px',
                  backgroundColor: palette.primary.main,
                  color: palette.black.main,
                  marginTop: '64px',
                }}
              >
                Register
              </Button>
            </Box>
          </Container>
        </form>
      </Box>
    </Template>
  );
};

export default ProductRegisterPage;
