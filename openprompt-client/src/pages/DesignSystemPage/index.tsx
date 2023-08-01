import { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import Template from '@/components/common/CustomUI/template';
import CustomCardOutlinedRounded from '@/components/common/CustomUI/card/CustomCardOutlinedRounded';
import {
  TBackgroundColor,
  TBackgroundVariant,
} from '@/components/common/CustomUI/background/types';
import { ButtonDesign } from './ButtonDesign';
import { TextFieldDesign } from './TextFieldDesign';
import { TypographyDesign } from './TypograhyDesign';
import { CustomComponents } from './CustomComponents';

const DesignSystemPage = () => {
  const [withBackButtonActive, setWithBackButtonActive] = useState(true);
  const [templateVariant, setTemplateVariant] =
    useState<TBackgroundVariant>('animation');
  const [templateColor, setTemplateColor] =
    useState<TBackgroundColor>('default');

  return (
    <Template
      variant={templateVariant}
      bgcolor={templateColor}
      withBackButton={withBackButtonActive}
    >
      <Typography variant="h2" color="primary" sx={{ marginBottom: '100px' }}>
        Design System
      </Typography>

      <StyledBox sx={{ marginBottom: '150px' }}>
        <Typography variant="h2">Template</Typography>
        <Typography sx={{ textAlign: 'center' }}>
          Template는 기본적인 페이지 레이아웃을 제안하는 커스텀 컴포넌트입니다.
          <br />
          현재 페이지도 Template 컴포넌트를 기반으로 만들어졌습니다.
          <br />
          <br />
          [ variant, bgcolor, withBackButton ]을 props로 설정할 수 있으며, 모두
          선택적입니다. 바디에 해당하는 자식 컴포넌트는 필수적으로 wrap해줘야
          합니다.
          <br />
          <br />
          템플릿은 Background 커스텀 컴포넌트를 기반으로 만들어졌고, variant와
          bgcolor prop를 Background로 내려줍니다.
        </Typography>

        <StyledBox>
          <br />
          <br />
          <br />
          <Typography variant="subtitle1">Template withBackButton</Typography>
          <StyledBoxOutlined>
            <InnerBoxLeft>
              <Button
                variant="contained"
                onClick={() => setWithBackButtonActive(!withBackButtonActive)}
              >
                {withBackButtonActive
                  ? 'Disable withBackButton'
                  : 'withBackButton'}
              </Button>
            </InnerBoxLeft>
            <Box sx={{ width: '70%' }}>
              <Typography color="primary">
                {`<Template ${
                  withBackButtonActive ? 'withBackButton' : ''
                }>{children}</Template>`}
                <br />
              </Typography>
              <Typography>
                이처럼, withBackButton을 명시 혹은 boolean으로 설정하여 백버튼이
                추가된 템플릿을 설정할 수 있습니다. default는 false입니다.
              </Typography>
            </Box>
          </StyledBoxOutlined>
          <br />
          <br />
          <br />
          <Typography variant="subtitle1">Template variant</Typography>
          <StyledBoxOutlined>
            <InnerBoxLeft>
              <Button
                variant="contained"
                onClick={() => setTemplateVariant('basic')}
              >
                {'variant="basic"'}
              </Button>
              <Button
                variant="contained"
                onClick={() => setTemplateVariant('animation')}
              >
                {'variant="animation"'}
              </Button>
              <Button
                variant="contained"
                onClick={() => setTemplateVariant('gradient')}
              >
                {'variant="gradient"'}
              </Button>
            </InnerBoxLeft>
            <Box sx={{ width: '70%' }}>
              <Typography color="primary">
                {`<Template varient="${templateVariant}">{children}</Template>`}
                <br />
              </Typography>
              <Typography>
                {`이처럼, varient (basic, animation, gradient) 를 적용하여 템플릿의 배경을 설정할 수 있습니다. default는 basic입니다.`}
              </Typography>
            </Box>
          </StyledBoxOutlined>
        </StyledBox>
        <StyledBox>
          <br />
          <br />
          <br />
          <Typography variant="subtitle1">Template bgcolor</Typography>
          <Typography>
            Template의 color prop은 Background의 color와 일치합니다. 이를 통해
            배경색을 설정할 수 있습니다.
          </Typography>

          <StyledBoxOutlined>
            <InnerBoxLeft>
              <Button
                variant="contained"
                onClick={() => setTemplateColor('default')}
              >
                {'bgcolor="default"'}
              </Button>
              <Button
                variant="contained"
                onClick={() => setTemplateColor('white')}
              >
                {'bgcolor="white"'}
              </Button>
            </InnerBoxLeft>
            <Box sx={{ width: '70%' }}>
              <Typography color="primary">
                {`<Template bgcolor="${templateColor}">{children}</Template>`}
                <br />
              </Typography>
              <Typography>
                {`이처럼, bgcolor (default, white) 를 적용하여 템플릿의 배경색을 설정할 수 있습니다.`}
                <br />
                gradient varient를 사용할 경우, color는 무시됩니다.
              </Typography>
            </Box>
          </StyledBoxOutlined>
        </StyledBox>
      </StyledBox>
      <ButtonDesign />
      <TextFieldDesign />
      <TypographyDesign />
      <CustomComponents />
      <Divider sx={{ marginY: '80px' }} />
    </Template>
  );
};

export default DesignSystemPage;

interface CustomBoxProps extends React.ComponentPropsWithoutRef<typeof Box> {
  children: React.ReactNode;
}

interface StyledBoxOutlinedProps
  extends React.ComponentPropsWithoutRef<typeof CustomCardOutlinedRounded> {
  children: React.ReactNode;
}

export const StyledBox = ({ children, ...props }: CustomBoxProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export const StyledBoxOutlined = ({
  children,
  ...props
}: StyledBoxOutlinedProps) => {
  return (
    <CustomCardOutlinedRounded
      sx={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...props.sx,
      }}
    >
      {children}
    </CustomCardOutlinedRounded>
  );
};

export const InnerBoxLeft = ({ children, ...props }: CustomBoxProps) => {
  return (
    <Box
      sx={{
        width: '30%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid white',
        marginRight: '20px',
        gap: '20px',
      }}
    >
      {children}
    </Box>
  );
};
