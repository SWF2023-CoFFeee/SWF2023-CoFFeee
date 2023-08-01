import { Stack, Button, Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { MetaMaskImage } from '@/assets/images';
import { useWeb3 } from '@/lib/hooks/useWeb3';
import RouterMeta from '@/lib/RouterMeta';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { ADDR_TOKEN_KEY } from '@/constants/token';
import { TAuthStep } from '.';
export interface IConnectAddrSectionProps {
  onSwitchAuthStep: (key: TAuthStep) => void;
}
const ConnectAddrSection = ({ onSwitchAuthStep }: IConnectAddrSectionProps) => {
  const { web3, getAccount, getBalance } = useWeb3();
  const [userAddr] = useLocalStorage(ADDR_TOKEN_KEY, '');
  const navigate = useNavigate();

  const onConnect = async () => {
    const _account = await getAccount();
    if (_account && web3) {
      await getBalance(web3, _account).then((_) => {
        navigate(RouterMeta.MarketPage.path);
        window.location.reload();
      });
    }
  };

  if (!(web3 && userAddr))
    return (
      <Stack sx={{ width: '429px' }}>
        <Typography variant="body2" textAlign="center" sx={{ mb: '182px' }}>
          Please connect your wallet.
        </Typography>

        <Button
          type="button"
          variant="roundedOutlined"
          onClick={onConnect}
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
          }}
        >
          <img
            src={MetaMaskImage}
            alt="MetaMaskIcon"
            style={{ marginRight: '16px' }}
          />
          MetaMask
        </Button>
      </Stack>
    );

  return <Navigate to={RouterMeta.MarketPage.path} replace={true} />;
};

export default ConnectAddrSection;
