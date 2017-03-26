import React from "react";

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="mdl-mini-footer footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">&copy; Prep4.Tech 2017</div>
                    <ul className="mdl-mini-footer__link-list">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy & Terms</a></li>
                    </ul>
                </div>
            </footer>
        );
    }

}

export default FooterComponent;