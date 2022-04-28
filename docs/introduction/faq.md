---
title: Frequently Asked Questions
sidebar_position: 7
---

# Frequently Asked Questions


## What is Shardeum?

Shardeum is an EVM-compatible dynamic state sharded blockchain with infinite scalability, true decentralization, and solid security.

## What does Shardeum aim for?

Shardeum aims to be a chain capable of onboarding over a billion people to the blockchain and crypto revolution. Shardeum, like the Internet, will be open, collaborative, and community-driven and would democratize accessibility to decentralization.
Shardeum will be the infrastructure on which the next iteration of the Internet, Web3, will be built.

## What language will Shardeum use for Smart Contracts?

EVM-compatible languages: Solidity and Vyper.

## How can a developer contribute to Shardeum Liberty (Alphanet)?

Shardeum Liberty launches on 26th April 2022 where you will get an overview on how to deploy smart contracts and DApps on the network. Once Liberty is launched, you can start deploying smart contracts and DApps on the alphanet by following our developer documentation. Simultaneously, the network performance will be analyzed by the Shardeum Foundation’s dev team to identify improvement opportunities. You can further migrate Ethereum based DApps written in Solidity & Viper to Shardeum. An added bonus is you will never have to worry about rising gas fees again!

## How do I get access to Shardeum Liberty?

Shardeum Liberty will be accessible to the public. You just need to configure the JSON-RPC server URL in MetaMask, Remix and other tools you use for development. Click on ‘Developer Docs’ link above which can guide you further.

## What rewards can I expect if I build DApps on Shardeum Liberty?

We've planned for an ecosystem fund setup to reward devs for creating innovative apps on Shardeum. You would be able to apply for a grant. More information will be posted on the Shardeum.org site about the process to apply.

## I have developed apps on Ethereum. How can I easily migrate them to Shardeum Liberty?

Since Shardeum is EVM compatible, there is nothing new you have to learn to use the network. On a sharded blockchain, transactions which are EIP2930 compliant will run faster than regular transactions. So you might want to look into this. Information about creating EIP2930 transactions will be added to the developer documentation before the launch of betanet.

## What are the features of Shardeum?

- Dynamic State Sharding
- Smart Contracts
- Energy Efficient
- Auto Scaling
- Security
- Immediate finality
- Low transaction fees
- Low Bandwidth
- Low Latency
- High Capacity
- High Fairness
- High Throughput (TPS - Transactions Per Second)

## How will Shardeum achieve Fast Finality?

Fast finality means having a quick turnaround time between submitting a transaction to the network and knowing that the transaction is irreversible.
In networks like Bitcoin, there is a probabilistic finality time. The longer you wait, the lower the chance that a transaction confirmed in a block cannot be reversed. Thus, the finality time is not just for the transaction being included in a block. Still, some blocks are being produced after that to reduce the probability of the transaction being reversed. For large value transfers on the Bitcoin network, it is recommended to wait for at least six blocks (about an hour) to ensure irreversibility.
Shardeum aims to provide immediate finality meaning that finality time is the same as latency time of a few seconds.

## How will Shardeum achieve auto-scaling?

Auto-scaling means that the network should self-govern the number of nodes the network needs and properly incentivize nodes to achieve the desired size. This implies that the network can effectively use the available nodes to achieve desired tradeoffs, for example, scaling of throughput proportional to the number of nodes available. Otherwise, there is no benefit in a network trying to auto-scale.

In networks like Bitcoin, there are conflicts in the desired size of the network. The low bandwidth requirement would favor having as few nodes as possible. In contrast, the high security and decentralization requirement would prefer having as many (unrelated) nodes as possible.
Shardeum will aim to build a network that can auto-scale.

## How will Shardeum achieve energy efficiency?

Energy efficiency means the consensus algorithm used by the network should not require excessive energy beyond what is necessary to process the transactions.
Bitcoin and other networks based on the Nakamoto consensus are designed to use high energy expenditure to secure the network from a 51% attack. However, efficient consensus algorithms such as Paxos and PBFT do not require high energy expenditure. The tradeoff is that these algorithms need the nodes to be assigned a node id before joining the network. Thus, these algorithms have been used in permissioned networks and not for nodes that can participate without requiring a node id.
Shardeum will use an energy-efficient consensus algorithm that requires nodes to have a node id upon joining the network. However, a novel approach does not need a central entity to decide which nodes are part of the network.

## How will Shardeum achieve Low Data Bandwidth?

Low bandwidth means that the network should minimize the amount of data transfer needed when distributing transactions and achieving consensus.
This does not imply just compressing the data or using binary formats; instead, the more critical factors are network architecture and algorithmic details of the consensus algorithm. In bitcoin-like networks, adding more nodes increases the amount of bandwidth used to process each transaction.
Shardeum will aim to create a network where the amount of bandwidth consumed by a transaction is constant and does not increase proportionally to the number of nodes.

## How will Shardeum achieve Low latency?

Low latency means the total turnaround time between submitting a valid transaction to the network and knowing that the network has committed to the transaction in a short period of time.

In networks like Bitcoin, latency is the time between submitting the transaction and including it in a block. For such networks, the fastest latency is no less than the average block production time which is around 10 minutes.

Shardeum will provide a latency of just a few seconds by processing each transaction individually before grouping them into blocks.

## How will Shardeum achieve High capacity?

High capacity means that the network should provide persistent storage for massive amounts of state data. Global-scale applications could require exabytes of state data. The current blockchains and distributed ledgers appear to be functional only because they have not been stressed in this dimension.
Shardeum will aim to build a network that can horizontally scale throughput and capacity.

## How will Shardeum achieve High fairness?

High fairness means that a transaction received by the network earlier than another one should be processed accordingly.
In a blockchain-based network, transactions within a block are considered to have occurred simultaneously, and the order in which they are applied does not matter. For some applications like games, this does not provide sufficient time resolution. Also, it is possible for transactions that were received much later to be processed before earlier transactions. In bitcoin-like networks, you can get priority by paying more gas.

Shardeum will aim to create a network that processes and applies transactions in the order received.

## How will Shardeum achieve high throughput?
High throughput means that the network should process a vast number of transactions per second.
In networks like Bitcoin, where every node must process every transaction (i.e., validate and apply), the bottleneck is the processing power of the slowest full nodes. If the bitcoin network were to increase the self-imposed block size limit, it would run into a more natural bottleneck of processing power. The only way to speed up the network would be to raise the processing power of all the nodes (vertical scaling). So all networks where every full node must process every transaction have the same theoretical throughput limit.
But in actuality, we see considerable differences when comparing networks like Bitcoin, Litecoin, and Dash. These differences are mainly due to different self-imposed block size limits and block rates. If devs removed these self-imposed limits, the differences due to different consensus algorithms would start to appear. Networks that used proof-of-stake would be much faster than networks that used proof-of-work since the node's processing power is not being used up by proof-of-work computation. Ideally, the rate at which the network processes transactions should be proportional to the number of nodes in the network. Increasing throughput means increasing the number of nodes (horizontal scaling).
Shardeum will aim to build a horizontally scalable network.

## What are the types of nodes in Shardeum?

There are three types of nodes in Shardeum essentially. The network node reward schedule is work in progress and will be finalized in the upcoming months.

## Will the Shardeum network work with different wallets?

Any EVM compatible wallet will work with Shardeum. Developers can also build new Shardeum wallets.

## Will Shardeum maintain atomic composability across different shards?

To better understand what Shardeum is, it would help understand what the Shardus project has built over the last four years (see https://shardus.com/). In a nutshell, Shardus has developed the software to make it easy to create shared distributed ledgers. Shardus handles the protocol layer, gossip of transactions, consensus, syncing, sharding, etc. Developers can start with Shardus and define the application layer to easily build decentralized networks for a specific application, for example, a game with a very high TPS. Shardeum will start with Shardus and add the EVM to the application layer. So the answer to the first question is YES since Shardus hides from the application layer that the network is sharded. The protocol layer takes care of cross-shard consensus and data sharing.

## How many nodes form a shard, and how many will be in a quorum? Is POQ based on the number of nodes or the number of shards?

For now, we are probably going to go with 128 nodes in a shard. But we are working with Montreal University Blockchain Lab to analyze an optimal number since a smaller size increases TPS and a larger size increases security. Most nodes in a shard (>64) would have to accept the tx to generate a PoQ receipt. Suppose a tx involves accounts A and B in shards 1 and 2. In that case, the nodes in these shards form a consensus group (256 nodes), and a majority (>128 since consensus group size is 256) need to agree on accepting the tx. It's pretty simple conceptually, but the implementation is very tricky. The Shardeum dev team is innovating and solving complex challenges as we speak.

## Is the source code open to the public?

We are currently working on filing defensive patents for the innovative implementations in the core technology of Shardeum. As soon as patents are filed, we will make code open source.

## What are the hardware requirements to run a node on Shardeum?

We will know better what hardware requirements are after testnet. A rented server for under $50/month should be more than sufficient. We aim for 4GB RAM type of config.

## What are the primary languages in which Shardeum is being developed?

TypeScript + Rust.

## What is the Governance model of Shardeum?

Swiss based Shardeum Foundation will support the development of the project. As of 14th April 2022, Foundation has been set up successfully. The long term goal is to transition Shardeum into a DAO. Various forms of DAO governance are currently being experimented with by many DAO projects. In the future DAOs will become more mature and recognized as legal entities by more jurisdictions at which time a smooth transition of Shardeum from foundation to DAO can be considered.
