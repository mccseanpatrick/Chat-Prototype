import React, { Component } from "react";
import Contacts from '../components/Contacts/Contacts';
import Conversations from '../components/Conversations/Conversations';
import "../Styles/SideContainer.css"

export default class SidePanel extends Component {
    render() {
      return (    
          <div className="SideContainer">
                  <Contacts users = {this.props.users} handleSelect = {this.props.handleSelect}/>
                  <Conversations handleSelectConversation = {this.props.handleSelectConversation}/>
          </div>
      );
    }
  }