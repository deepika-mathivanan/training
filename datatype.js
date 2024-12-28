//array
arr = [10, 20, 30, [40,50], "KEC", 'a', 10.2, true]
console.log(arr)

//object type 1
obj1 = {
    "Firstname" : "deepika",
    "lastname" : "mathivanan",
    "age" : 20
}
console.log(obj1)

//object type 2
obj2 = {}
obj2["movie"] = "pushpa"
obj2["budget"] = "50 cr"
obj2["boxoffice"] = "300 cr"
obj2["release"] = "worldwide"
console.log(obj2)
console.log(obj2["boxoffice"]) //to print a specific key value
console.log(obj2.boxoffice,obj2.budget) //another way to print specific values

//object type 3
obj3 = new Object()
console.log(obj3)

//object type 4
obj4 = {}
console.log(obj4)

//object type 5
obj5 = new Object()
obj5["phone"] = "iphone"
obj5["store"] = "app store"
obj5["game1"] = "freefire"
obj5["game2"] = "coc"
console.log(obj5)
console.log(obj5.store)
console.log(obj5["game1"])