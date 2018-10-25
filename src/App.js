import React, { Component } from 'react';
import './Styles/App.css';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from 'react-apollo';
import * as AWS from 'aws-sdk';
import AppSync from './aws-exports.js';

import AllMessageQuery from './Queries/AllMessagesQuery';
import NewMessageMutation from './Queries/NewMessageMutation';

import Routes from "./Routes";
import Amplify, {Auth}  from 'aws-amplify';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import config from './config';


const client = new AWSAppSyncClient({
  url: AppSync.aws_appsync_graphqlEndpoint,
  region: AppSync.aws_appsync_region,
  auth: {
      //Amazon Cognito user pools using AWS Amplify
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});


class App extends Component {
    constructor(){
        super();
        this.state = {
            isAuthenticated: false
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
                <Routes childProps={childProps}/>
        );
    }
}

const WithProvider = () => (
  <ApolloProvider client={client}>
      <Rehydrated>
          <App />
      </Rehydrated>
  </ApolloProvider>
);


export default WithProvider;
