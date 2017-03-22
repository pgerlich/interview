import React from 'react';

import QuestionComponent from './question.jsx';
import AnswerComponent from './answer.jsx';
import HintComponent from './hint.jsx';

class RightHandPanelComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-area">
                <QuestionComponent/>
                <HintComponent/>
                <AnswerComponent/>
            </div>
        );
    }

}

export default RightHandPanelComponent;