---
title: Shardeum Liberty Opcodes
sidebar_position: 2
---

# Liberty 1.0 Opcodes

Shardeum is EVM-based, this means most opcodes should function identically to other EVM-based networks. Shardeum Liberty 1.0 will not support any block related opcodes, this is because Shardeum is blockless. These opcodes will be re-mapped and become operational in Shardeum Liberty 1.1.

## Block Related Opcodes

| **Stack** 	| **Name**   	| **Notes**                                                                                        	|
|-----------	|------------	|--------------------------------------------------------------------------------------------------	|
| 40        	| BLOCKHASH  	| hash of the specific block, only valid for the 256 most recent blocks, excluding the current one 	|
| 41        	| COINBASE   	| address of the current block's miner                                                             	|
| 42        	| TIMESTAMP  	| current block's Unix timestamp in seconds                                                        	|
| 43        	| NUMBER     	| current block's number                                                                           	|
| 44        	| DIFFICULTY 	| current block's difficulty                                                                       	|
| 45        	| GASLIMIT   	| current block's gas limit                                                                        	|
| 46        	| CHAINID    	| Istanbul hardfork, EIP-1344: current network's chain id                                          	|
| 48        	| BASEFEE    	| London hardfork, EIP-3198: current block's base fee                                              	|
