import React from 'react';
import {Link} from './Link';

export function Tabbar({tabs, onClick, activeTab}) {
    // console.log("activeTab="+activeTab)
    return <div>{tabs.map(name=><Link key={name} name={name} onClick={onClick} activeTab={activeTab}/>)}
</div>
}