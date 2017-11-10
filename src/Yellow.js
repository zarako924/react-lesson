import React from 'react';

export class Yellow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showDave:true
        }
    }

    onShowDaveClick = (event) => {
        console.log("onShowDaveClick")
        this.setState({showDave:true})
    }
    onHideDaveClick = (event) => {
        console.log("onHideDaveClick")
        this.setState({showDave:false})
    }
    render() {
        const s = {
            color:"yellow"
        }
        const s1 = this.props.p1
        const showDave = this.state.showDave

        return <div>
            <h1 style={s}>Yellow  </h1>
            {s1} {showDave?"show":"hide"}
            <button onClick={this.onShowDaveClick} >Show Dave</button>
            <button onClick={this.onHideDaveClick} >Hide Dave</button>
            </div>
    }
}