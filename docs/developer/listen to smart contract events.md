---
title: Listen To Smart Contract Events
sidebar_position: 6
---
# Listen To Smart Contract Events

Reading smart contract events can be done using Shardeum cycles.

Approach:

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

Example:

https://github.com/MarcusWentz/Web3_Get_Set_Contract_Metamask/blob/main/Scripts/python/ShardeumCycleBlockEventListener.py

___
