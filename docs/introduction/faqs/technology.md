---
title: Technology
sidebar_position: 2
---

## Will Shardeum maintain atomic composability across different shards?

To better understand what Shardeum is, please take a look at the Shardus project (which serves as the protocol layer of Shardeum) has built over the last four years (see https://shardus.com/). In a nutshell, Shardus has developed the software to make it easy to create shared distributed ledgers. Shardus handles the protocol layer, gossip of transactions, consensus, syncing, sharding, etc. Developers can start with Shardus and define the application layer to easily build decentralized networks for a specific application, for example, a game with a very high TPS. Shardeum will start with Shardus and add the EVM to the application layer. So the answer to the first question is YES since Shardus hides from the application layer that the network is sharded. The protocol layer takes care of cross-shard consensus and data sharing. .

## What is a Proof of Quorum (PoQ)?

Proof of Quorum means to generate a receipt showing that a majority of the consensus group has voted for the transaction. Each node in the consensus group signs the transaction hash and gossips it to other nodes in the consensus group. Nodes collect these votes, and when the number of votes is more than 50%, these votes form a receipt that can prove consensus on the transaction.

## What language will Shardeum use for Smart Contracts?

EVM-based languages including Solidity and Vyper.

## What kind of BLS signatures does shardeum use and what is the hash function?

Ed25519 and SHA256

## What are the primary languages in which Shardeum is being built?

Node.js + TypeScript + Rust
