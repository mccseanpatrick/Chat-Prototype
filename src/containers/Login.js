import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../Styles/Login.css";
import { Auth as AWSAuth, } from 'aws-amplify';
import {graphql} from "react-apollo";
import CreateUser from "../Mutations/CreateUserMutation"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
        await AWSAuth.signIn(this.state.username, this.state.password);
        this.props.userHasAuthenticated(true);
        this.props.createUser(this.state);
        this.props.history.push("/chat");
    } catch (e) {
        alert(e.message);
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default graphql(CreateUser, {
  options: (props,) => ({
      fetchPolicy: 'no-cache',
  }),
  props: (props,) => ({
      createUser: (user) => {
          props.mutate({
              variables: user
          })
      }
  })
})(Login);