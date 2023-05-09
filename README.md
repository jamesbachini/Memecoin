# A Fairlaunch Memecoin

This ERC20 token is based on the OpenZeppelin library. It deploys to a network with Uniswap v3 and sets up a liquidity pool depositing the entire supply in to a single sided position.

This creates a permissionless digital asset with no owner privilidges and equal rights between all parties. Everyone has the same access to the asset on Uniswap to buy/sell and speculate as they see fit.

Full tutorial at https://jamesbachini.com

```shell
npx hardhat test
npx hardhat run scripts/deploy.js --network mumbai
```
