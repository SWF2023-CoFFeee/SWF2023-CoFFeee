export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const RouterMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: false,
  },
  AuthPage: {
    name: 'Auth',
    path: '/auth',
    isShow: false,
  },
  MarketPage: {
    name: 'Market',
    path: '/market',
    isShow: true,
  },
  ProductDetailPage: {
    name: 'PDP',
    path: '/product/:productid',
    isShow: false,
  },
  CopyrightRegisterPage: {
    name: 'Register Copyright',
    path: '/register/copyright',
    isShow: true,
  },
  ProductRegisterPage: {
    name: 'ProductRegister',
    path: '/register/product',
    isShow: false,
  },
  SuccessPage: {
    name: 'Success',
    path: '/success/:successtype',
    isShow: true,
  },
  MyPage: {
    name: 'Mypage',
    path: '/mypage',
    isShow: true,
  },
  DesignSystemPage: {
    name: 'Design',
    path: '/design-system',
    isShow: false,
  },
};

export default RouterMeta;
