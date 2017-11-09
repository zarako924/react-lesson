import React from 'react';
import {Foo} from './Foo';
import {Boo} from './Boo';

const a1 = [2,4,6,8]
const a2 = a1.map(n=><li key={n}>{n}</li>)

const html = <div>
        <h1>Hello</h1>
        <Foo x={11} y={10} />
        <Boo a={-1} b={4} />
        <ul>{a2}</ul>
    </div>


export function Lesson1() {
    return html
}


