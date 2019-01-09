import React , {Component} from 'react';
import {Table, Button}   from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
class RequestRow extends Component {
  state = {

    loading_approve:false,
    loading_finalize:false,
    didApprove:false,
    final:false

  }
  async componentDidMount()
  {
    console.log("status");
    const campaign = Campaign(this.props.address);
    const account = await web3.eth.getAccounts();
    console.log(account);
    const status = await campaign.methods.checkApproval(account[0],this.props.id).call();
    const manager = await campaign.methods.manager().call();
    if(account[0] == manager)
    {
      this.setState({final:true});
    }
    this.setState({didApprove:status});
  }
  approveRequest = async () => {
    this.setState({loading_approve:true});
    try{
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({from:accounts[0]});
    this.setState({didApprove:true});
  }
  catch(err)
  {

  }
  this.setState({loading_approve:false});

}
  finializeRequest = async () => {
    this.setState({loading_finalize:true});
    try{
    console.log("sdf");
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({from:accounts[0]});
    console.log("good");
  }
  catch(err)
  {
  //  this.setState({errorMessage:err.message});
  }
  this.setState({loading_finalize:false});
  }
  renderApprove()
  {
    if(!this.state.didApprove)
    {
      return (
        <Button basic color="green" onClick= {this.approveRequest} loading={this.state.loading_approve}>
            Approve
        </Button>
      );
    }
    else {
      return(
        <Button basic color="green" >
            Approved
        </Button>
      );
    }
  }
  render()
  {
    const {Row,Cell} = Table;
    const {id,request,approversCount} = this.props;
    const readyTofinalize = request.approvalCount > approversCount/2;
    return (
      <Row disabled={request.complete} positive={readyTofinalize && !request.complete} >
          <Cell>{id}</Cell>
          <Cell>{request.description}</Cell>
          <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
          <Cell>{request.recipient}</Cell>
          <Cell>{request.approvalCount}/{approversCount}</Cell>
          <Cell>
            {request.complete ? null:(
              <div>

            {this.renderApprove()}
              </div>
            )}
            </Cell>
            <Cell>
            {request.complete ? null:(
              <div>

            <Button disabled={!this.state.final} color="teal" basic onClick={this.finializeRequest} loading={this.state.loading_finalize}>Finialize</Button>
              </div>
          )}
          </Cell>
      </Row>
    );
  }
}
export default RequestRow;
