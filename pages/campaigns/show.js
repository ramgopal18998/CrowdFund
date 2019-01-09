import React, {Component} from 'react';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/Layout'
import {Card,Grid,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes'
import ContributeForm from '../../components/ContributeForm';
class CampaignShow extends Component{
  static async getInitialProps(props)
  {
  const campaign = Campaign(props.query.address);//props contains a query property which contains the url part. it extracts the address part mentioned in routes
  const summary  = await campaign.methods.getSummary().call();





  return {
    address:props.query.address,
    minimumContribution:summary[0],
    balance:summary[1],
    requestsCount:summary[2],
    approversCount:summary[3],
    manager:summary[4],

  };
  }
  state = {
    sum: 0
  }
  async componentDidMount()
  {
    const campaign = Campaign(this.props.address);
    const account = await web3.eth.getAccounts();
    const total = await campaign.methods.findSum(account[0]).call();
    console.log(total);
    console.log("sum");
    const sum = web3.utils.fromWei(total,'ether');
    this.setState({sum});
  }


  renderCards()
  {
    const items = [
  {
    header: this.props.manager,
    description: 'The manager created this contract and can create request to withdraw money',
    meta: 'Manager Address',
    style:{overflowWrap:'break-word'}
  },
  {
    header: this.props.minimumContribution,
    description: 'This is the minimum contribution required to become an approver',
    meta: 'Minimimum Contibution (Wei)',
  },
  {
    header: this.props.requestsCount,
    description:
      'These are total number of request for this campaign',
    meta: 'Total Requests',
  },
  {
    header: this.props.approversCount,
    description:
      'These are total number of approvers for this campaign',
    meta: 'Total Approvers',
  },
  {
    header: web3.utils.fromWei(this.props.balance,'ether'),
    description:
      'These are total balance for this campaign',
    meta: 'Balance (in ether)',
  },
]
return <Card.Group items={items} />

  }
  render()
  {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>

          <Grid.Row>
            <Grid.Column width={10}>
                {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>

                <ContributeForm address={this.props.address} sum={this.state.sum}/>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
              <Button primary>
                View Requests
                </Button>
              </a>
            </Link>
            </Grid.Column>
            </Grid.Row>

        </Grid>
        </Layout>
    );
  }
}

export default CampaignShow;
