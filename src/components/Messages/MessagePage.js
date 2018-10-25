import React from 'react';
import '../../Styles/Messages.css';
import Messages from './Messages';
import MessageForm from './MessageForm';
import {graphql} from "react-apollo";
import GetConversationMessages from "../../Queries/GetConversationMessages";

function MessagePage(props){
    if (props.loading) return <div>Loading...</div>
    return (
        <div className="chatPanel">
            <div className="convoHeader">
                Conversation with {props.selectedUser}
            </div>
            <div className="messagesContainer">
                <Messages messages={props.messages}/>
                <MessageForm handleSubmit = {props.handleSubmit}/>
            </div>
        </div>
    );
}

export default graphql(GetConversationMessages, ({
    options: (props,) => ({
        fetchPolicy: 'cache-and-network',
        variables: {
            conversationId: "1",
        }
    }),
    props: (props,) => ({
        loading: props.data.loading,
        messages: props.data.allMessageConnection.messages,
    })
}))(MessagePage)