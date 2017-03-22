import React from 'react';

class AnswerComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // TODO: Renders based on current role
        return (
            <div>
                <h3>Answer</h3>
                <blockquote>The answer</blockquote>
            </div>
        );
    }

}

export default AnswerComponent;