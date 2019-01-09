import React, {Component} from 'react';
import {Message, Input, Form, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';
import {Link,Router} from '../../routes';
import Layout from '../../components/Layout';
class RequestNew extends Component{
  static async getInitialProps(props)
  {
    const {address}  = props.query;
    return {address};
  }
  state = {
    value:'',
    description:'',
    recipient:'',
    loading:false,
    errorMessage:''
  }


  onSubmit = async event => {
    this.setState({loading:true,errorMessage:''});
    event.preventDefault();
    console.log(this.state.description);
    console.log(this.state.value);
    console.log(this.state.recipient);
    const campaign = Campaign(this.props.address);
    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(this.state.description,web3.utils.toWei(this.state.value,"ether"),this.state.recipient).send({from:accounts[0]});

      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch(err)
    {
      this.setState({errorMessage:err.message});
    }
    this.setState({loading:false});
  };


  render()
  {
    return(
      <Layout>
        <h3>Create a Request</h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
              <Form.Field>
                  <label>Description</label>
                  <Input value={this.state.description} onChange={e => this.setState({description:e.target.value})}/>
              </Form.Field>
              <Form.Field>
                  <label>Value in ether</label>
                  <Input value={this.state.value} onChange={e => this.setState({value:e.target.value})}/>
              </Form.Field>
              <Form.Field>
                  <label>Recipient</label>
                  <Input value={this.state.recipient} onChange={e => this.setState({recipient:e.target.value})}/>
              </Form.Field>
              <Message error header="Oops!!" content={this.state.errorMessage}/>
              <Button primary loading={this.state.loading}>
                Create
              </Button>
          </Form>

      </Layout>
    );
  }
}
export default RequestNew;
