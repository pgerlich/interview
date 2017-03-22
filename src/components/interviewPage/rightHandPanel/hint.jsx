import React from 'react';

class HintComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Hints</h3>
                <ul>
                    <li>Hint 1</li>
                    <li>Hint 2</li>
                    <li>Hint 3</li>
                </ul>
            </div>
        );
    }

}

export default HintComponent;