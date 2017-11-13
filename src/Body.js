import React from 'react';
import {Lesson1} from './Lesson1';
import {Blue} from './Blue';
import {Red} from './Red';
import {Green} from './Green';
import {People} from './People';
import {Yellow} from './Yellow';
import {BlackJack} from './BlackJack';
import {Customer} from './Customer';


function body(tab) {
    if (tab === "Blue") return <Blue />
    if (tab === "Red") return <Red />
    if (tab === "Green") return <Green />
    if (tab === "Lesson1") return <Lesson1 />
    if (tab === "Yellow") return <Yellow p1="123" />
    if (tab === "Beatles") return <People a={["John","Paul","George","Ringo"]} />
    if (tab === "BlackJack") return <BlackJack />
    if (tab === "Customer") return <Customer />
    return <h1>Bad Tab Value {tab}</h1>
}


export function Body({activeTab}) {

    return body(activeTab)
}