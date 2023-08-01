import { Box, Button, ButtonGroup, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export type ContentType = string;

interface CustomTabsProps {
  buttons: {
    value: ContentType;
    label: string;
  }[];
  refs: Record<ContentType, React.RefObject<HTMLButtonElement>>;
  selectedValue: ContentType;
  gap?: string;
  onChange: (value: ContentType) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  buttons,
  refs,
  selectedValue,
  gap = '50px',
  onChange,
}) => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const theme = useTheme();

  useEffect(() => {
    const activeRef = refs[selectedValue];
    if (activeRef && activeRef.current) {
      const rect = activeRef.current.getBoundingClientRect();
      const parentRect = (
        activeRef.current.parentElement as HTMLElement
      ).getBoundingClientRect();
      setUnderlineStyle({
        position: 'absolute',
        left: rect.left - parentRect.left + 4,
        width: rect.width - 8,
        bottom: '0px',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transition: '0.3s',
      });
    }
  }, [refs, selectedValue, theme]);

  const getButtonStyle = (value: ContentType) => ({
    border: 'none',
    fontSize: '16px',
    color:
      value === selectedValue
        ? theme.palette.common.white
        : theme.palette.grey[400],
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
      border: 'none',
    },
  });

  return (
    <Box position="relative">
      <ButtonGroup
        color="primary"
        aria-label="Content Type"
        sx={{ gap: gap, border: 'none' }}
      >
        {buttons.map((button) => (
          <Button
            disableRipple
            key={button.value}
            ref={refs[button.value as ContentType]}
            onClick={() => {
              if (button.value !== selectedValue) {
                onChange(button.value);
              }
            }}
            color={button.value === selectedValue ? 'inherit' : 'primary'}
            sx={getButtonStyle(button.value)}
          >
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
      <Box sx={underlineStyle}></Box>
    </Box>
  );
};

export default CustomTabs;
