import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
   web3 = new Web3(window.web3.currentProvider);//if only metamask is used,this works
}
else {
  //metamask is not there or ir is rendered on next server. we have to create our own provider
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/679a0676c1c2485aaa2ebd5fa02a4ab8  '
  );
  web3 = new Web3(provider);

}
export default web3;
