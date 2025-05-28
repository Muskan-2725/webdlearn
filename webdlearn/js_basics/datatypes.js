//"use strict"; //treats js as newer version

//======variables and constant=======
console.log("hello");
const id=12974
let myname="muskan"
var roll="2023UCS1635"
clg="nsit"
let add;
myname="mukul"
console.log(id);
console.log(myname);
console.table([id,myname,roll,clg,add]);



//=======datatypes: number, string, boolean, null(stand alone)(type0f:object),undefined=========
let str=undefined
let strnumber=Number(str)
console.log(typeof str)
console.log(typeof strnumber)
console.log(strnumber)
// str=>33 ; result==33
// str=>33abc ; result==NaN
// str=>null ;result==0
// str=>true/false ;result==1/0
// str=>undefined ;result==NaN
 let num=23
 let numstr=String(num)
 console.log(numstr)

 let loggedin=-33
 let booleanloggedin=Boolean(loggedin)
 console.log(typeof booleanloggedin)
 console.log(booleanloggedin)
 //loggedin=>1/0 ;result==true/false
 //loggedin=>"muskan" ;result==true
 //loggedin=>"" ;result==false
 //loggedin=>somenumber ;result==true


 //**********summary**********
// //primitive datatypes
// 7 types : Number, String , Boolean, null,undefined, Symbol(unique),BigInt
const myid=Symbol('123')
const idsaves=Symbol('123')
console.log(id===idsaves)//returns false
const bignum=2874691485035n//BigInt :apply n at end 
//refrence (non-primitive)
Array, Object, Function
const heroes=["shaktiman","nagraj"]
let myobj={
    name:"muskan",
    roll:23,
}
const myfunc= function(){
    console.log("hello world");
}

//++++++++memory++++++
// // Stack(primitive),heap (non-prmitive)
let name="muskan"
let anothername=name
anothername="mukul"
console.log(anothername)
console.log(name)

let detail1={
    id:"12434",
    email:"muskan@gmail.com"
}
let detail2=detail1
detail2.email="garg@gmail"
console.log(detail1.email)
console.log(detail2.email)
