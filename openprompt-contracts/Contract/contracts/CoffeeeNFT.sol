// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";
import "../node_modules/@openzeppelin/contracts/utils/Base64.sol";

contract CoffeeeNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    struct NFTInfo {
        string ipfsUri;
        uint256 copyrightId;
    }

    // NFT의 소유자 주소를 저장하기 위한 매핑
    mapping(uint256 => address) private _nftOwners;
    // 소유자 주소별 토큰 ID 배열을 저장하기 위한 매핑
    mapping(address => uint256[]) private _ownedTokens;
    // 토큰 ID에서 NFT 정보를 조회하기 위한 매핑
    mapping(uint256 => NFTInfo) private _nftInfo;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}

    function mintNFT(string memory ipfsUri, uint256 copyrightId) public {
        uint256 newTokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, newTokenId);

        NFTInfo memory newNFTInfo = NFTInfo(ipfsUri, copyrightId);
        _nftInfo[newTokenId] = newNFTInfo;
        _nftOwners[newTokenId] = msg.sender;
        _ownedTokens[msg.sender].push(newTokenId);

        _tokenIdCounter.increment();
    }

    function getIpfsUri(uint256 tokenId) public view returns (string memory) {
        return _nftInfo[tokenId].ipfsUri;
    }

    function getNFTOwner(uint256 tokenId) public view returns (address) {
        return _nftOwners[tokenId];
    }

    function getNFTsByOwner(
        address owner
    ) public view returns (uint256[] memory) {
        return _ownedTokens[owner];
    }

    function getNFTByCopyrightId(
        uint256 targetCopyrightId
    ) public view returns (uint256) {
        for (
            uint256 tokenId = 1;
            tokenId <= _tokenIdCounter.current();
            tokenId++
        ) {
            if (_nftInfo[tokenId].copyrightId == targetCopyrightId) {
                return tokenId;
            }
        }
        revert("NFT not found");
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: caller is not token owner or approved"
        );
        _safeTransfer(from, to, tokenId, data);
    }
}
