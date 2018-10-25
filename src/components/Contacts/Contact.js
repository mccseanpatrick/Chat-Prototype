import React from "react";
import '../../Styles/Contacts.css';

function Contact(props){
    return(    
        //<div className="contact">
            <input className="contact" type="submit" value={props.name} onClick={props.handleSelect(props)}/>);
        //</div>);
}

export default Contact