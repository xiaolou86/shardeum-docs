---
title: Listen To Smart Contract Events
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What are smart contract events?

Smart contract events broadcast new data coming from a contract.

## Why are smart contract events important?

Smart contract event listening notifies applications and users in real time that something new has happened in a smart contract.

## Where are events used in smart contract applications?

## Frontend

If you swap tokens on a website using a AMM DEX smart contract, the token balances will know when to be updated on the frontend almost instantly using events.

## Backend

Trading bots can listen to AMM DEX swap contracts events and find potential arbitrage opportunities.
IoT robotics applications in the physical world connected to a smart contract can be controlled with events.
Chainlink oracle nodes also depend on smart contract events to know when to communicate between the real world and blockchains.

## How to listen To smart contract events on Shardeum?

## Websockets

We are planning to add websocket RPC URL support in the future to subscribe to smart contract events.
This way, users will be able to save API calls instead of polling for new data every new block/bundle/cycle.

## Polling

Reading smart contract events can also be done using Shardeum cycles (we listen to blocks/bundles to do this).

## Reading events with Shardeum Cycles:

1. To get the current cycle: get latest block, then divide by 10, and round down.

2. Build the JSON URL with:

Example with:

        startCycle = endCycle = 49
        address = 0x23FF65f07cAbAd1643440a0114d71260F2Bb6352

https://explorer.liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352

3. Filter for transactions per page [note, 10 transactions per page]:

https://explorer.liberty10.shardeum.org/api/transaction?startCycle=49&endCycle=49&address=0x23FF65f07cAbAd1643440a0114d71260F2Bb6352&page=1


## JSON URL Filter Variables

    ?startCycle=lastestCycle
    &endCycle=lastestCycle
    &address=addressToListenTo
    &page=1

## Python Examples:

Reading transaction events from an address from cycle 0 to 3000:

<Tabs>
  <TabItem value="python" label="Python" default>

      from urllib.request import urlopen
      import json
      transactionsInCycleRangeUrlString = "https://explorer.liberty10.shardeum.org/api/transaction?startCycle=0&endCycle=3000&address=0x0000000000000000000000000000000000000000"
      transactionsInCycleRangeUrlOpened = urlopen(transactionsInCycleRangeUrlString)
      transactionsInCycleRangeUrlJSON = json.loads(transactionsInCycleRangeUrlOpened.read())
      totalTransactions = transactionsInCycleRangeUrlJSON["totalTransactions"]
      print(totalTransactions)
      pageIndex = 1

      while totalTransactions > 0:
          print(pageIndex)
          print(totalTransactions)
          pageIndexIncrementUrlString = transactionsInCycleRangeUrlString + "&page=" + str(pageIndex)
          pageIndexIncrementUrlOpened = urlopen(pageIndexIncrementUrlString)
          rawTransactionDataPage = json.loads(pageIndexIncrementUrlOpened.read())
          print(rawTransactionDataPage)
          totalTransactions -= 10
          pageIndex += 1
  </TabItem>
  <TabItem value="javascript" label="Javascript" default>

          Coming soon...

  </TabItem>
</Tabs>



Listening for the latest cycle, which might contain transaction events from an address:

<Tabs>
  <TabItem value="python" label="Python" default>


        from web3 import Web3
        import os
        import time
        import math
        from urllib.request import urlopen
        import json

        ShardeumConnectionHTTPS = "https://liberty20.shardeum.org/";
        web3 = Web3(Web3.HTTPProvider(ShardeumConnectionHTTPS))

        print("Connected to Web3? ")
        print(web3.isConnected())

        print("Chain ID? ")
        print(web3.eth.chain_id)

        addressToSubscribeTo = "0x0000000000000000000000000000000000000000"

        while True:
            print("Current cycle (1 cycle = 10 blocks [bundles]) ")
            cycle =  (math.floor(web3.eth.blockNumber/10))  #Divide current bundle [block] by 10, then round down to get cycle.
            print(cycle)

            transactionsInCycleRangeUrlString = "https://explorer.liberty10.shardeum.org/api/transaction?startCycle=" + str(cycle) + "&endCycle=" + str(cycle) + "&address=" + addressToSubscribeTo
            print(transactionsInCycleRangeUrlString)
            transactionsInCycleRangeUrlOpened = urlopen(transactionsInCycleRangeUrlString)
            transactionsInCycleRangeUrlJSON = json.loads(transactionsInCycleRangeUrlOpened.read())
            totalTransactions = transactionsInCycleRangeUrlJSON["totalTransactions"]
            print(totalTransactions)
            pageIndex = 1

            while totalTransactions > 0:
                print(pageIndex)
                print(totalTransactions)
                pageIndexIncrementUrlString = transactionsInCycleRangeUrlString + "&page=" + str(pageIndex)
                pageIndexIncrementUrlOpened = urlopen(pageIndexIncrementUrlString)
                rawTransactionDataPage = json.loads(pageIndexIncrementUrlOpened.read())
                print(rawTransactionDataPage)
                totalTransactions -= 10
                pageIndex += 1

            time.sleep(60)   #1 cycle roughly every 60 seconds based on explorer: https://explorer.liberty20.shardeum.org/cycle

  </TabItem>
  <TabItem value="javascript" label="Javascript" default>

          Coming soon...

  </TabItem>
</Tabs>
