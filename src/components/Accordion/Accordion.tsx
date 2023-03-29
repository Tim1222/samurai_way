import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";
import React from "react";


function Accordion(props: any) {
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </div>
}

export default Accordion;