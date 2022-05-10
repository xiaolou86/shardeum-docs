---
slug: /release_notes
title: Release Notes
sidebar_position: 7

---
**Shardeum Liberty 1.0 Refresh (May 5th)**

**Validator:**

- Performance improvements to validator nodes for handling EVM queries
- Adjust some noisy logs
- Improvements to data sync to prep for 1.1
- Fix bug with genesis account loading
- Tech to let us load production state into dev test networks
- Storage relocated to outside of the docker container

**JSON RPC:**

Note we have made several updates already without full restarts.  Here are the improvements that are new today:

- Fix transaction receipt API which causes failure on `tx.wait()` in hardhat and other tools
- Update `getCode` API to return `0x` for non-contract accounts so that Metamask will interpret SHM transfers correctly
- Fix block timestamp bug in `getBlockByNumber` API
- Use receipt status field as `0x0` or `0x1`
- Use `to: null` in transaction receipt for contract create transactions

**Explorer:**

- Major perf improvements
- Underlying database switched
- Data gathering worker split into separate processes.
- Multiple Explorer server processes that are load balanced

**Deploy tool:**

- Support for multiple AWS networks. (so we can have dev test and staging networks running on AWS as well)

**Known issues:**

- Some reports of people not getting SHM for a tweet.  If you get this please submit a bug report that lists your tweet and we will fix it
- If you speed up or cancel a transaction in metamask it will cause a double transfer.  This is because “gas bribing” is not possible in Shardeum and it gets interpreted as a second transaction.  We will have this fixed in liberty 1.1
