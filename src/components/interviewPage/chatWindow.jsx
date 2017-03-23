import React from 'react';

class ChatWindowComponent extends React.Component {

    constructor(props) {
        super(props);

        this.renderMessages = this.renderMessages.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.sendMessageToPeer = this.sendMessageToPeer.bind(this);
    }

    render() {
        return (
            <div className="chat-area">
                <div className="chat-message-area">
                    {this.renderMessages()}
                </div>
                <div className="chat-input-area">
                    <input type="text" id="messageInput" onKeyDown={this.sendMessageToPeer} className="chat-input mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone no-margin"></input>
                    <button onClick={this.sendMessageToPeer} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored chat-button mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-cell--3-col-phone no-margin">Send Message</button>
                </div>
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
            <p key={key}>
                {message[0]} : {message[1]}
            </p>
        );
    }

    sendMessageToPeer(e){
        console.log(e.which);

        // Mouseclick event or 'Enter' keydown
        if (!e.which || (e.which && e.which == 13)) {
            let message = document.getElementById('messageInput').value;
            this.props.onSendMessage(message);

            document.getElementById('messageInput').value = '';
        }
    }
}

export default ChatWindowComponent;