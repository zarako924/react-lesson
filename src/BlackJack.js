import React from 'react';
// import {gameMsg} from './bj/bj';
import {GameView} from './GameView';
import { createGame, gameHit, gameStay } from './bj/bj';

// const g = createGame()


export class BlackJack extends React.Component {
    
        constructor() {
            super()
            this.state = {
                g : createGame()
            }
        }

        onDeal = () => {
            // console.log("onDeal")
            this.setState({g : createGame()})
        }

        onHit = () => {
            // console.log("onHit")
            this.setState({g : gameHit(this.state.g)})
        }

        onStay = () => {
            // console.log("onStay")
            this.setState({g : gameStay(this.state.g)})
        }

        onClick = (event) => {
            console.log("event="+event.target.name)
            if ('Deal' === event.target.name) this.onDeal()
            if ('Hit' === event.target.name) this.onHit()
            if ('Stay' === event.target.name) this.onStay()
        }

        render() {
            return <GameView 
                g={this.state.g} 
                onDeal={this.onDeal} 
                onHit={this.onHit} 
                onStay={this.onStay}
                onClick={this.onClick} />
        }


}