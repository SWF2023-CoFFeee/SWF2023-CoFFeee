import React from 'react';
import {
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Theme,
  Box,
} from '@mui/material';
import { SxProps } from '@mui/system';
import palette from '@/styles/mui/palette';

const ArrowIcon = () => {
  return (
    <img
      src="/imgs/dropdown-icon.png"
      width="24"
      height="24"
      alt="Ethereum Logo"
    />
  );
};

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownTextFieldProps {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onChange: any;
  name: string;
  value: string;
}

const customStyles: {
  root: SxProps<Theme>;
  input: SxProps<Theme>;
  menuItem: SxProps<Theme>;
  borderBottom: SxProps<Theme>;
  menuPaper: SxProps<Theme>;
} = {
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // 변경
      borderColor: 'white !important', // !important 추가
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
  input: {
    color: 'white',
    '&::placeholder': {
      color: 'white',
    },
  },
  menuItem: {
    color: palette.grey[400],
    '&:hover': {
      backgroundColor: 'rgba(174, 255, 41, 0.1)',
    },
    position: 'relative',
    paddingLeft: '15%',
    paddingTop: '10px',
    paddingBottom: '10px',
    // 선택된 항목에 대한 폰트 색상 변경
    '&.Mui-selected': {
      color: 'white',
    },
  },
  borderBottom: {
    position: 'absolute',
    bottom: 0,
    left: '15%', // (100% - 70%) / 2
    width: '70%',
    borderBottom: `1px solid ${palette.grey[400]}`,
  },
  menuPaper: {
    // 추가
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: (theme) => theme.palette.black.main, // theme에서 palette.black.main 가져오기
  },
};

const DropdownSelectMenu: React.FC<DropdownTextFieldProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  name,
  value,
}) => {
  // selectedValue의 기본값을 첫 번째 옵션의 값으로 설정
  const defaultValue = options[0]?.value || '';
  const currentValue = selectedValue || defaultValue;

  return (
    <FormControl variant="outlined" fullWidth sx={customStyles.root}>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        input={
          <OutlinedInput
            placeholder={'Select'}
            sx={customStyles.input}
            endAdornment={<ArrowIcon />}
          />
        }
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          PaperProps: {
            // 추가
            sx: customStyles.menuPaper,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={customStyles.menuItem}
          >
            {option.label}
            {index !== options.length - 1 && (
              <Box sx={customStyles.borderBottom}></Box>
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelectMenu;
