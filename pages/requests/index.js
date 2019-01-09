//things i learnt wasting 4 hrs .
// 1. you can call only return functions in initialprops.it doesnt contain any accounts in initial getInitialProps
//msg.sender will not work if you send from initialprops as it is server side rendering.
//if you want any address info go for componentDidMount though it may take some time to execute
import React , {Component} from 'react';
import Layout from '../../components/Layout';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../routes';
import Campaign from '../../ethereum/campaign';
import RequestRow from '../../components/RequestRow';
class ShowRequests extends Component{
  static async getInitialProps(props)
  {
    const {address}  = props.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    console.log("requestsCount");
    //we cannnot call all requests at once as it is struct type. so we have to call one by one,first by taking the requests approvalCount
    //we create an empty requestsCount size array suing fill then map each element with the request
    // const requests = await Promise.all(
    //   Array(requestsCount).fill().map((element,index) => {
    //               return campaign.methods.requests(index).call();
    //             })
    // );
    const requests = [];
    for(let i=0;i<requestsCount;i++)
    {
      const request = await campaign.methods.requests(i).call();
      requests.push(request);
    }
    return {address , requests, requestsCount, approversCount};
  }

  renderRows()
  {
    return this.props.requests.map((request,index) => {
      return <RequestRow
          request={request}
          key = {index}
          id={index}
          address={this.props.address}
          approversCount = {this.props.approversCount}
       />
    });
  }
  render()
  {
    const {Header,Row,HeaderCell,Body} = Table;
    return (
      <Layout>
        <Link route = {`/campaigns/${this.props.address}/requests/new`}>
          <a>
          <Button primary floated="right" style={{marginBottom:"20px"}}>
              Create Request
          </Button>
          </a>
        </Link>
        <h3>View Requests</h3>
        <Table>
            <Header>
                  <Row>
                      <HeaderCell>ID</HeaderCell>
                      <HeaderCell>Description</HeaderCell>
                      <HeaderCell>Amount</HeaderCell>
                      <HeaderCell>Recipient</HeaderCell>
                      <HeaderCell>Approval Count</HeaderCell>
                      <HeaderCell>Approve</HeaderCell>
                      <HeaderCell>Finialize</HeaderCell>
                  </Row>

            </Header>
                <Body>
                  {this.renderRows()}
                </Body>
        </Table>
        <h4>There are total of {this.props.requestsCount} of requests</h4>
      </Layout>
    );
  }
}
export default ShowRequests;
