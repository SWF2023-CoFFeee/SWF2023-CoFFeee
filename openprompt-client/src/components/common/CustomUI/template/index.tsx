import { ReactNode } from 'react';
import { Box, Container, SxProps } from '@mui/material';
import { Background } from '@/components/common/CustomUI/background';

import { CustomBackButton } from '@/components/common/CustomUI/button/CustomBackButton';

import { TBackgroundVariant, TBackgroundColor } from '../background/types';

interface TemplateProps {
  children: ReactNode;
  variant?: TBackgroundVariant; // default는 'basic'으로 설정
  bgcolor?: TBackgroundColor;
  withBackButton?: boolean;
  sx?: SxProps;
}

const Template: React.FC<TemplateProps> = ({
  children,
  variant = 'basic',
  bgcolor,
  withBackButton = false,
  sx,
}) => {
  return (
    <Background variant={variant} color={bgcolor}>
      <Container>
        {withBackButton && (
          <Box sx={{ marginBottom: '10px' }}>
            <CustomBackButton variant="outlined" />
          </Box>
        )}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx,
          }}
        >
          {children}
        </Container>
      </Container>
    </Background>
  );
};

export default Template;
