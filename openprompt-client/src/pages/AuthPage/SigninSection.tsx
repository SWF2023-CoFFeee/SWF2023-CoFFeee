import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Icon,
  IconButton,
} from '@mui/material';

import {
  LockOutlined,
  PersonOutline,
  VisibilityOff,
  Visibility,
} from '@mui/icons-material';
import { useState } from 'react';
import { useInputs } from '@/lib/hooks/useInputs';
import palette from '@/styles/mui/palette';
import { postSigninData } from '@/lib/apis/user';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { ACCESS_TOKEN_KEY, USERINFO_KEY } from '@/constants/token';
import { TAuthStep } from '.';

export interface ISigninSectionProps {
  onSwitchAuthStep: (key: TAuthStep) => void;
}

const SigninSection = ({ onSwitchAuthStep }: ISigninSectionProps) => {
  const [_token, setToken] = useLocalStorage(ACCESS_TOKEN_KEY, '');
  const [_userinfo, setUserInfo] = useLocalStorage(USERINFO_KEY, '');

  const [isMaskingPassword, setIsMaskingPassword] = useState(false);
  const onToggleIsMaskingPassword = () => {
    setIsMaskingPassword(!isMaskingPassword);
  };

  const [signinFormData, onChangeSigninFormData] = useInputs<{
    username: string;
    password: string;
  }>({ username: '', password: '' });

  const onSubmitSigninFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSigninData(signinFormData)
      .then((res) => {
        const { token, username } = res.data;

        setToken(token);
        setUserInfo(username);
      })
      .then((_) => {
        onSwitchAuthStep('Connect Wallet');
      });
    return null;
  };

  return (
    <Box sx={{ width: '429px' }}>
      <Typography variant="body2" textAlign="center" sx={{ mb: '44px' }}>
        If you don’t have an account register <br />
        You can{' '}
        <Typography
          component="span"
          variant="body2"
          color="primary"
          onClick={() => onSwitchAuthStep('Sign up')}
          sx={{
            display: 'inline-block',
            cursor: 'pointer',
            fontWeight: 'bold',
            '&: hover': { textDecoration: 'underline' },
          }}
        >
          Register here!
        </Typography>
      </Typography>
      <form onSubmit={onSubmitSigninFormData}>
        <Stack gap="40px" sx={{ width: '100%', mb: '168px' }}>
          <TextField
            color="primary"
            label="Username"
            placeholder="Enter your Username"
            type="text"
            variant="standard"
            name="username"
            value={signinFormData.username}
            onChange={onChangeSigninFormData}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon style={{ color: palette.white }}>
                    <PersonOutline />
                  </Icon>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiFormLabel-root': {
                fontWeight: '500',
                fontSize: '14px',
                color: palette.white,
              },
              '& .MuiInput-underline:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline:after': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottom: `2px solid ${palette.primary.main}`,
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-hover:not(.Mui-disabled):before': {
                borderBottom: `2px solid ${palette.white}`,
              },
            }}
          />
          <TextField
            color="primary"
            label="Password"
            placeholder="Enter your Password"
            type={isMaskingPassword ? 'text' : 'password'}
            variant="standard"
            name="password"
            value={signinFormData.password}
            onChange={onChangeSigninFormData}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon style={{ color: palette.white }}>
                    <LockOutlined />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{ color: palette.white }}
                    onClick={onToggleIsMaskingPassword}
                  >
                    {isMaskingPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiFormLabel-root': {
                fontWeight: '500',
                fontSize: '14px',
                color: palette.white,
              },
              '& .MuiInput-underline:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline:after': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottom: `2px solid ${palette.primary.main}`,
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-hover:not(.Mui-disabled):before': {
                borderBottom: `2px solid ${palette.white}`,
              },
            }}
          />
        </Stack>
        <Button
          variant="roundedOutlined"
          type="submit"
          sx={{
            width: '100%',
            color: 'primary.main',
            borderColor: 'primary.main',
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default SigninSection;
