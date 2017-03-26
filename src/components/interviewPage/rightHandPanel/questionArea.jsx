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
                <QuestionComponent
                    title="This is a question"
                    text="Here is a question for you"/>
                <HintComponent
                    hints={['list','of','hints']}/>
                <AnswerComponent
                    answer="Here is the answer"/>
            </div>
        );
    }

}

export default RightHandPanelComponent;