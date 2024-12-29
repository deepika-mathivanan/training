array=[10,20,30,40,50]
array.forEach((element,index) => {
    console.log("element is",element,"and its index is",index)
});
objtype={
    "fname":"deepika",
    "lname":"mathivanan",
    "age":19

}
/*console.log(objtype.age)
objtype.forEach((key,value) => {
    console.log(value,key)
});
for (const {key,value} of objtype) {
    console.log(key,value)
}*/
for (key in objtype){
    value=objtype.key
    console.log(key,value)
}