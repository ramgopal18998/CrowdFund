const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor
// instance creation of web3.
//infura is a API that gives a access to the node running in the rinkeby network
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
web3 = new Web3(ganache.provider());//to tell the web3 about network
//web3 acts as a bridge between to connect to network
let accounts;
let factory;
let campaign;
let campaignAddress;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  //console.log(accounts);
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
          .deploy({data:compiledFactory.bytecode})
          .send({from: accounts[0],gas:'1000000'});
    await factory.methods.createCampaign('100').send({from:accounts[0],gas:'1000000'});
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    console.log(campaignAddress);
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);
});



describe("tests",() => {
  it("deploys campaign and factory",() => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address)

  });
  it("checks for contributer" ,async() => {
    await campaign.methods.contribute().send({from:accounts[1],value:'1000'});
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
  });
  it("checks for create request",async () => {
    await campaign.methods.createRequest("good",'100',accounts[1]).send({from:accounts[0],gas:'1000000'});
    const req = await campaign.methods.requests(0).call();
    assert("good",req.description);
  });
});
