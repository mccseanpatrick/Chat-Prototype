import React from 'react';

function MessagePage(props){
    const messages = props.messages;
    const messageItems = messages.map((message) =>
    <li>{message}</li>
    );
    return (
        <ul>{messageItems}</ul>
    );
}

export default MessagePage