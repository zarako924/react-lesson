import React from 'react';

const s = {
    margin:"1rem"
}

const s1 = {
    ...s,
    background:"yellow"
}


export function Link({name, onClick, activeTab}) {
    
    function myClick (event) {
        event.preventDefault();
        onClick(name);
    }

    // console.log("name="+name+", activeTab="+activeTab)
    const anchor = <a name={name} href={name} onClick={myClick} style={name===activeTab?s1:s}>{name}</a>

    return anchor
}