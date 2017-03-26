import React from 'react';

class HintComponent extends React.Component {

    constructor(props) {
        super(props);

        this.renderHints = this.renderHints.bind(this);
        this.showHint = this.showHint.bind(this);

        this.state = {
            'visibleHints': new Array(this.props.hints.length)
        };
    }

    render() {
        return (
            <div>
                <h3 className="hint-title">Hints</h3>
                <ul>
                    {this.renderHints()}
                </ul>
            </div>
        );
    }

    renderHints(){
        let hints = [];

        for(let i = 0; i < this.props.hints.length; i++){
            let id = "hint-" + i;
            let hint;

            if (this.state.visibleHints[i] === true) {
                hints.push(<li key={i} onClick={this.showHint} id={id}>{this.props.hints[i]}</li>)
            } else {
                hints.push(<li key={i} onClick={this.showHint} className="hint-item" id={id}>Show hint {i}</li>);
            }
        }

        return hints;
    }

    showHint(event){
        let hintId = event.target.id;
        let hintIndex = hintId.replace("hint-", "");

        let visibleHints = this.state.visibleHints;
        visibleHints[hintIndex] = true;

        this.setState({'visibleHints': visibleHints});
    }

}

export default HintComponent;