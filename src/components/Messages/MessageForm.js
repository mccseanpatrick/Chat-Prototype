import React from 'react';
import '../../Styles/Messages.css';

class MessageForm extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            message : ""
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    onSubmit = async event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.message);
        this.setState({
            message: ""
        });
    }

    render(){
        return(
            <div className="messageForm">
                <div className="textContainer">
                    <input type="text" id="message" placeholder="Put Message Here" value={this.state.message} onChange={this.handleChange}></input>
                </div>
                <div className="submitContainer">
                    <input type="submit" value="Send" onClick={this.onSubmit}></input>
                </div>
            </div>
        );           
    }  
}

export default MessageForm