import React from 'react';
import {render} from 'react-dom';

import HomePageComponent from './homePage/homePageComponent.jsx';
import InterviewPageComponent from './interviewPage/interviewPage.jsx'

import FooterComponent from './footerComponent.jsx';
import NavBarComponent from './navBarComponent.jsx';

class App extends React.Component {

    render () {
        return (
            <div className="wrapper">
                <NavBarComponent firstName="Paul"/>
                <div className="main-content">
                    <InterviewPageComponent />
                </div>
                <FooterComponent/>

            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));