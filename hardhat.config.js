require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity:"0.8.18",
    networks:{
        hardhat:{
            forking:{
                url:"https://mainnet.infura.io/v3/65790afd71b647c68bc0ebfdf1ddf708"
            }
        }
    }
}