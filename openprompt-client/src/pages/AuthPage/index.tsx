import { useState } from 'react';
import { Typography } from '@mui/material';
import React from 'react';
import Template from '@/components/common/CustomUI/template';
import SignupSection from './SignupSection';
import SigninSection from './SigninSection';
import ConnectAddrSection from './ConnectAddrSection';

export type TAuthStep = 'Sign up' | 'Sign in' | 'Connect Wallet';
export interface IAuthStepProperty {
  isVisible: boolean;
  component: React.ReactNode;
}

const AuthPage = () => {
  const onSwitchAuthStep = (key: TAuthStep) => {
    setAuthSteps((prevSteps) => {
      const updatedSteps = { ...prevSteps };

      for (const stepKey in updatedSteps) {
        updatedSteps[stepKey as TAuthStep] = {
          ...updatedSteps[stepKey as TAuthStep],
          isVisible: stepKey === key,
        };
      }
      return updatedSteps;
    });
  };

  const [authStep, setAuthSteps] = useState<{
    [key in TAuthStep]: IAuthStepProperty;
  }>({
    'Sign up': {
      isVisible: true,
      component: <SignupSection onSwitchAuthStep={onSwitchAuthStep} />,
    },
    'Sign in': {
      isVisible: false,
      component: <SigninSection onSwitchAuthStep={onSwitchAuthStep} />,
    },
    'Connect Wallet': {
      isVisible: false,
      component: <ConnectAddrSection onSwitchAuthStep={onSwitchAuthStep} />,
    },
  });

  return (
    <Template variant="basic">
      <>
        {Object.keys(authStep).map((key) => {
          const { isVisible, component } = authStep[key as TAuthStep];

          if (isVisible) {
            return (
              <React.Fragment key={key}>
                <Typography variant="h3" sx={{ marginBottom: '8px' }}>
                  {key}
                </Typography>
                {component}
              </React.Fragment>
            );
          }
        })}
      </>
    </Template>
  );
};

export default AuthPage;
