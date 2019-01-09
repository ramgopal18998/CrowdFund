const Web3 = require('web3');

//truffle is act as a provider for the real rinkeby network and also deals with the mnemonic
const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
      "month journey senior only unlock maid foil suffer tonight front degree menu",
      "https://rinkeby.infura.io/v3/679a0676c1c2485aaa2ebd5fa02a4ab8"
);

web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  const results = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                  .deploy({data:'0x'+compiledFactory.bytecode})
                  .send({from:accounts[0],gas:'1000000'});
  console.log("deployed at",results.options.address);
  console.log('attempting to deploy from',accounts[0]);
  //address 0x69dd3b0e9F7bd9Ec78E4879367Aa452205B72180


};
deploy();
