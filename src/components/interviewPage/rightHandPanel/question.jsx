import React from 'react';

class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <h3 className="question-title">{this.props.title}</h3>
                <blockquote>{this.props.text}</blockquote>
            </div>
        );
    }

}

export default QuestionComponent;