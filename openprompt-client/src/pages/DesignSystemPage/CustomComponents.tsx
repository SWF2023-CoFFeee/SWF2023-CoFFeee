import { Typography, Box, Container } from '@mui/material';
import { useState, useRef } from 'react';
import CustomCardOutlinedGradient from '@/components/common/CustomUI/card/CustomCardOutlinedGradient';
import CustomCardOutlinedRounded from '@/components/common/CustomUI/card/CustomCardOutlinedRounded';
import CustomTabs, {
  ContentType,
} from '@/components/common/CustomUI/tabs/CustomTabs';
import {
  ContentDonateHistory,
  ContentOwnNFT,
  ContentPersonalInfo,
} from '@/pages/MyPage/Contents';

import { StyledBox, StyledBoxOutlined } from '../DesignSystemPage';

export const CustomComponents = () => {
  const [content, setContent] = useState<ContentType>('donationHistory');
  const [showContent, setShowContent] = useState(true);

  type ContentData = {
    // eslint-disable-next-line no-unused-vars
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    donationHistory: {
      label: '기부 이력',
      component: <ContentDonateHistory />,
    },
    NFT: {
      label: 'NFT',
      component: <ContentOwnNFT />,
    },
    personalInfo: {
      label: '개인정보',
      component: <ContentPersonalInfo />,
    },
  };

  const handleChangeContent = (value: ContentType) => {
    setShowContent(false);
    setTimeout(() => {
      setContent(value);
      setShowContent(true);
    }, 150);
  };

  const refs: Record<ContentType, React.RefObject<HTMLButtonElement>> = {
    donationHistory: useRef(null),
    NFT: useRef(null),
    personalInfo: useRef(null),
  };

  return (
    <StyledBox sx={{ marginBottom: '150px' }}>
      <Typography variant="h2">Custom Components</Typography>
      <Typography sx={{ textAlign: 'center' }}></Typography>

      <StyledBox>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">Custom Cards</Typography>
        <Typography sx={{ textAlign: 'center' }}>
          [CustomCardOutlinedGradient, CustomCardOutlinedRounded]
          <br />
          <br />
          Mui Container를 이용해 만든 기본적인 커스텀 카드입니다. <br />
          padding 20% 기본 적용, 보더 스타일 커스텀 외 큰 의미는 없습니다.
        </Typography>
        <StyledBoxOutlined>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '30%',
              marginRight: '10%',
            }}
          >
            <CustomCardOutlinedGradient />
            <CustomCardOutlinedGradient sx={{ backgroundColor: 'red' }} />
            <br />
            <CustomCardOutlinedRounded />
            <CustomCardOutlinedRounded sx={{ borderColor: 'red' }} />
          </Box>
          <Box sx={{ width: '70%', marginLeft: '2rem' }}>
            <Typography>
              Omit 등을 이용하여 커스텀한 컴포넌트로, sx를 내려주어 직접 스타일
              오버라이드하여 사용하실 수 있습니다.
              <br />
              <br />
            </Typography>
            <Typography color="primary">{`<CustomCardOutlinedGradient />
            `}</Typography>
            <Typography color="primary">{`<CustomCardOutlinedGradient sx={{ backgroundColor: 'red' }} />
            `}</Typography>
            <br />
            <br />
            <Typography color="primary">{`<CustomCardOutlinedRounded />`}</Typography>
            <Typography color="primary">{`<CustomCardOutlinedGradient sx={{ borderColor: 'red' }} />
            `}</Typography>
          </Box>
        </StyledBoxOutlined>
      </StyledBox>

      <StyledBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">CustomTabs</Typography>
        <br />
        <Typography sx={{ textAlign: 'center' }}>
          컨텐츠 갯수, 내용 확장성을 고려해 구현한 CustomTabs입니다. <br />
          사용법은 mypage 측 예시활용 및, customTabs 구현체를 참고해주세요
        </Typography>
        <br />
        <br />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginY: '10px' }}>
            <CustomTabs
              buttons={Object.keys(contentsData).map((value) => ({
                value,
                label: contentsData[value].label,
              }))}
              refs={refs}
              selectedValue={content}
              onChange={handleChangeContent}
            />
          </Box>
          <Container
            maxWidth="md"
            sx={{
              paddingTop: '20px',
              minHeight: '500px',
              width: '100%',
            }}
          >
            <Box
              sx={{
                opacity: showContent ? 1 : 0,
                transition: 'opacity 150ms ease-in-out',
              }}
            >
              {contentsData[content].component}
            </Box>
          </Container>
        </Box>
      </StyledBox>
      <StyledBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StyledBox>
    </StyledBox>
  );
};
