function databasesharing(){
    console.log(" data stored succesfully");
 }
function submitform(formMsg,dbs){
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
    },2000)                             
}

submitform("form submitted succesfully",databasesharing)