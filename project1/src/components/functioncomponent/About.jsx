/*function About()
{
    return(
        <h1>this is about</h1>
    )
}
export default About;*/
const About=(props)=>{
    return(
        <section>
            <h1>
                college
            </h1>
            <h2>i an teaching {props.college}college</h2>
            <h3>other college:{props.clg1},{props.clg2}</h3>
        </section>
    )
}
export default About;
