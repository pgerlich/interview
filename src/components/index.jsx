import React from 'react';
import {render} from 'react-dom';

import InterviewPageComponent from './interviewPage/interviewPage.jsx';

class App extends React.Component {

    render () {
        return (
            <div>
                <InterviewPageComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));