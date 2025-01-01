import { useEffect,useRef,useState } from "react";
var UseRef=()=>{
    var [text,setText]=useState("");
    var prevText=useRef();
    useEffect(()=>{
      prevText.current=text
    },[text])

    return(
        <section>
            <h1>this is an example of useref</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <h2>my current text is {text}</h2>
            <h2>my previous text is {prevText.current}</h2>
        </section>
    )

}
export default UseRef;