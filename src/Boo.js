import React from 'react';

export function Boo({a,b}) {
    return <div>Boo {a+b} {a < 0 ? "Err" : <b>Yo</b>}</div>
}