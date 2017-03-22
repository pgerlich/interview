import React from 'react';

class VideoFeedsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.renderVideoContent = this.renderVideoContent.bind(this);
    }

    render() {
        return (
            this.renderVideoContent()
        );
    }

    // Render video/audio stream
    renderVideoContent(){
        return (
            <div className="video-feeds">
                <div className="localVideo">
                    <video id="localVideoStream"></video>
                </div>
                <div className="remoteVideo" id="remoteVideoStream"></div>
            </div>
        );
    }

}

export default VideoFeedsComponent;