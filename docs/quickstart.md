---
title: Quickstart
sidebar_position: 1
slug: /
---

# Quickstart

## What is Shardeum?

Shardeum is a blockchain that supports EVM smart contracts.

For more general information on Shardeum:

[What is Shardeum?](/docs/introduction/what-is-shardeum.md)

## What makes Shardeum special?

Shardeum is sharded, allowing the network to scale linearly with more nodes.
Horizontally scaling in this fashion allows for high transactions per second at low gas prices.

Find out more about Shardeum nodes:

[Shardeum Node Types](/docs/nodes/node-types.md)

## How do I start using Shardeum?

You will need an EVM wallet like Metamask to:

      -pay for transaction gas fees
      -transfer tokens
      -interact with smart contracts

For more info on Metamask:

[Metamask Introduction](/docs/wallets/MetaMask/introduction.md)

## How do I fund my wallet to pay for transaction gas fees, transfer tokens and interact with smart contracts?

Find out how to get testnet tokens from our faucets here:

[Claim Liberty 100 SHM From Shardeum Faucets](/docs/faucet/claim.md)

## How can I connect to Shardeum with Metamask?

Connect to Shardeum using the following network endpoints found here:

[Shardeum Endpoints](/docs/network/endpoints.md)

Note: you can quickly connect your Metamask to Shardeum with:

[chainlist.org](https://chainlist.org/)

## How do I view transactions on Shardeum?

View transactions on Shardeum using the Shardeum Explorer:

[Shardeum Explorer](/docs/network/explorer.md)

## How do I deploy smart contracts to Shardeum?

Since Shardeum is EVM compatible, you can use the following frameworks to deploy to Shardeum:

[Remix IDE](/docs/smartContracts/deploy/remix.md)

[Hardhat](/docs/smartContracts/deploy/hardhat.md)

[Truffle](/docs/smartContracts/deploy/truffle.md)

To deploy contracts at the same address cross chain:

[Same Address Cross Chain](/docs/smartContracts/deploy/sameAddress.md)

## What tokens can I deploy to Shardeum?

All EVM based token standards are supported on Shardeum (since Shardeum is EVM compatible).
Popular tokens supported on Shardeum:

[ERC-20 (Fungible Tokens)](/docs/smartContracts/tokens/ERC-20.md)

[ERC-721 (NFTs)](/docs/smartContracts/tokens/ERC-721.md)

[ERC-1155 (Token Emulator)](/docs/smartContracts/tokens/ERC-1155.md)

## How does sharding impact development on Shardeum?

Smart contract addresses that don't have the same prefix are deployed to different shards.
EIP-2930 accessList info is needed for transactions multicalling other contracts.

Here is a guide on how to use EIP-2930 accessList info:

[EIP-2930 Overview](/docs/smartContracts/EIP-2930/multicallContract.md)

Shardeum is developing an RPC call to automate creating the EIP-2930 accessList for transactions, which can be used with ethers.js.

## How do I integrate large files into Shardeum?

We recommend users to use decentralized file storage standards like IPFS and Filecoin.

Files stored on IPFS can be used in contracts to deploy contracts with CID values as shown in this example:

[IPFS and Filecoin](/docs/storage/ipfsAndFilecoin.md)
