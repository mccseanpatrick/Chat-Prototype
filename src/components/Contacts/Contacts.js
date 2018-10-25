import React from "react";
import '../../Styles/Contacts.css';
import Contact from "./Contact"
import AllUsers from "../../Queries/AllUsers";
import {graphql} from "react-apollo";

class Contacts extends React.Component{
    constructor(){
        super();
        this.state = {
            message : "Text"
        }
    }

    render(){
        if (this.props.loading) return <div>Loading...</div>
        const contacts = this.props.users.map((contact, index) => <Contact name = {contact.username} handleSelect = {this.props.handleSelect} key = {index}/>)
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

export default graphql(AllUsers, {
    options: (props,) => ({
        fetchPolicy: 'no-cache',
    }),
    props: (props,) => ({
            loading: props.data.loading,
            users: props.data.allUser
        }
    )
})(Contacts)