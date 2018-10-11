import React, { Component } from "react";
import MessagePage from '../components/Messages/MessagePage';
import SidePanel from './SidePanel';

export default class Home extends Component {
  render() {
    return (    
        <div className="app-container">
            <div className="nav-bar">               
                The Loud ( Chat Prototype )
            </div>
            <div className="chatContainer">
                <SidePanel/>
                <MessagePage/>
            </div>
        </div>
    );
  }
}