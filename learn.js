//"use strict"; //treats js as newer version

//======variables and constant=======
/*console.log("hello");
const id=12974
let name="muskan"
var roll="2023UCS1635"
clg="nsit"
let add;
name="mukul"
console.log(id);
console.log(name);
console.table([id,name,roll,clg,add]);*/



//=======datatypes: number, string, boolean, null(stand alone)(type0f:object),undefined=========
// let str=undefined
// let strnumber=Number(str)
// console.log(typeof str)
// console.log(typeof strnumber)
// console.log(strnumber)
// // str=>33 ; result==33
// // str=>33abc ; result==NaN
// // str=>null ;result==0
// // str=>true/false ;result==1/0
// // str=>undefined ;result==NaN
//  let num=23
//  let numstr=String(num)
//  console.log(numstr)

//  let loggedin=-33
//  let booleanloggedin=Boolean(loggedin)
//  console.log(typeof booleanloggedin)
//  console.log(booleanloggedin)
//  //loggedin=>1/0 ;result==true/false
//  //loggedin=>"muskan" ;result==true
//  //loggedin=>"" ;result==false
//  //loggedin=>somenumber ;result==true



 //=========operations============
//  let num=3;
//  let negnum=-num
//  console.log(negnum)
//  console.log(2+2)
//  console.log(2*2)
//  console.log(2-2)
//  console.log(2**4)
//  console.log(2/3)
//  console.log(2%3)
//  let str1="hello"
//  let str2=" muskan"
//  let str3=str1+str2
//  console.log(str3)

//  let gamenumber=100
// //  let preincrement=++gamenumber
//  let postincrement =gamenumber++
// //  let predecrement=--gamenumber
// //  let postdecrement=gamenumber--
// //  console.log(preincrement)
//  console.log(postincrement)
// //  console.log(predecrement)
// //  console.log(postdecrement)
// console.log(gamenumber)


//======comparison======
// //generally try to compare varibles of same datatype
// console.log(2>3)
// console.log(2==3)
// console.log(2<=3)
// //using different datatypes can sometimescause problem
// console.log("2"==2)//itself converts "2" into 2 and compares
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// //strict comparison (===) also checks for datatypes
// console.log("2"===2)

//**********summary**********
// //primitive datatypes
// 7 types : Number, String , Boolean, null,undefined, Symbol(unique),BigInt
// const id=Symbol('123')
// const idsaves=Symbol('123')
// console.log(id===idsaves)//returns false
// const bignum=2874691485035n//BigInt :apply n at end 
// //refrence (non-primitive)
// Array, Object, Function
// const heroes=["shaktiman","nagraj"]
// let myobj={
//     name:"muskan",
//     roll:23,
// }
// const myfunc= function(){
//     console.log("hello world");
// }

//++++++++memory++++++
// // Stack(primitive),heap (non-prmitive)
// let name="muskan"
// let anothername=name
// anothername="mukul"
// console.log(anothername)
// console.log(name)

// let detail1={
//     id:"12434",
//     email:"muskan@gmail.com"
// }
// let detail2=detail1
// detail2.email="garg@gmail"
// console.log(detail1.email)
// console.log(detail2.email)


//=================strings==================
// let str1 = "hello"
// let str2 = "muskan"
// console.log(str1+" "+str2);//not a good practice using +
// console.log(`${str1} ! this is ${str2}`)
// //another method :defeines it as a string only
// const gamename=new String("game Knockout kick")
// console.log(gamename)
// console.log(gamename[0])
// console.log(gamename.__proto__)
// console.log(gamename.length)
// console.log(gamename.substring(1,5))
// console.log(gamename.slice(-6,5))//can even use negative indexing from back
// console.log(gamename.charAt(3))
// console.log(gamename.indexOf('n'))
// console.log(gamename.toUpperCase())
// console.log(gamename.toLowerCase())
// console.log(gamename.toString())

// const newstring="    muskan   "
// console.log(newstring.trim())
// const url="https://oenvn/nnvo%20jnnc"
// console.log(url.replace('%20','-'))
// console.log(url.includes('oen'))
// console.log(url.includes('oend'))
// console.log(gamename.split(' '))


//----------------numbers & maths----------------
// const score=400
// console.log(score)
// const balance =new Number(100.2879)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toPrecision(4))
// const anothernum=1000000
// console.log(anothernum.toLocaleString('en-IN'))
// console.log(Number.MAX_SAFE_INTEGER)
// //similarly other functions are there with Number.    ;


//++++++++++++++ Maths +++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.sqrt(10))
// console.log(Math.round(4.87))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(5.8))
// console.log(Math.pow(2,3))
// console.log(Math.random()) // returns any value between 0-1
// console.log((Math.random()*10)+1) // limit the number to be greater than 1 
// const min=10
// const max=20
// console.log(Math.floor(Math.random()*(max-min+1))+min)//to range between some paticular mimit say min-max
// console.log(Math.LOG10E)


//---------------date & time----------------
// const  mydate=new Date()
// console.log(mydate)
// console.log(typeof mydate)
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// let anotherdate=new Date("2025-07-02")
// let newdate=new Date("07-02-2024")
// console.log(anotherdate.toString())
// console.log(newdate.toString())
// let timestamp=Date.now()
// console.log(timestamp)
// console.log(mydate.getTime())
// console.log(Math.floor(Date.now()/1000)) // in seconds
// let newday=mydate.toLocaleString('en-IN',{
//     weekday: "long",
//     month:'short',
//     year:'numeric',
//     day:'numeric',
// })
// console.log(newday)


//--------Array--------
// const myarr=[1,2,3,4,5] //elements can even be of mix datatypes
// console.log(myarr)
// const arr=new Array(0,1,2,3,4,5)
// console.log(myarr[3])
// console.log(arr)
// arr.push(6)
// arr.push(7)
// arr.pop()
// console.log(arr)
// arr.unshift(9)
// arr.shift()
// console.log(arr)
// console.log(arr.includes(9))
// console.log(arr.indexOf(4))
// console.log(arr.join()) // converts into string with elements separated with commas
// console.log(typeof arr.join())
// const newarr= new Array(2,7,2,5,3,1,8,2,3)
// console.log("A ",newarr)
// console.log(newarr.slice(1,4))
// console.log("B ",newarr)
// console.log(newarr.splice(1,4)) // takes out the ranges index element from the array
// console.log("C ",newarr)

//++++++++++++++++ updation of array ++++++++++++++++
// const names=["muskan","amrita","aditya","shreya"]
// const surnames=["garg","yadav","singla","mittal"]
// console.log(names.push(surnames)) //creates an array in array
// const fullname=names.concat(surnames) //instead can use concate
// console.log(fullname)
// const full_name=[...names,...surnames]//has advantage over concate that can spread up more than two array also
// console.log(full_name)
// const arr=[1,2,3,[4,5,6],5,6,[7,[8,9]]]
// console.log(arr.flat(Infinity))//to convert the above complex array into single layer aray
// Array.isArray("muskan")
// console.log(Array.from("muskan"))
// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3))