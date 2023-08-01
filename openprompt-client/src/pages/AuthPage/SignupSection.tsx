import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
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
import theme from '@/styles/mui/theme';
import palette from '@/styles/mui/palette';
import { postSignupData } from '@/lib/apis/user';
import { TAuthStep } from '.';

export interface ISignupSectionProps {
  onSwitchAuthStep: (key: TAuthStep) => void;
}

const SignupSection = ({ onSwitchAuthStep }: ISignupSectionProps) => {
  const [isMaskingPassword, setIsMaskingPassword] = useState(false);
  const onToggleIsMaskingPassword = () => {
    setIsMaskingPassword(!isMaskingPassword);
  };
  const [signupFormData, onChangeSignupFormData] = useInputs<{
    username: string;
    password: string;
    encPassword: string;
  }>({ username: '', password: '', encPassword: '' });

  const onSubmitSignupFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSignupData(signupFormData).then((_) => {
      onSwitchAuthStep('Sign in');
    });

    return null;
  };

  return (
    <Box sx={{ width: '429px' }}>
      <Typography variant="body2" textAlign="center" sx={{ mb: '44px' }}>
        If you already have an account register ? <br />
        You can{' '}
        <Typography
          component="span"
          variant="body2"
          color="primary"
          onClick={() => onSwitchAuthStep('Sign in')}
          sx={{
            display: 'inline-block',
            cursor: 'pointer',
            fontWeight: 'bold',
            '&: hover': { textDecoration: 'underline' },
          }}
        >
          Login here!
        </Typography>
      </Typography>
      <form onSubmit={onSubmitSignupFormData}>
        <Stack gap="40px" sx={{ width: '100%', mb: '64px' }}>
          <TextField
            color="primary"
            label="Username"
            placeholder="Enter your Username"
            type="text"
            variant="standard"
            name="username"
            value={signupFormData.username}
            onChange={onChangeSignupFormData}
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
            value={signupFormData.password}
            onChange={onChangeSignupFormData}
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
          <TextField
            color="primary"
            label="Confirm Password"
            placeholder="Confirm your Password"
            type={isMaskingPassword ? 'text' : 'password'}
            variant="standard"
            name="encPassword"
            value={signupFormData.encPassword}
            onChange={onChangeSignupFormData}
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
      </form>
    </Box>
  );
};

export default SignupSection;
