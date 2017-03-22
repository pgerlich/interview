import React from "react";
import ChatWindowComponent from "./chatWindow.jsx";
import CodePadComponent from "./codePad.jsx";
import RightHandPanelComponent from "./rightHandPanel.jsx";
import SimpleWebRTC from "simplewebrtc";

class InterviewPageComponent extends React.Component {

    constructor(props) {
        super(props);

        this.messageReceived = this.messageReceived.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateLanguage = this.updateLanguage.bind(this);

        this.state = {
            'joinedRoom': false,
            'interviewInProgress': true,
            'currentLanguage': 'javascript',
            'messages': []
        }
    }

    /// Handle video/audio/data streams
    componentDidMount() {
        // Instantiate webRTC
        this.webRtc = new SimpleWebRTC({
            localVideoEl: 'localVideoStream',
            remoteVideosEl: 'remoteVideoStream',
            enableDataChannels: true,
            adjustPeerVolume: true,
            autoRequestMedia: true
        });

        // TODO: Dynamic roomID from the URL
        const roomId = 'prep4tech_id';

        // Setup room joining + message handling logic
        if ( !this.state.joinedRoom ) {
            this.webRtc.on('readyToCall', () => {

                this.webRtc.joinRoom(roomId);

                this.webRtc.connection.on('message', (payload) => {
                    switch (payload.type) {
                        case 'endOfCandidates':
                            this.webRtc.sendToAll('userInfo', {
                                'userId': this.props.user.id,
                                'username': this.props.user.firstname
                            }); // Fire off user info to peer
                            this.setState({'connectionReady': true});
                            break;
                        case 'userInfo':
                            this.setState({'peerId': payload.payload.userId, 'peerName': payload.payload.username}); // Store user info from peer
                            break;
                        case 'roleSwitch':
                            var weAreInterviwer = payload.payload.youAreInterviewer;

                            if (weAreInterviwer) {
                                this.getProblem(this.state.theirQuestion);
                            } else {
                                this.getProblem(this.state.ourQuestion);
                            }

                            this.setState({'weAreInterviewer': weAreInterviwer});
                            break;
                        case 'endInterview':
                            this.setState({'interviewInProgress': false});
                            break;
                        case 'switchLanguage':
                            this.setState({'currentLanguage': payload.payload.language});
                            break;
                        case 'chatMessage':
                            this.messageReceived(payload.payload.sender, payload.payload.message);
                            break;
                    }
                });
            });

            this.setState({'joinedRoom':true});
        }
    }

    /// Update local state with received message
    messageReceived(sender, message){
        let messages = this.state.messages;
        messages.push([sender, message]);

        this.setState({'messages': messages});
    }

    // Sends a message to peer via webRTC
    sendMessage(message){
        // Send to partner
        this.webRtc.sendToAll('chatMessage',
            {
                'sender': 'other',
                'message': message
            });

        // Update local state
        let messages = this.state.messages;
        messages.push(['myself', message]);
        this.setState({'messages': messages})
    }

    /// Update the current language for syntax highlighting
    updateLanguage(newLanguage){
        this.webRtc.sendToAll('switchLanguage',
            {
                'language': newLanguage
            })
        this.setState({'currentLanguage': newLanguage});
    }

    /// Render the whole interview page
    render() {
        return (
            <div className="content-grid mdl-grid interview-page">
                <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone no-margin">
                    <CodePadComponent
                        roomId="test"
                        mode={this.state.currentLanguage}
                        updateLanguage={this.updateLanguage}/>

                    <ChatWindowComponent
                        webRTC={this.webRtc}
                        messages={this.state.messages}
                        onSendMessage={this.sendMessage}/>
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone no-margin">
                    <RightHandPanelComponent />
                </div>
            </div>
        );
    }

}

export default InterviewPageComponent;