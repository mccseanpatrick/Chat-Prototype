import React from "react";
import '../../Styles/Conversations.css';

function Conversation(props){
    return(
        <input className="conversation" type="submit" value={props.name} onClick={props.handleSelectConversation(props)}/>
    );    
}

export default Conversation