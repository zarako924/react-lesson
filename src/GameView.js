import React from 'react';
import {gameMsg, gameIsActive} from './bj/bj';
import {HandView} from './HandView';


export function GameView({g, onDeal, onHit, onStay, onClick}) {

    // function disableDeal() {
    //     if (gameIsActive(g)) return disabled
    //     return null
    // }
    return <div>
        <h1>Black Jack</h1>

        <div>
            <button onClick={onDeal} disabled={gameIsActive(g)} >Deal</button>
            <button onClick={onHit} disabled={!gameIsActive(g)}>Hit</button>
            <button onClick={onStay} disabled={!gameIsActive(g)}>Stay</button>
            <button onClick={onClick} name="Deal">Deal2</button>
            <button onClick={onClick} name="Hit">Hit2</button>
            <button onClick={onClick} name="Stay">Stay2</button>
        </div>

        <div style={{display:"flex"}}>
            <HandView h={g.ph} />
            <HandView h={g.dh} />
        </div>

        <div>{gameMsg(g)}</div>
        </div>
}