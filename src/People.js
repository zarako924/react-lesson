import React from 'react';

export function People({a}) {
    // console.log("a="+a)
    return <ul>{a.map(p=><li key={p}>{p}</li>)}</ul>
}
