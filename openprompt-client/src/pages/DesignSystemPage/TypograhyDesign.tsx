import { Typography, Box } from '@mui/material';
import {
  InnerBoxLeft,
  StyledBox,
  StyledBoxOutlined,
} from '../DesignSystemPage';

export const TypographyDesign = () => {
  return (
    <StyledBox sx={{ marginBottom: '150px' }}>
      <Typography variant="h2">Typography</Typography>
      <Typography sx={{ textAlign: 'center' }}>
        <br />
        Noto Sans KR을 Typography font로 적용했습니다.
        <br />
        <br />
        [ h1, h2, subtitle1, subtitle2, body1, body2, body3, body4 ] variant가
        있습니다.
        <br />
        default는 body1(mui 기본 설정) 입니다.
        <br />
        <br />
        {`mui 기본 colors 이름(primary..) 내에서 color prop 적용이 가능하며,
        color="black.main"으로 검정색을 지정할 수 있습니다.`}
        <br /> 물론 sx를 통해 스타일을 직접 지정할 수도 있습니다.
        <br /> default color는 white입니다.
        <br />
      </Typography>
      <br />
      <br />
      <br />
      <StyledBox>
        <br />
        <Typography variant="subtitle1">Typography variants</Typography>
        <StyledBoxOutlined>
          <InnerBoxLeft
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <Typography variant="h1">H1</Typography>
            <Typography variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <br />
            <br />
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <br />
            <br />
            <Typography variant="body1">body1 (default)</Typography>
            <Typography variant="body2">body2</Typography>
            <Typography variant="body3">body3</Typography>
            <Typography variant="body4">body4</Typography>
            <Typography variant="body5">body5</Typography>
            <Typography variant="body5" color="primary">
              body5 priamry
            </Typography>
            <Typography variant="body5" color="black.main">
              body5 black
            </Typography>
          </InnerBoxLeft>
          <Box sx={{ width: '70%', marginLeft: '2rem' }}>
            {/* h1 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '72px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="h1">h1</Typography>`}</Typography>
            <br />

            {/* h2 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '40px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="h2">h2</Typography>`}</Typography>
            <br />

            {/* subtitle1 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '20px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="subtitle1">subtitle1</Typography>`}</Typography>
            <br />

            {/* subtitle2 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '16px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="subtitle2">subtitle1</Typography>`}</Typography>
            <br />

            {/* body1 styles */}
            {`fontWeight: 'normal'`}
            <br />
            {`fontSize: '14px'`}
            <br />
            {`lineHeight: '26px'`}
            <Typography color="primary">{`<Typography variant="body1">body1</Typography>`}</Typography>
            <br />

            {/* body2 styles */}
            {`fontWeight: 'normal'`}
            <br />
            {`fontSize: '18px'`}
            <br />
            {`lineHeight: '32px'`}
            <Typography color="primary">{`<Typography variant="body2">body2</Typography>`}</Typography>
            <br />

            {/* body3 styles */}
            {`fontWeight: 'normal'`}
            <br />
            {`fontSize: '24px'`}
            <br />
            {`lineHeight: '40px'`}
            <Typography color="primary">{`<Typography variant="body3">body3</Typography>`}</Typography>
            <br />

            {/* body4 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '24px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="body4">body4</Typography>`}</Typography>
            <br />

            {/* body5 styles */}
            {`fontWeight: 'bold'`}
            <br />
            {`fontSize: '24px'`}
            <br />
            {`lineHeight: 'auto'`}
            <Typography color="primary">{`<Typography variant="body5">body5</Typography>`}</Typography>
            <Typography color="primary">{`<Typography variant="body5" color="primary">body5 black</Typography>`}</Typography>
            <Typography color="primary">{`<Typography variant="body5" color="black.main">body5 black</Typography>`}</Typography>
            <br />
          </Box>
        </StyledBoxOutlined>
      </StyledBox>
    </StyledBox>
  );
};
