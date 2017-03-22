import React from 'react';

import VideoFeedsComponent from './rightHandPanel/videoFeeds.jsx';
import QuestionAreaComponent from './rightHandPanel/questionArea.jsx';

class RightHandPanelComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right-hand-panel">
                <VideoFeedsComponent />
                <QuestionAreaComponent />
            </div>
        );
    }

}

export default RightHandPanelComponent;