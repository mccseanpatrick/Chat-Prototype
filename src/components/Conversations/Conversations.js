import React from "react";
import '../../Styles/Conversations.css';
import Conversation from "./Conversation"

export default class Conversations extends React.Component{
    constructor(){
        super();
        this.state = {
            message : "Text"
        }
    }

    render(){
        const conts = ["Conversation with Sean", "Rajkumar", "Ron"];
        const contacts = conts.map((contact) => <Conversation name = {contact}/>)
        return(
            <div className="conversations">
                <div className="conversationsHeader">
                    Conversations
                </div>
                <div className="conversationsContainer">
                    {contacts}
                </div>
            </div>
        );           
    }  
}