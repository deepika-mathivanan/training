/*function Gallery()
{
    return(
        <h1>this is galerry</h1>
    )
}*/
import React from "react";
import { useState } from "react";
const Gallery=()=>{
var [counter,setcount]=useState(0)
function increment(){
    setcount(counter+1)
}
function decrement(){
    setcount(counter-1)
}
    return(
        <section>
            <h1>deepi</h1>                                                                                                                           
            <h2 style={{textAlign:"center"}}>learing state</h2>
            <h3> the state of my variable counter is {counter}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </section>
    )
}
export default Gallery;
