import { MetaMaskInpageProvider } from '@metamask/providers';
import Web3 from 'web3';
import { useCallback, useEffect, useState } from 'react';
import { ADDR_TOKEN_KEY, BALANCE_TOKEN_KEY } from '@/constants/token';
import { useLocalStorage } from './useLocalStorage';

export const useWeb3 = () => {
  const [userAddr, setUserAddr] = useLocalStorage<string>(ADDR_TOKEN_KEY, '');
  const [_, setUserBalance] = useLocalStorage<string>(BALANCE_TOKEN_KEY, '');

  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [transactions, setTractions] = useState<any[]>([]);

  const getCurChainId = async () => {
    const eth = window.ethereum as MetaMaskInpageProvider;
    const curChainId = await eth.request({
      method: 'eth_chainId',
    });

    return curChainId;
  };

  const addAndConnNetwork = async (chainId: string) => {
    const eth = window.ethereum as MetaMaskInpageProvider;

    const network = {
      chainId,
      chainName: 'kongTest',
      rpcUrls: ['http://127.0.0.1:8545'],
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
    };

    await eth.request({
      method: 'wallet_addEthereumChain',
      params: [network],
    });
  };

  const getAccount = async () => {
    const eth = window.ethereum as MetaMaskInpageProvider;

    const [_userAddr] = (await eth.request({
      method: 'eth_requestAccounts',
    })) as string[];
    setUserAddr(_userAddr);

    return _userAddr;
  };

  const getBalance = useCallback(
    async (_web3: Web3, _userAddr: string) => {
      const _balance = await _web3.eth.getBalance(_userAddr);

      setUserBalance(String(Number(_balance) / 10 ** 18));
    },
    [setUserBalance],
  );

  const fireTransaction = async (to: string, amount: string) => {
    if (userAddr) {
      try {
        const tx = {
          from: userAddr,
          to: to,
          value: web3?.utils.toWei(amount, 'ether'),
        };

        await web3?.eth.sendTransaction(tx);

        const _balance = await web3?.eth.getBalance(userAddr);
        setUserBalance(String(Number(_balance) / 10 ** 18));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getTransactionsByAccount = useCallback(async () => {
    const _transactions = [];
    const startBlockNumber = 0;
    let endBlockNumber;

    if (web3) {
      endBlockNumber = await web3.eth.getBlockNumber();
    }

    if (web3 && endBlockNumber) {
      for (let i = startBlockNumber; i <= endBlockNumber; i++) {
        const block = await web3.eth.getBlock(i, true);
        if (block != null && block.transactions != null) {
          _transactions.push(...block.transactions);
        }
      }

      const _transactionsByAccount = _transactions.filter((transaction) => {
        if (typeof transaction !== 'string') {
          return transaction.from === userAddr || transaction.to === userAddr;
        }
      });

      setTractions(_transactionsByAccount);
    }
  }, [web3, userAddr, setTractions]);

  useEffect(() => {
    (async function () {
      if (window.ethereum !== undefined) {
        const curChainId = await getCurChainId();
        const targetChainId = '0x1e2a';

        if (curChainId !== targetChainId) {
          await addAndConnNetwork(targetChainId);
        }

        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);

        window.ethereum.on('accountsChanged', async (accounts: unknown) => {
          if (
            Array.isArray(accounts) &&
            accounts.every((item) => typeof item === 'string')
          ) {
            setUserAddr(accounts[0]);
            await getBalance(_web3, accounts[0]);
          }
        });
      }
    })();
  }, [getBalance, setUserAddr]);

  useEffect(() => {
    getTransactionsByAccount();
  }, []);

  return {
    userAddr,
    web3,
    transactions,
    fireTransaction,
    getAccount,
    getBalance,
  };
};
