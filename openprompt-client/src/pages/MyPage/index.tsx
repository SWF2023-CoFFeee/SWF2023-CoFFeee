import { Typography, Box, Container } from '@mui/material';
import { useState, useRef } from 'react';
import Template from '@/components/common/CustomUI/template';
import CustomTabs, {
  ContentType,
} from '@/components/common/CustomUI/tabs/CustomTabs';

import {
  ContentDonateHistory,
  ContentOwnNFT,
  ContentPersonalInfo,
} from './Contents';
import CustomModal from './CustomModal';

const MyPage = () => {
  const [content, setContent] = useState<ContentType>('purchasedTickets');
  const [showContent, setShowContent] = useState(true);

  type ContentData = {
    // eslint-disable-next-line no-unused-vars
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    purchasedTickets: {
      label: 'Purchased tickets',
      component: <ContentOwnNFT />,
    },
    registeredCopyrights: {
      label: 'Registered copyrights',
      component: <ContentDonateHistory />,
    },
    onSale: {
      label: 'On sale',
      component: <ContentPersonalInfo />,
    },
    transactionHistory: {
      label: 'Transaction history',
      component: <ContentPersonalInfo />,
    },
  };

  const refs: Record<ContentType, React.RefObject<HTMLButtonElement>> = {
    purchasedTickets: useRef(null),
    registeredCopyrights: useRef(null),
    onSale: useRef(null),
    transactionHistory: useRef(null),
  };

  const handleChangeContent = (value: ContentType) => {
    setShowContent(false);
    setTimeout(() => {
      setContent(value);
      setShowContent(true);
    }, 150);
  };

  return (
    <Template variant="animation">
      <Typography variant="h3" color="white" sx={{ marginY: '10px' }}>
        Mypage
      </Typography>
      <CustomModal />
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
        // maxWidth="md"
        sx={{
          paddingTop: '20px',
          minHeight: '640px',
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
    </Template>
  );
};

export default MyPage;
