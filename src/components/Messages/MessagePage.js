import React from 'react';
import '../../Styles/Messages.css';
import Messages from './Messages'
import MessageForm from './MessageForm'

function MessagePage(props){
    return (
        <div className="chatPanel">
            <div className="convoHeader">
                Conversation with Sean
            </div>
            <div className="messagesContainer">
                <Messages/>
                <MessageForm/>
            </div>
        </div>
    );
}

export default MessagePage