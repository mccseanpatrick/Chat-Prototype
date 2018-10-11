import React, { Component } from "react";
import Contacts from '../components/Contacts/Contacts';
import Conversations from '../components/Conversations/Conversations';
import "../Styles/SideContainer.css"

export default class SidePanel extends Component {
    render() {
      let fakeMessages = ["1", "2", "3"]
      return (    
          <div className="SideContainer">
                  <Contacts/>
                  <Conversations/>
          </div>
      );
    }
  }