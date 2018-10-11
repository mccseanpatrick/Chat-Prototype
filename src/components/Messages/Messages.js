import React from 'react';
import '../../Styles/Messages.css';

function Messages(props){
    let fakeMessages = ["1", "2", "3"]
    const messageItems = fakeMessages.map((message) =>
    <li>{message}</li>
    );
    return (
        <div className="messages">
            {messageItems}
        </div>
    )
}

export default Messages