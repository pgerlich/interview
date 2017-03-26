import React from 'react';

class AnswerComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // TODO: Renders based on current role
        return (
            <div>
                <h3 className="question-title">Answer</h3>
                <blockquote>{this.props.answer}</blockquote>
            </div>
        );
    }

}

export default AnswerComponent;