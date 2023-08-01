### 실행 순서

npm i

1. ganache Network Instance 생성.

2. deploy :
	npx hardhat run --network ganache .\scripts\deploy.ts

3. Interact 코드 수정.
	abis/CoffeeeContract.js - Contract 생성 address 부분 수정.
	(deploy 명령어 실행 후, 콘솔에 찍힌 address로 수정)

	이후, Interact Method 사용시, import 해와서 사용.

EXAMPLE )
    ```
    import {CoffeeeNFTContract} from ./abis/CoffeeeContract.js
	
	// non view 함수일 경우
    
	const NFTContract = CoffeeeNFTContract;
	const data1 = contract.methods.mintNFT(ipfsUri, copyrightId).encodeABI();
	const mintParam = {
		from : currentAccount,
		to : contractAddress,
		gasLimit : web3.utils.toHex('50000000'),
		gasPrice : web3.utils.toHex(web3.utils.toWei("0.01", "ether")),
    	data : data1,
	};
	
	await window.ethereum?.request({
      		method: "eth_sendTransaction",
      		params: [mintParam],
    	});	//Promise returns

	// view 함수일 경우

	const data2 = contract.methods.getNFTsByOwner(owner).encodeABI();
	const getNFTsByOwnerParam={
    			from: currentAccount,
    			to: contractAddress,
    			data: data2,
	};

	const myNFTs = await window.ethereum.request({
		method: 'eth_call',
    		params: [getNFTsByOwnerParam],
	});
    ```