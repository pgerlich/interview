import React from 'react';

class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Question Title</h3>
                <blockquote>Question text</blockquote>
            </div>
        );
    }

}

export default QuestionComponent;