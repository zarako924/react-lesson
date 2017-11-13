import React from 'react';
import {Tabbar} from './Tabbar';
import {Body} from './Body';

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tab:"Customer"
        }
    }

    onLinkClick = (tabName) => {
        this.setState({tab:tabName})
    }
    
    render() {
        return <div>
            <Tabbar tabs={["Blue","Red","Green","Lesson1","Beatles","Yellow","BlackJack","Customer"]} onClick={this.onLinkClick} activeTab={this.state.tab} />
            {/* {body(tab)} */}
            <Body activeTab={this.state.tab} />
        </div>
    }
}