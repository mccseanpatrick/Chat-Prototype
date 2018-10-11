import React from "react";
import '../../Styles/Conversations.css';

function Conversation(props){
    return(    
        <div className="conversation">
            {props.name}
        </div>);
}

export default Conversation