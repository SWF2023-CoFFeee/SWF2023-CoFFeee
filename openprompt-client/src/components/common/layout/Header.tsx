import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Stack,
  IconButton,
  Button,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import { Logout } from '@mui/icons-material';
import RouterMeta from '@/lib/RouterMeta';
import palette from '@/styles/mui/palette';
import { ADDR_TOKEN_KEY } from '@/constants/token';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

const ResponsiveAppBar = () => {
  const [userAddr, _setUserAddr_, _deleteUserAddr_, clearStorage] =
    useLocalStorage(ADDR_TOKEN_KEY, '');

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate(RouterMeta.AuthPage.path);
  };

  const onLogout = () => {
    clearStorage();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: '0',
        paddingY: '2px',
        paddingTop: '5px',
        backgroundColor: 'rgba(255, 255, 2555, 0.15)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, marginLeft: '30px' }}>
            <NavLink to={'/'}>
              <img src={'/imgs/logo/coffeee-logo-white.png'} alt="home" />
            </NavLink>
          </Box>
          <Stack
            direction="row"
            gap="1em"
            alignItems="center"
            sx={{ marginRight: '100px' }}
          >
            {Object.keys(RouterMeta).map((router) => {
              if (!RouterMeta[router].isShow) {
                return;
              }
              return (
                <NavLink
                  key={router}
                  to={RouterMeta[router].path}
                  style={({ isActive }) => ({
                    color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                  })}
                >
                  <Typography>{RouterMeta[router].name}</Typography>
                </NavLink>
              );
            })}
            {userAddr ? (
              <IconButton style={{ color: palette.white }} onClick={onLogout}>
                <Logout />
              </IconButton>
            ) : (
              <Button
                variant="roundedOutlined"
                size="small"
                type="button"
                onClick={onClickLogin}
              >
                Login
              </Button>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
