import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super();
        this.iq = props.iq;
    }

    onMakeSmarted() {
        this.iq += 10;
        console.log(this.iq);
    }

    render() {
        return (
            <div>
                <big class="text-muted">> This is Home Component. Yeah !! </big>

                <button onClick={() => this.onMakeSmarted()} className="btn btn-primary"> Make me smart !</button>
            </div>
        );
    }
}