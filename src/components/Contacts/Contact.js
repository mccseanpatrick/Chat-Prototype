import React from "react";
import '../../Styles/Contacts.css';

function Contact(props){
    return(    
        <div className="contact">
            {props.name}
        </div>);
}

export default Contact