import { Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import { CustomBackButton } from '@/components/common/CustomUI/button/CustomBackButton';
import { InnerBoxLeft, StyledBox, StyledBoxOutlined } from '.';

type ButtonVariantType =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'rounded'
  | 'roundedOutlined'
  | 'transparent'
  | 'transparentLight';

type ButtonColorType = 'default' | 'primary' | 'black';

export const ButtonDesign = () => {
  const [buttonVariant, setButtonVariant] = useState<ButtonVariantType>('text');
  const [buttonColor, setButtonColor] = useState<ButtonColorType>('default');

  const handleButtonClick = (
    variant: ButtonVariantType,
    color: ButtonColorType = 'default',
  ) => {
    setButtonVariant(variant);
    setButtonColor(color);
  };
  return (
    <StyledBox sx={{ marginBottom: '150px' }}>
      <Typography variant="h2">Button</Typography>
      <Typography sx={{ textAlign: 'center' }}>
        {
          '버튼의 variant는 [ text, contained, rounded, roundedOutlined, transparent, transparentLight ]'
        }
        <br /> 총 6가지가 있으며 default는 text입니다.
      </Typography>
      <StyledBox>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">Button Basic variants</Typography>
        <StyledBoxOutlined>
          <InnerBoxLeft>
            <Button
              onClick={() => handleButtonClick('text')}
            >{`default (=text)`}</Button>
            <Button
              onClick={() => handleButtonClick('outlined')}
              variant="outlined"
            >
              outlined
            </Button>
            <Button
              onClick={() => handleButtonClick('contained')}
              variant="contained"
            >
              contained
            </Button>
            <Button
              onClick={() => handleButtonClick('contained', 'black')}
              variant="contained"
              color="black"
            >
              {`color="black"`}
            </Button>
          </InnerBoxLeft>
          <Box sx={{ width: '70%' }}>
            <Typography color="primary">
              {buttonColor === 'black'
                ? `<Button variant="${buttonVariant}" color="${buttonColor}">${buttonVariant} ${buttonColor}</Button>`
                : `<Button variant="${buttonVariant}">${buttonVariant}</Button>`}
              <br />
            </Typography>
            <Typography>
              text, outlined, contained 는 기본 mui variant를
              오버라이드하였습니다.
              <br />
              color prop을 통해 색상을 변경할 수 있습니다.
              <br />
              <br />
              현재 임의로 커스텀 정의한 mui 색상은 primary, black 이 있습니다.
            </Typography>
          </Box>
        </StyledBoxOutlined>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">Button Custom variants</Typography>
        <StyledBoxOutlined>
          <InnerBoxLeft>
            <Button
              onClick={() => handleButtonClick('rounded')}
              variant="rounded"
            >
              rounded
            </Button>
            <Button
              onClick={() => handleButtonClick('roundedOutlined')}
              variant="roundedOutlined"
            >
              roundedOutlined
            </Button>
            <Button
              onClick={() => handleButtonClick('transparent')}
              variant="transparent"
            >
              transparent
            </Button>
            <Button
              onClick={() => handleButtonClick('transparentLight')}
              variant="transparentLight"
            >
              transparentLight
            </Button>
          </InnerBoxLeft>
          <Box sx={{ width: '70%' }}>
            <Typography color="primary">
              {`<Button variant="${buttonVariant}" >${buttonVariant}</Button>`}
              <br />
            </Typography>
            <Typography>
              rounded, roundedOutlined, transparent, transparentLight 는 임의로
              확장한 variant입니다.
              <br />
              <br /> 따라서 color prop을 통해 색상을 변경하는 것이
              불가능합니다.(커스텀 필요성 못느낌) <br /> 하지만 mui 컴포넌트의
              기본 sx prop을 통해 필요 시, 직접 색상을 변경할 수 있습니다.
              <br />
              <br />
              ex){' '}
              <Button variant="transparent" sx={{ color: 'red' }}>
                transparent
              </Button>
              <br />
              {`              <Button variant="transparent" sx={{ color: 'red' }}>
                transparent
              </Button>`}
            </Typography>
          </Box>
        </StyledBoxOutlined>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">Custom Back Button</Typography>
        <Typography sx={{ textAlign: 'center' }}>
          커스텀 컴포넌트 뒤로가기 버튼입니다.
          <br />
          <br />
          Template에서 withBackButton을 통해 포함시킬 수 있으므로,
          <br />
          직접 사용하실 일은 없을거라 생각하지만 이처럼 사용하시면 됩니다.
          <br />
          기본적으로 뒤로가기가 구현돼있습니다.
        </Typography>
        <StyledBoxOutlined>
          <InnerBoxLeft>
            <CustomBackButton />
            <CustomBackButton variant="outlined" />
          </InnerBoxLeft>
          <Box sx={{ width: '70%' }}>
            <Typography>default (=fill)</Typography>
            <Typography color="primary">
              {`<CustomBackButton />`}
              <br />
              <br />
              {`<CustomBackButton variant="outlined" />`}
              <br />
            </Typography>
          </Box>
        </StyledBoxOutlined>
      </StyledBox>
    </StyledBox>
  );
};
