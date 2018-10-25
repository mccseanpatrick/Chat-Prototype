import React from 'react';
import '../../Styles/Messages.css';

function Messages(props){
    console.log(props.messages);
    const messageItems = props.messages.map((message, index) =>
        <li key={index}>{message.content}</li>
    );
    return (
        <div className="messages">
            {messageItems}
        </div>
    )
}

export default Messages