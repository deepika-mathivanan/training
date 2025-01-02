/*var SlowFunction=(number)=>{
    for (let i=0;i<10000000000;i++)
    {
    return number*2;
    }

var UseMemo=()=>{
    var [num,setnum]=useState(0);
    var [theme,updateTheme]=useState(true);
    var darkLight={
        backgroundColor:theme?"black":"white",
        color :(theme)?"white":"black"
    }
   var doublingANumber=()=>{
        return SlowFunction(num)
    }
    return(
        <section>
            <h1>this is usememo example</h1>
            <input type="number" value={num} onChange={(e)=>setnum(e.target.value)}/>
            <button onClick={()=>updateTheme(theme=!theme)}>Toggle Theme</button>
            <h2 style={darkLight} >{doublingANumber()}hello</h2>
        </section>
    )
}}
export default UseMemo;*/
import React, { useState, useMemo } from "react";

const SlowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

const UseMemo = () => {
  var [num, setNum] = useState(0);
  var [theme, setTheme] = useState(true);
  
  var darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  var doublingANumber = useMemo(() => SlowFunction(num), [num]);

  return (
    <section>
      <h1>This is a useMemo example</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>Toggle Theme</button>
      <h2 style={darkLight}>{doublingANumber} deepi</h2>
    </section>
  );
};

export default UseMemo;
