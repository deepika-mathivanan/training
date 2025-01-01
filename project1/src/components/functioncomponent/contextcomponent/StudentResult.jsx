import {useContext} from "react"
import { ThemeProvider } from "../UseContext";
var StudentResult=()=>{
    var result=useContext(ThemeProvider);
    return(
        <section>
            <h3>StudentResult {result.sgpa}</h3>
            <h3>StudentResult {result.cgpa}</h3>

        </section>
    )
}
export default StudentResult;