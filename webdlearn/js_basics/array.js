//--------Array--------
const myarr=[1,2,3,4,5] //elements can even be of mix datatypes
console.log(myarr)
const arr=new Array(0,1,2,3,4,5)
console.log(myarr[3])
console.log(arr)
arr.push(6)
arr.push(7)
arr.pop()
console.log(arr)
arr.unshift(9)
arr.shift()
console.log(arr)
console.log(arr.includes(9))
console.log(arr.indexOf(4))
console.log(arr.join()) // converts into string with elements separated with commas
console.log(typeof arr.join())
const newarr= new Array(2,7,2,5,3,1,8,2,3)
console.log("A ",newarr)
console.log(newarr.slice(1,4))
console.log("B ",newarr)
console.log(newarr.splice(1,4)) // takes out the ranges index element from the array
console.log("C ",newarr)

//++++++++++++++++ updation of array ++++++++++++++++
const names=["muskan","amrita","aditya","shreya"]
const surnames=["garg","yadav","singla","mittal"]
console.log(names.push(surnames)) //creates an array in array
const fullname=names.concat(surnames) //instead can use concate
console.log(fullname)
const full_name=[...names,...surnames]//has advantage over concate that can spread up more than two array also
console.log(full_name)
const array=[1,2,3,[4,5,6],5,6,[7,[8,9]]]
console.log(array.flat(Infinity))//to convert the above complex array into single layer aray
Array.isArray("muskan")
console.log(Array.from("muskan"))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
