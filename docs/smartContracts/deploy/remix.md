---
title: Remix IDE
sidebar_position: 1
---

Remix IDE is an open source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. Remix is used for the entire journey of contract development as well as act as a playground for learning and teaching Ethereum.

1, Visit https://remix.ethereum.org/

## Writing your smart contract

2, Create a "New File" under contracts with name HelloWorld.sol.

![remix_1](/img/remix/remix_1.png)

3, Copy and paste the code below to HelloWorld.sol file.

```solidity
// Specifies the version of Solidity, using semantic versioning.

pragma solidity ^0.7.0;

// Defines a contract named `HelloWorld`

contract HelloWorld {

   // Declares a state variable `message` of type `string`.

   string public message;

   // Constructors are used to initialize the contract's data.

   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage`.

      message = initMessage;
   }

   // A public function that accepts a string argument.

   function update(string memory newMessage) public {
      message = newMessage;
   }
}
```

## Compiling

4, Compile HelloWorld.sol.

![remix_2](/img/remix/remix_2.png)

## Deploying

If you want to deploy the contract to a live network like Shardeum Alphanet, configure your MetaMask using this doc.

5, Deploy the compiler contract. Select Injected Web3 for deploying to live network.

![remix_3](/img/remix/remix_3.png)

6, Confirm the deploy transaction in MetaMask.

![remix_4](/img/remix/remix_4.png)

7, Find the deployed contract address in Remix.

![remix_5](/img/remix/remix_5.png)

## Interacting

8, Update the contract by interacting with the contract.

![remix_6](/img/remix/remix_6.png)

9, Confirm the deploy transaction in MetaMask.

![remix_7](/img/remix/remix_7.png)

10, Check the contract has been updated.

![remix_8](/img/remix/remix_8.png)
