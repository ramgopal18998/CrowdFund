import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance  = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x0bF0B6bDdE7Ee7a62CFfd9B7f6e35364B44FEcBd');
export default instance;
