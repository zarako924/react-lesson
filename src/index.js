import React from 'react';
import ReactDOM from 'react-dom';
import {Lesson1} from './Lesson1';
import {Blue} from './Blue';
import {Red} from './Red';
import {Green} from './Green';
import {Link} from './Link';

let tab = "Blue"
// let tab = "Cat"

const rootDiv = document.getElementById('root');

function onLinkClick(tabName) {
    // event.preventDefault()
    // // const href = event.target.name
    // // console.log("href="+event.target.href)
    // tab = event.target.name
    tab = tabName
    renderAll()
}

function tabBar() {

    return <div>
        <Link name="Blue" onClick={onLinkClick} />
        <Link name="Red" onClick={onLinkClick} />
        <Link name="Green" onClick={onLinkClick} />
        <Link name="Lesson1" onClick={onLinkClick} />
    </div>
}

function body(tab) {
    if (tab === "Blue") return <Blue />
    if (tab === "Red") return <Red />
    if (tab === "Green") return <Green />
    if (tab === "Lesson1") return <Lesson1 />
    return <h1>Bad Tab Value {tab}</h1>
}

function main(tab) {
    return <div>
        {tabBar()}
        {body(tab)}
    </div>
}

function renderAll() {
    ReactDOM.render(main(tab), rootDiv);    
}
// ReactDOM.render(<App/>, rootDiv);
ReactDOM.render(main(tab), rootDiv);




