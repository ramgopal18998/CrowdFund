import React , {Component} from 'react';
import {Button , Form, Message, Input} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';// this will re render the page once the transaction is complete
class ContributeForm extends Component {

state = {
  value:'',
  loading:false,
  errorMessage:'',
  updateContribution: 0
}
onSubmit = async event => {
  const val = this.state.value;
  this.setState({loading:true,errorMessage:''});
  event.preventDefault();
  console.log(this.props.address);
  const campaign = Campaign(this.props.address);
  try{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    await campaign.methods.contribute().send({
      from:accounts[0],
      value:web3.utils.toWei(this.state.value,'ether')
    });
    this.setState({updateContribution:val});
    Router.replaceRoute(`/campaigns/${this.props.address}`);//replace route will not create stack like oushRoute does

  }
  catch(err)
  {
    this.setState({errorMessage:err.message});
  }
  this.setState({loading:false});
};
  render()
  {
    return (
      <div>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
          <label>Amount to Contribute</label>
          <Input label="ether" labelPosition="right" value={this.state.value} onChange={event => this.setState({value:event.target.value})} />
        </Form.Field>
        <Message error header="Oops!!" content={this.state.errorMessage}/>
        <Button primary loading={this.state.loading} >
          Contribute
        </Button>

      </Form>
      <h4>you have contributed  {eval(this.props.sum) + eval(this.state.updateContribution) } ether</h4>
        </div>
    );
  }
}
export default ContributeForm;
