---
title: Listen To Smart Contract Events
sidebar_position: 6
---

## What are smart contract events?

Smart contract events are sensors to let you know when something in a smart contract has happened in real time.

## Where are events used in smart contract applications?

### Frontend

If you swap tokens on a website using a AMM DEX smart contract, the token balances will know when to be updated on the frontend almost instantly using events.

### Backend

Trading bots can listen to AMM DEX swap contracts events and find potential arbitrage opportunities.
IoT robotics applications in the physical world connected to a smart contract can be controlled with events.
Chainlink orracle nodes also depend on smart contract events to know when to communicate between the real world and blockchains.

## How to Listen To Smart Contract Events On Shardeum?

### Websockets

We are planning to add websocket RPC URL support in the future to subscribe to smart contract events.
This way, users will be able to save API calls instead of polling for new data every new block/bundle/cycle.

### Polling

Reading smart contract events can also be done using Shardeum cycles (we listen to blocks/bundles to do this).

## Reading events with Shardeum Cycles:

1. To get the current cycle: get latest block, then divide by 10, and round down.

## NOTE: WORK IN PROGRESS

2. Build the JSON URL with:

Example (at startCycle = endCycle = 49):

https://explorer.liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352

3. Filter for transactions per page [note, 10 transactions per page]:

https://explorer.liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352&page=1


## JSON URL Filter Variables

    ?startCycle=lastestCycle
    &endCycle=lastestCycle
    &address=addressToListenTo
    &page=1

## Example script (NOTE: WORK IN PROGRESS):

Example in Python :

      from web3 import Web3
      import math
      import json
      import os
      import time

      ShardeumConnectionHTTPS = "https://liberty20.shardeum.org/";
      web3 = Web3(Web3.HTTPProvider(ShardeumConnectionHTTPS))

      print("Connected to Web3? ")
      print(web3.isConnected())

      print("Chain ID? ")
      print(web3.eth.chain_id)

      while True:
          print("Current cycle (1 cycle = 10 blocks [bundles]) ")
          cycle =  (math.floor(web3.eth.blockNumber/10))  #Divide current bundle [block] by 10, then round down to get cycle.
          print(cycle)
          time.sleep(60)   #1 cycle roughly every 60 seconds based on explorer: https://explorer.liberty20.shardeum.org/cycle





___
