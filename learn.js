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