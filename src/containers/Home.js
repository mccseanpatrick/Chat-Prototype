import React, { Component } from "react";
import MessagePage from '../components/Messages/MessagePage';
import SidePanel from './SidePanel';
import CreateMessage from "../Mutations/CreateMessage";
import { graphql, compose } from 'react-apollo';


class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectConversation = this.handleSelectConversation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            users: ["Rajkumar", "Ron"], 
            selectedUser: "",
            messages: ["1", "2", "3"],
            conversationId: "1",
        };
    }

    handleSelect = user => e => {
        this.setState({selectedUser:user.name});
        //Create Conversation if none
    }

    handleSelectConversation = conversation => e => {
        this.setState({conversationId:conversation.id});
    }

    handleSubmit = message => {
        var newArray = this.state.messages.slice();    
        newArray.push(message);   
        this.setState({messages:newArray});
        const message2 = {
            conversationId: this.state.conversationId,
            createdAt: Date.now().toString(),
            content: message,
            id: 2,           
        };
        this.props.createMessage(message2);
        console.log(message2);
    }

    render() {
        return (    
            <div className="app-container">
                <div className="nav-bar">               
                    The Loud ( Chat Prototype )
                </div>
                <div className="chatContainer">
                    <SidePanel users = {this.state.users} handleSelect={this.handleSelect} handleSelectConversation={this.handleSelectConversation}/>
                    <MessagePage conversationId = {this.state.conversationId} handleSubmit = {this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

export default graphql(CreateMessage, {
    options: (props,) => ({
        fetchPolicy: 'no-cache',
    }),
    props: (props,) => ({
        createMessage: (messageInfo) => {
            props.mutate({
                variables: messageInfo
            })
        }
    })
})(Home)