import React from 'react';

export function Foo(props) {
    if (props.x > 10) return <div>Foo {props.x + props.y}</div>
}