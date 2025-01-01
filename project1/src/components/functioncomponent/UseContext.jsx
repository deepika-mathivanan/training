import React from "react";
import Component2 from "./contextcomponent/Component2";

export  var ThemeProvider = React.createContext();
var UseContext=()=>{
    return(
        <section>
               <ThemeProvider.Provider value={{sgpa:"10.00",cgpa:"9.00"}}>
                <h1>this is useContext</h1>
                <Component2 />
                </ThemeProvider.Provider>

        </section>
    );
}
export default UseContext;