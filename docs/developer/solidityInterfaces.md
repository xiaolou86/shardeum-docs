---
title: Solidity Interfaces
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## :red_circle: Liberty 2.0 Multicall Contracts  :red_circle:

You will need to use the EIP-2930 accessList to multicall contracts defined by interfaces on Liberty 2.0.
Read the "EIP-2930 Transactions" guide first:

https://docs.shardeum.org/developer/eip-2930

## What are Solidity interfaces?

Solidity interfaces allow smart contracts to interact with each other.

## Why are Solidity interfaces useful?

Solidity interfaces can:

-call contracts with different Solidity versions

-use functions that are only needed for their use case

## How do I define a Solidity interface?

The contract interface is defined above the contract that will be calling the contract interface.
Functions are then defined inside the interface based on name, inputs and modifiers.

## Where are Solidity interface functions defined?

A contract interface instance needs to be created in the contract that will be using the interface.
The contract interface is then defined when its address is set inside the constructor for the contract using the interface.

## When should I use a Solidity interface?

One popular contract that is useful with interfaces is WETH (Wrapped Ether).
This contract converts MSG.VALUE into an ERC-20 instance. On Shardeum, SHM Is MSG.VALUE.
Therefore, WETH is WSHM on Shardeum. This contract has wrap and unwrap functions:

Deposit (Wrap): SHM => WSHM.

Withdraw (Unwrap): WSHM => SHM.

Using a WSHM interface, we can create a Solidity 0.8.0 contract which can interact with WSHM (Solidity 0.4.0).

## WSHM Solidity 0.4.0

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

    pragma solidity ^0.4.18;

    contract WSHM {
        string public name     = "Wrapped SHM";
        string public symbol   = "WSHM";
        uint8  public decimals = 18;

        event  Approval(address indexed src, address indexed guy, uint wad);
        event  Transfer(address indexed src, address indexed dst, uint wad);
        event  Deposit(address indexed dst, uint wad);
        event  Withdrawal(address indexed src, uint wad);

        mapping (address => uint)                       public  balanceOf;
        mapping (address => mapping (address => uint))  public  allowance;

        function() public payable {
            deposit();
        }
        function deposit() public payable {
            balanceOf[msg.sender] += msg.value;
            Deposit(msg.sender, msg.value);
        }
        function withdraw(uint wad) public {
            require(balanceOf[msg.sender] >= wad);
            balanceOf[msg.sender] -= wad;
            msg.sender.transfer(wad);
            Withdrawal(msg.sender, wad);
        }

        function totalSupply() public view returns (uint) {
            return this.balance;
        }

        function approve(address guy, uint wad) public returns (bool) {
            allowance[msg.sender][guy] = wad;
            Approval(msg.sender, guy, wad);
            return true;
        }

        function transfer(address dst, uint wad) public returns (bool) {
            return transferFrom(msg.sender, dst, wad);
        }

        function transferFrom(address src, address dst, uint wad)
            public
            returns (bool)
        {
            require(balanceOf[src] >= wad);

            if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {
                require(allowance[src][msg.sender] >= wad);
                allowance[src][msg.sender] -= wad;
            }

            balanceOf[src] -= wad;
            balanceOf[dst] += wad;

            Transfer(src, dst, wad);

            return true;
        }
    }

  </TabItem>
</Tabs>

## WSHM interface Solidity 0.8.0

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

    // SPDX-License-Identifier: MIT
    pragma solidity 0.8.17;

    interface interfaceWSHM {

        function transfer(address dst, uint wad) external returns (bool);

        function transferFrom(address src, address dst, uint wad) external returns (bool);

        function withdraw(uint wad) external;

        function deposit() external payable;

    }

    contract multicallWSHM {

        interfaceWSHM public WSHM;

        receive() external payable {}

        fallback() external payable {}

        constructor() {
            WSHM = interfaceWSHM(0xa80d5d2C8Cc0d06fBC1F1A89A05d76f86082C20e); // WSHM Liberty 2.0 address.
        }

        function multicallDeposit() public payable {
            WSHM.deposit{value: msg.value}();
            WSHM.transfer(msg.sender, msg.value);
        }

        function multicallWithdraw(uint256 amount) public {
            WSHM.transferFrom(msg.sender,address(this),amount);
            WSHM.withdraw(amount);
            payable(msg.sender).transfer(address(this).balance);
        }

    }

  </TabItem>
</Tabs>

## WSHM interface contract EIP-2930 accessList multicall transactions

<Tabs>
  <TabItem value="javascript" label="Javascript" default>

      const Web3 = require('web3')
      const ethers = require("ethers")

      const rpcURL = "https://liberty20.shardeum.org/"
      const web3 = new Web3(rpcURL)

      const provider = new ethers.providers.JsonRpcProvider(rpcURL)
      const signer = new ethers.Wallet(Buffer.from(process.env.devTestnetPrivateKey, 'hex'), provider);
      console.log("User wallet address: " + signer.address)

      const contractAddress_JS = '0xB4a3bfCBB0C8adf5C82076A87542869C7d526fA9'
      const contractABI_JS = [{"inputs":[],"name":"multicallDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"multicallWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WSHM","outputs":[{"internalType":"contractinterfaceWSHM","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

      const contractDefined_JS = new web3.eth.Contract(contractABI_JS, contractAddress_JS)

      const timeMilliSec = 1000;

      function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve,ms));
      }

      createAndSendTx();

      async function createAndSendTx() {

        const chainIdConnected = await web3.eth.getChainId();
        console.log("chainIdConnected: "+ chainIdConnected)

        const addressWSHM = await contractDefined_JS.methods.WSHM().call()
        const abiWSHM = [{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
        const deployedWSHM = new web3.eth.Contract(abiWSHM, addressWSHM)

        console.log("addressWSHM: "+ addressWSHM)

        const signerBalanceWSHM = await deployedWSHM.methods.balanceOf(signer.address).call()
        console.log("signerBalanceWSHM: "+ signerBalanceWSHM)

        const allowanceSignerMulticall = await deployedWSHM.methods.allowance(signer.address,contractAddress_JS).call()
        console.log("allowanceSignerMulticall: "+ allowanceSignerMulticall)

        const codeHash = await provider.getCode(addressWSHM)
        console.log("addressWSHM codeHash: " + codeHash)

        const oneEtherInWeiSHM = "1000000000000000000"
        const twoEtherInWeiSHM = "2000000000000000000"

        let txCount = await provider.getTransactionCount(signer.address);

        const depositTwoEtherSHM = signer.sendTransaction({
            chainId: chainIdConnected,
            to: contractAddress_JS,
            nonce:    web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(2100000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
            data: contractDefined_JS.methods.multicallDeposit().encodeABI(),
            type: 1,
            value: twoEtherInWeiSHM,
            accessList: [
              {
                address: addressWSHM, //Contract address we are calling from the "to" contract at some point.
                storageKeys: [
                  codeHash, //Code hash from EXTCODEHASH https://blog.finxter.com/how-to-find-out-if-an-ethereum-address-is-a-contract/
                ]
              }
            ]

        });

        console.log("WAIT FOR TX RECEIPT: ")
        await depositTwoEtherSHM
        console.log("TX RECEIPT: ")
        console.log(depositTwoEtherSHM)
        console.log("WAIT 30 SECONDS, THEN TRY TO APPROVE WSHM BEFORE WITHDRAW! ")
        await timeout(30*timeMilliSec)

        // MAKE SURE YOU APPROVE WSHM BEFORE YOU TRY TO WITHDRAW TO CALL "transferFrom()"!
        txCount = await provider.getTransactionCount(signer.address);

        const approveOneEtherWSHM = signer.sendTransaction({
            chainId: chainIdConnected,
            to: addressWSHM,
            nonce:    web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(2100000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
            data: deployedWSHM.methods.approve(contractAddress_JS,oneEtherInWeiSHM).encodeABI(),

        });

        console.log("WAIT FOR TX RECEIPT: ")
        await approveOneEtherWSHM
        console.log("TX RECEIPT: ")
        console.log(approveOneEtherWSHM)

        console.log("WAIT 30 SECONDS, THEN TRY TO WITHDRAW! ")
        await timeout(30*timeMilliSec)

        txCount = await provider.getTransactionCount(signer.address);

        const withdrawOneEtherSHM = signer.sendTransaction({
            chainId: chainIdConnected,
            to: contractAddress_JS,
            nonce:    web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(2100000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
            data: contractDefined_JS.methods.multicallWithdraw(oneEtherInWeiSHM).encodeABI(),
            type: 1,
            accessList: [
              {
                address: addressWSHM, //Contract address we are calling from the "to" contract at some point.
                storageKeys: [
                  codeHash, //Code hash from EXTCODEHASH https://blog.finxter.com/how-to-find-out-if-an-ethereum-address-is-a-contract/
                ]
              }
            ]

        });

        console.log("WAIT FOR TX RECEIPT: ")
        await withdrawOneEtherSHM
        console.log("TX RECEIPT: ")
        console.log(withdrawOneEtherSHM)

      }


  </TabItem>

</Tabs>
