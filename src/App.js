import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from 'react-apollo';
import * as AWS from 'aws-sdk';
import AppSync from './aws-exports.js';
import AllMessageQuery from './Queries/AllMessagesQuery';
import NewMessageMutation from './Queries/NewMessageMutation';
import MessagePage from './Messages/MessagePage';

const client = new AWSAppSyncClient({
  url: "https://72xxor3x75ce3ftnyh45be5gam.appsync-api.us-east-2.amazonaws.com/graphql",
  region: "us-east-2",
  auth: {
      type: AUTH_TYPE.API_KEY,
      apiKey: "da2-pplgihcixbdcplqoujzyk2xot4",
      // type: AUTH_TYPE.AWS_IAM,
      // //Note - Testing purposes only
      // credentials: new AWS.Credentials({
      //     accessKeyId: "AKIAJIL2C34UMNBK3E7A",
      //     secretAccessKey: "$0@OG8UrMQ6K"
      // })

      // Amazon Cognito Federated Identities using AWS Amplify
      //credentials: () => Auth.currentCredentials(),

      // Amazon Cognito user pools using AWS Amplify
      // type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      // jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});


class App extends Component {
  render() {
    let fakeMessages = ["1", "2", "3"]
    return (
        <div className="container">
            <div className="nav-bar">
                The Loud ( Chat Prototype )
            </div>
            <div className="chatContainer">
                <div className="contactsPanel">
                    <ul>
                        <li>C1</li>
                        <li>C2</li>
                        <li>C3</li>
                        <li>C4</li>
                    </ul>
                </div>
                <div className="chatPanel">
                    <MessagePage messages = {fakeMessages}/>
                </div>
            </div>
        </div>
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
