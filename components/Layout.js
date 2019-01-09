import React from 'react';
import Header from './Header';
import Head from 'next/head';
import {Container} from 'semantic-ui-react';
export default props => {
  return(
    <div style={{backgroundColor:"#F0F0F0"}}>
    <Container>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <Header>

    </Header>
      {props.children}
    </Container>
    </div>
  );
}
