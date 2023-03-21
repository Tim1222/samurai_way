import React from 'react';
import './App.css';
import Technologies from './Technologies';
import Header from './Header';
import Star from "./Star";
import {log} from "util";

const App = () => {
    return (
        <div>
            <AppTitle/>
            <Star/>
            <Header/>
            <Technologies/>
            <Accordion/>
        </div>
    );
}

function Accordion () {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>

    </div>
}

function AccordionTitle () {
    console.log('AccordionTitle rendering')
    return  <h3>Меню</h3>
}

function AccordionBody () {
    console.log('AccordionBody rendering')
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function AppTitle () {
    return <>Hello everybody</>
}
export default App;
