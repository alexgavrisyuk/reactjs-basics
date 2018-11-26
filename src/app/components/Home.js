import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            iq: props.initialIq,
            status: 0
        };
    }

    onMakeSmarted() {
        this.setState({
            iq: this.state.iq + 10
        });
        console.log(this.state.iq);
    }

    render() {
        return (
            <div>
                <big class="text-muted">> This is Home Component. Yeah !! </big>

                <button onClick={() => this.onMakeSmarted()} className="btn btn-primary"> Make me smart !</button>

                <button onClick={() => this.props.alert()} className="btn btn-primary"> Show Alert</button>
            </div>
        );
    }
}