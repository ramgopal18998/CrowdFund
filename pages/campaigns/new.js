import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form , Button , Input, Message } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js';
import factory from '../../ethereum/factory.js';
// we use next-routes depenency for dynamic routing
import {Router} from '../../routes';//Router helps to redirect to any page. it comes with next-routes
class CampaignNew extends Component {
 state = {
    minimumContribution:'',
    errorMessage:'',
    loading:false
 };
 onSubmit = async(event) =>{
    event.preventDefault();
    this.setState({loading:true, errorMessage:""});
    try{
      const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(this.state.minimumContribution).send({from:accounts[0]});
    Router.pushRoute('/');//redirect
  }catch(err)
  {

    this.setState({loading:false,errorMessage:err.message});

  }


 };
  render(){
    // by default semantic leaves message tag. in order to show the error message give the error property to form
    return (
      <div>

      <Layout>
      <h3>Create a New Campaign!</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
      <label>minimum Contribution</label>
      <Input label="wei" labelPosition="right" value={this.state.minimumContribution} onChange = {e => this.setState({minimumContribution:e.target.value})} />
      </Form.Field>
      <Message error header="Oops!" content={this.state.errorMessage} />
      <Button primary loading={this.state.loading}>
        Create!
      </Button>
      </Form>
      </Layout>
      </div>
    );
  }
}

export default CampaignNew;
