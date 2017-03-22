import React from 'react';
import firebase from 'firebase';
import Firepad from 'firepad';

class CodePadComponent extends React.Component {

    constructor(props) {
        super(props);

        this.updateLanguage = this.updateLanguage.bind(this);

        this.state = {
            theme: 'github',
        };

        let config = {
            apiKey: "AIzaSyA05dQk450VhXGevMWwe-JkSthGgzWjfJQ",
            authDomain: "interviewprep-27c6a.firebaseapp.com",
            databaseURL: "https://interviewprep-27c6a.firebaseio.com",
            storageBucket: "interviewprep-27c6a.appspot.com",
            messagingSenderId: "753647647096"
        };

        firebase.initializeApp(config);
    }

    // Ensure editor syntax updates
    componentWillReceiveProps(nextProps) {
        if ( nextProps.mode != this.props.mode ){
            this.state.codeEditor.getSession().setMode("ace/mode/" + nextProps.mode);
        }
    }

    // Setup tabs and firepad real time editing
    componentDidMount() {
        //// Get Firebase Database reference.
        const firepadRef = this.generateDBRef();

        // Setup code editor
        const editor = ace.edit("textEditor");
        editor.setTheme("ace/theme/monokai");

        const session = editor.getSession();
        session.setMode("ace/mode/" + this.props.mode);

        this.setState({'codeEditor': editor});

        //// Create Firepad.
        Firepad.fromACE(firepadRef, editor, {
            defaultText: '// Are you ready for tech?\nfunction getReady() {\n  var response = "HECK YEAH!";\n  console.log(response);\n}'
        });
    }

    // Update the syntax language
    updateLanguage(e) {
        const newLanguage = e.target.value;
        this.props.updateLanguage(newLanguage);
    }

    // Generate a DB hash for real time editing
    generateDBRef() {
        // Grab firebase ref
        const ref = firebase.database().ref();

        // use roomId as unique identifier, grab database entry for this room's text
        return ref.child(this.props.roomId);
    }

    render() {
        return (
            <div className="code-pad">
                <select value={this.props.mode} onChange={this.updateLanguage} className="toolbar">
                    <option value="java">Java</option>
                    <option value="c_cpp">C/C++</option>
                    <option value="javascript">JS</option>
                    <option value="python">Python</option>
                </select>

                <div id="textEditor" className="textEditor"></div>
            </div>
        );
    }

}

export default CodePadComponent;