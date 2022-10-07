---
title: Storage
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How do smart contracts store data?

Smart contracts have storage slots to store state data.
Each storage slot is 32 bytes.

Here is an example smart contract where a user can change the state for a uint variable.
Note: a uint variable is 256 bits by default in Solidity, equivalent to 32 bytes:

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

    // SPDX-License-Identifier: MIT
    pragma solidity 0.8.15;

    contract SimpleStorage {
        uint public storedData; //Do not set 0 manually it wastes gas!

        event setEvent();

        function set(uint x) public {
            storedData = x;
            emit setEvent();
        }

    }

  </TabItem>
</Tabs>

## What EVM opcodes are used to read and write data in a contract?

Storage (stored, expensive):

-SSTORE: write data to storage slot 20000 gas)

-SLOAD:  read data from a storage slot (800 gas)

Memory (run time, cheap):

-MSTORE (3 gas)

-MLOAD (3 gas)

Here is a smart contract which uses Assembly (Yul in Solidity) to access these opcodes:

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

      // SPDX-License-Identifier: MIT
      pragma solidity 0.8.15;

      contract AssemblyStorage {

          uint public storageSlot0; //Do not set 0 manually it wastes gas!
          uint public storageSlot1; //Do not set 0 manually it wastes gas!

          event setEvent();

          function assemblyStorage(uint x) public {
              assembly {
                  sstore(0,x)         //Record memory value in storage slot 0.  
                  sstore(1,sload(0))  //Record storage slot 0 to storage slot 1 (costs more gas reading data from storage than data).
              }
              emit setEvent();
          }

      }


  </TabItem>
</Tabs>


## What is a good strategy to compress data in storage slots?

-If you are using a variable that never changes, make the variable immutable so that it doesn't use a storage slot.

-Try to fit data in less storage slots when possible. For example,
if you need a uint, an address and an uint with only 96 bits:

Correct:

      uint     [Slot 0, 32/32 Bytes]
      address  [Slot 1, 20/32 Bytes]
      uint96   [Slot 1, 32/32 Bytes]

Note: Pack the compressed data together (above),
or you will end up using another storage slot anyway (below)

Wrong:

      uint96  [Slot 0, 12/32 Bytes]
      uint    [Slot 1, 32/32 Bytes]
      address [Slot 2, 20/32 Bytes]


## Why is storing large data not recommended on chain?

The more storage slots you want to write to, the more gas you need to pay.
Storing large files like high resolution images is very expensive on chain.

## What are some decentralized storage options for large data?

IPFS and Filecoin together are useful for storing large data.

## How to upload to IPFS?

Easily write to IPFS using Fleek:

https://fleek.co/

## How to download from IPFS?

Easily read from IPFS using this web browser tool:

https://ipfsbrowser.com/

## How to mint an NFT on Shardeum using IPFS and Filecoin storage?

Mint ERC-721 using an imported OpenZeppelin library:

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

      // SPDX-License-Identifier: MIT
      pragma solidity 0.8.17;

      import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

      contract ERC721_Example is ERC721URIStorage {

          constructor() ERC721 ("shardeumLogo", "SL"){
              _safeMint(msg.sender, 1);
              _setTokenURI(1, "https://ipfs.fleek.co/ipfs/bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq");
          }

      }

  </TabItem>
</Tabs>
