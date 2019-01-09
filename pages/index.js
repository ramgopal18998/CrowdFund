import React,{Component} from 'react';
import factory from '../ethereum/factory';
import { Card ,Button,Image} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
import web3 from '../ethereum/web3';
class CampaignIndex extends Component{
  static async getInitialProps()
  {
    ///console.log("fjdod");
    //this is a life cycle method of next.js which is used at server side rendering. componentDidMount doesnt work on server side
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {campaigns};//it will turn into props.
  }
  
  renderCampaigns()
  {
    const items = this.props.campaigns.map(address => {
      return {
      header:address,
      description:(<Link route = {`/campaigns/${address}`}><a style={{fontWeight:"bold"}}>View Campaign</a></Link>),
      fluid:true
      };
    });
    return <Card.Group  items={items} />;
  }
  render()
  {
    return <div>
    <Layout>
    <Image src='https://cdn-images-1.medium.com/max/1200/1*4avGFQupOzyxHA5YaKD9OA.jpeg' style={{height:"400px"}} fluid />
      <Link route="/campaigns/new">
        <a>
        <Button floated="right" style = {{marginTop:"60px"}} content="Create Campaign"
                icon = "add circle"
                primary
         />
        </a>
      </Link>
      <h3>View Campaigns</h3>
    {this.renderCampaigns()}

     </Layout>
    </div>;
  }
}


export default CampaignIndex;
