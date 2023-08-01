import { Typography, TextField, Box } from '@mui/material';
import { useState } from 'react';
import {
  InnerBoxLeft,
  StyledBox,
  StyledBoxOutlined,
} from '../DesignSystemPage';

export const TextFieldDesign = () => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <StyledBox sx={{ marginBottom: '150px' }}>
      <Typography variant="h2">TextField</Typography>
      <Typography sx={{ textAlign: 'center' }}>
        TextField는 상호작용별 기본적인 root 스타일을 오버라이드했습니다. <br />
        <br />
        {`TextField는 'outlined', 'filled', 'standard' 세 가지 기본 variant를
        제공합니다.`}
        <br />
        color prop에는 MUI 기본 컬러인 primary, secondary, error, warning, info,
        success 지정 컬러설정만 가능합니다.
        <br />
      </Typography>
      <StyledBox>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">TextField variants</Typography>
        <StyledBoxOutlined>
          <InnerBoxLeft
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <TextField
              id="outlined"
              label="Outlined (default)"
              variant="outlined"
              value={text}
              onChange={handleTextChange}
            />
            <TextField
              id="filled"
              label="Filled"
              variant="filled"
              value={text}
              onChange={handleTextChange}
            />
            <TextField
              id="standard"
              label="Standard"
              variant="standard"
              value={text}
              onChange={handleTextChange}
            />
          </InnerBoxLeft>
          <Box sx={{ width: '70%', marginLeft: '2rem' }}>
            <Typography>
              {`text(state) : ${text}`}
              <br />
              <br />
              <br />
              <br />
              {`
				  const [text, setText] = useState<string>('');
				  `}
              <br />
              {`
				  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
					setText(event.target.value);
				  };
				`}
            </Typography>
            <br />
            <br />
            <Typography color="primary">
              {`<TextField id="outlined" label="Outlined (default)" variant="outlined" value={text} onChange={handleTextChange}/>`}
              <br />
              <br />
              {`<TextField id="filled" label="Filled" variant="filled" value={text} onChange={handleTextChange}/>`}
              <br />
              <br />
              {`<TextField id="standard" label="Standard" variant="standard" value={text} onChange={handleTextChange} />`}
            </Typography>
          </Box>
        </StyledBoxOutlined>
      </StyledBox>
    </StyledBox>
  );
};
