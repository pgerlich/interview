import React from "react";

class HomePageComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored
            chat-button mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                    Queue up
                </button>
            </div>
        );
    }

}

export default HomePageComponent;