import { SIGNUP_URL, SIGNIN_URL } from '@/constants/apiUrl';
import apiClient from './apiClient';

interface ISignupData {
  encPassword: string;
  password: string;
  username: string;
}
export const postSignupData = ({
  username,
  password,
  encPassword,
}: ISignupData) => {
  return apiClient({
    method: 'post',
    url: SIGNUP_URL,
    data: {
      role: 'USER',
      encPassword,
      password,
      username,
    },
  });
};

interface ISigninData {
  password: string;
  username: string;
}

export const postSigninData = ({ username, password }: ISigninData) => {
  return apiClient({
    method: 'post',
    url: SIGNIN_URL,
    data: {
      password,
      username,
    },
  });
};
