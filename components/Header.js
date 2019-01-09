import React from 'react';
import {Menu } from 'semantic-ui-react';
import {Link} from '../routes';
//menu.item is replaced with link tag because both styles overlap. so instead of menu.item we can use a tag with classname item inside link
export default () => {
  return (
    <Menu style={{marginTop: "30px"}}>
    <Link route="/"><a className="item" style={{backgroundColor:"blue", fontWeight:"bold",fontSize:"16px"}}>Crowdcoin</a></Link>
    <h2 style={{paddingLeft:"250px",fontFamily:"cursive"}}>WHERE IDEAS COME INTO EXISTENCE</h2>
    <Menu.Menu position="right">
      <Link route="/"><a className="item" style={{backgroundColor:"blue", fontWeight:"bold"}}>Campaigns</a></Link>
      <Link route="/campaigns/new"><a className="item" style={{backgroundColor:"orange",fontWeight:"bold",fontSize:"20px"}}>+</a></Link>
    </Menu.Menu>
    </Menu>
  );
};
