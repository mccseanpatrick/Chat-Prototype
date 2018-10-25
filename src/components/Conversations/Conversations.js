import React from "react";
import '../../Styles/Conversations.css';
import Conversation from "./Conversation"
import GetConversations from "../../Queries/GetConversations";
import {graphql} from "react-apollo";

const CONVERSATION_COUNT = 5;

class Conversations extends React.Component{
    constructor(){
        super();
        this.state = {
            message : "Text"
        }
    }

    render(){
        if (this.props.loading) return <div>Loading...</div>
        const convos = this.props.conversations.map((convo, index) => <Conversation id={convo.conversation.id} name = {convo.conversation.name} key = {index} handleSelectConversation = {this.props.handleSelectConversation}/>)
        return(
            <div className="conversations">
                <div className="conversationsHeader">
                    Conversations
                </div>
                <div className="conversationsContainer">
                    {convos}
                </div>
            </div>
        );           
    }  
}

export default graphql(GetConversations,  {
    options: (props,) => ({
        fetchPolicy: 'cache-and-network',
        variables: {
            first: CONVERSATION_COUNT,
            after: null,
        },
    }),
    props: (props,) => {
        const nextToken = props.data.nextToken;
        return {
            loading: props.data.loading,
            data: props.data,
            conversations: props.data.me.conversations.userConversations,
            fetchMoreStuff: () => {
                return props.data.fetchMore({
                    variables: {
                        first: CONVERSATION_COUNT,
                        nextToken,
                    }
                })
            }
        }
    },
})(Conversations)