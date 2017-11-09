import React from 'react';

const s = {
    margin:"1rem"
}



export function Link({name, onClick}) {
    
    function myClick (event) {
        event.preventDefault();
        onClick(name);
    }

    const anchor = <a name={name} href={name} onClick={myClick} style={s}>{name}</a>

    return anchor
}