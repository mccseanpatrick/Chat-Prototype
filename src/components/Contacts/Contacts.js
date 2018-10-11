import React from "react";
import '../../Styles/Contacts.css';
import Contact from "./Contact"

export default class Contacts extends React.Component{
    constructor(){
        super();
        this.state = {
            message : "Text"
        }
    }

    render(){
        const conts = ["Sean", "Rajkumar", "Ron"];
        const contacts = conts.map((contact) => <Contact name = {contact}/>)
        return(
            <div className="contacts">
                <div className="contactsHeader">
                    Contacts
                </div>
                <div className="contactsContainer">
                    {contacts}
                </div>
            </div>
        );           
    }  
}