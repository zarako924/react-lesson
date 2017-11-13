import React from 'react';
import {cardName, handMsg} from './bj/bj';

const f2 = c => <div key={cardName(c)}>{cardName(c)}</div>

export function HandView({h}) {

    const hStyle = {
        margin:"1rem",
        "padding":"1rem",
        height:"10rem",
        width:"10rem",
        background:"cyan"
    }

    return <div style={hStyle}>
        <div><b>{h.name} Hand</b></div>
        <div>
            {h.cards.map(f2)}
        </div>
        <div><b>{handMsg(h)}</b></div>
    </div>

           
}