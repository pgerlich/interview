import React from "react";

class NavBarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header nav-bar">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Title</span>
                        <div className="mdl-layout-spacer"></div>
                        <div>Hello, {this.props.firstName}</div>
                        <i className="material-icons display-avatar">account_circle</i>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Prep4Tech</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Home</a>
                        <a className="mdl-navigation__link" href="" onClick={this.props.showInterviewPage}>Schedule</a>
                        <a className="mdl-navigation__link" href="">Ranks</a>
                        <a className="mdl-navigation__link" href="">Profile</a>
                        <a className="mdl-navigation__link" href="">Log Out</a>
                    </nav>
                </div>
            </div>
        );
    }

}

export default NavBarComponent;