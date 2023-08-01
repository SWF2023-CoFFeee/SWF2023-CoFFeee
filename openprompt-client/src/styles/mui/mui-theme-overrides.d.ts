// ref: override가 되지 않는 문제 : https://github.com/mui/material-ui/issues/28244

// ref: override 참고: https://github.com/hashintel/hash/blob/bb98020e4e51481e7deb289a998a7c7dc1482942/apps/hashdotdev/theme-override.d.ts#L128

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['black'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    body5: true;
    button: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
    roundedOutlined: true;
    transparent: true;
    transparentLight: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    rounded: true;
    roundedOutlined: true;
    transparent: true;
    transparetnLight: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    black: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    black: true;
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsVariantsOverrides {
    underbar: true;
  }
}
export {};
