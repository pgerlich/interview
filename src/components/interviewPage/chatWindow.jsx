import React from 'react';

class ChatWindowComponent extends React.Component {

    constructor(props) {
        super(props);

        this.renderMessages = this.renderMessages.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.sendMessageToPeer = this.sendMessageToPeer.bind(this);
    }

    render() {
        console.log(this.props.messages);

        return (
            <div id="chat-area">
                {this.renderMessages()}
                <input type="text" id="messageInput"></input>
                <button onClick={this.sendMessageToPeer} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Send Message</button>
            </div>
        );
    }

    // Renders the current messages
    renderMessages(){
        let renderedMessages = [];
        for(let i = 0; i < this.props.messages.length; i++){
            renderedMessages.push(this.renderMessage(this.props.messages[i], i));
        }

        return renderedMessages;
    }

    // Renders a single message
    renderMessage(message, key){
        return (
            <p key={key}>{message[0]}:{message[1]}</p>
        );
    }

    sendMessageToPeer(){
        let message = document.getElementById('messageInput').value;
        this.props.onSendMessage(message);
    }
}

export default ChatWindowComponent;