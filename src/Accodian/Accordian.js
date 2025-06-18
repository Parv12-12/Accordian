import React, { useState } from "react";
import {questions} from "./api"
import "./Acc.css"
import MyAccordian from "./MyAccordian";

const Accordian = ()=>{
    const[data] = useState(questions);
    return(
        <>
        <section className="main-div">
        <h1>React Interview questions</h1>
        {
            data.map((currElem)=>{
                const {id} = currElem;
                return <MyAccordian key={id} {...currElem}/>

            })
        }
        </section>
        </>
    )
}

export default Accordian