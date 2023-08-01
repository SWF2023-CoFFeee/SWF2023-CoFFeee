import React, { useState, useRef } from 'react';
import { Typography, Box, Container, Button, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Template from '@/components/common/CustomUI/template';
import { ContentType } from '@/components/common/CustomUI/tabs/CustomTabs';
import RouterMeta from '@/lib/RouterMeta';
import {
  mockRightsOfUsageProductData,
  mockCopyrightProductData,
} from '../../mocks/mockData';
import CustomTabs from '../../components/common/CustomUI/tabs/CustomTabs';
import { ContentTicket, ContentCopyRight } from './Contents';

type CheckedState = {
  All: boolean;
  Midjourney: boolean;
  DALL_E: boolean;
  StableDiffusion: boolean;
};

const MarketPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState<ContentType>('License');
  const [showContent, setShowContent] = useState(true);
  const [isChecked, setIsChecked] = useState<CheckedState>({
    All: true,
    Midjourney: true,
    DALL_E: true,
    StableDiffusion: true,
  });

  type ContentData = {
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    License: {
      label: 'Ticket',
      component: (
        <ContentTicket products={mockRightsOfUsageProductData.productsList} />
      ),
    },
    CopyRight: {
      label: 'CopyRight',
      component: (
        <ContentCopyRight products={mockCopyrightProductData.productsList} />
      ),
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
    License: useRef(null),
    CopyRight: useRef(null),
  };

  const handleCheckboxChange = (name: keyof CheckedState) => {
    setIsChecked({
      ...isChecked,
      [name]: !isChecked[name],
    });
  };

  return (
    <Template>
      <Box
        sx={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Button
          sx={{ color: '#AEFF29' }}
          onClick={() => {
            navigate(RouterMeta.ProductRegisterPage.path);
          }}
          variant="roundedOutlined"
        >
          Register
        </Button>
      </Box>
      <Typography variant="h3">Market</Typography>
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
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CustomTabs
            buttons={Object.keys(contentsData).map((value) => ({
              value,
              label: contentsData[value].label,
            }))}
            gap="20px"
            refs={refs}
            selectedValue={content}
            onChange={handleChangeContent}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              AI Model
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '85%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.All}
                  onChange={() => handleCheckboxChange('All')}
                  style={{
                    color: isChecked.All === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">All</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.Midjourney}
                  onChange={() => handleCheckboxChange('Midjourney')}
                  style={{
                    color:
                      isChecked.Midjourney === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">Midjourney</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.DALL_E}
                  onChange={() => handleCheckboxChange('DALL_E')}
                  style={{
                    color: isChecked.DALL_E === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">DALL-E</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.StableDiffusion}
                  onChange={() => handleCheckboxChange('StableDiffusion')}
                  style={{
                    color:
                      isChecked.StableDiffusion === true
                        ? '#AEFF29'
                        : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">Stable Diffusion</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginY: '10px' }}></Box>
        <Container
          sx={{
            minHeight: '500px',
            width: '100%',
            m: '0px',
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
    </Template>
  );
};

export default MarketPage;
