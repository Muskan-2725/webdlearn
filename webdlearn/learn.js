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


//-------------objects-------------
//object literals
// let sym1= Symbol("key1")
// //to use symbol in object the symbol name is to writtem in square bracket
// const user={
//     name:"muskan",
//     "full name":"muskan garg",
//     [sym1]:"mykey",
//     batch:"cse2",
//     roll:18,
//     clg:"nsit",
// }
// console.log(user.name)//one method
// console.log(user["full name"])
// console.log(user["name"])
// console.log(user[sym1])
// console.log(user)

// user.roll=20
// // Object.freeze(user)
// user.roll=30
// console.log(user)
// user.greetingone = function(){
//     console.log("hello user");
// }
// user.greetingtwo = function(){
//     console.log(`hello user, ${this.name}`);
// }
// console.log(user.greetingone())
// console.log(user.greetingtwo())
// console.log(user)

// const tinderuser={}
// tinderuser.id="123abc"
// tinderuser.name="himanshi"
// tinderuser.isloggedin=false
// console.log(tinderuser)
// const regularuser={
//     email:"muskan@gmail.com",
//     name:{
//         fullname:{
//             firstname:"muskan",
//             lastname:"garg"
//         }
//     },
//     islogged:false,
// }
// console.log(regularuser)
// console.log(regularuser.name.fullname)

// const obj1={ 1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
// const obj3={5:'e',6:'f'}
// const obj4={obj1,obj2}//will form object in object
// console.log(obj4)
// const obj4=Object.assign({},obj1,obj2,obj3) // better to have {} have at first place as Object.assign{target,source}
// console.log(obj4)
// console.log(obj1) // if we didn't used {} than obj1 should be same as obj4
// const obj4={...obj1,...obj2}
// console.log(obj4)
// const user=[
//     {

//     },{

//     },{

//     },
// ]
// user[1].email="muskan.garg"
// console.log(user)
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty("isloggedin"))

//+++++++++++object destructure+++++++++++
// const course={
//     name:"b.tech",
//     clg:"nsut",
//     courseinstructor:"6576ggj",
// }
//////first method:course.id
//////another: de-structure
// const {courseinstructor}=course
// console.log(courseinstructor)
// const {courseinstructor:instructor}=course
// console.log(instructor)
// //api:json format
// //as object
// {
//     "name":"muskan",
//     "batch":"cse2",
// }
// //or as array
// [
//     {},
//     {},
//     {},
// ]



//-----------functions---------
// function letter(){
//     console.log('M')
//     console.log('u')
//     console.log('s')
//     console.log('k')
//     console.log('a')
//     console.log('n')
// }
// // writting just letter would result in nothing it just states refrence rather
// letter()

// //for adding two numbers
// function addtwonumbers(number1,number2){
//     console.log(number1+number2)
// }
// addtwonumbers(4,5) // we need to pass on parameters in the function as NaN
// const result=addtwonumbers(4,5)
// console.log("result of addtwonumbers using console:",result)
// //can also use return statement but that won't print unless function is printed
// function AddTwoNumbers(number1, number2){
//     let result=number1+number2
//     return result
//     //or simply return number1+number2
// }
// console.log(AddTwoNumbers(4,5))
// const result2=AddTwoNumbers(4,5)
// console.log("result of AddTwoNumbers using return:",result2)

// function isloggedin(name="sam"){//we can even have predefined value for the argument
//     // if(name===undefined){//or!name i.e parameter not passed 
//     //     console.log("please enter the name ")
//     //     return 
//     // }
//     return `${name} is logged in`
// }
// console.log(isloggedin("muskan"))
// console.log(isloggedin())


//+++++++++++++ arrays and objects in functions ++++++++++++
// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(399))
// //what if we have multiple values the above fucntion would only take first argument and ignore the rest 
// function CalculateCartPrice(...num1){// ... represent rest operator
//     return num1
// }
// console.log(CalculateCartPrice(200,300,500,1000))//returns in form of an array

// const user={
//     name:"muskan",
//     price:399
// }
// function handleobject(anyobj){
//     return `username is ${anyobj.name} and price is ${anyobj.price}`
// }
// console.log(handleobject(user))
// console.log(handleobject({name:"mukul",price:500}))

// const arr=[200,500,400,2000]
// function handlearr(anyarr){
//     return anyarr[2]
// }
// console.log(handlearr(arr))
// console.log(handlearr([300,800,100]))

//--------------map,filter,reduce----------
// var myArray = [1, 2, 3, 4, 5];
// var sum = myArray.reduce(function(acc, cur) {
//     return acc + cur;
// }, 5);
// console.log(sum); // 15
// var mul=myArray.map(function(ele) {
//     return ele*2;
// });
// var fil=myArray.filter(function(element) {
//     return element%2==0;
// });
// console.log(mul,fil);


// //===========scope ===========
// //because of scope limit we use let and const in place of var to initiate a variable 
// //local scope and global scope
// var c=300;
// let a=200;
// const b=100;
// if(true){
//     let a =20;
//     var c=30;
//     const b=10;
//     console.log("inner : ",a);
//     console.log("inner : ",b);
//     console.log("inner : ",c);
// }
// console.log("outer : ",a)
// console.log("outer : ",b)
// console.log("outer : ",c)
// // the variable c from inner to outer remained same as it has global scope 
// // let and const changed as they have block scope 
// //-------closure--------
// function one(){
//     let username="muskan";
//     function two(){
//         let website="linkdin"
//         console.log(username);
//     }
//     // console.log(website); //it results in an error
//     console.log(username)
//     two();
// }

// one()
// //      hoisting
// console.log(addone(5));
// function addone(num){
//     return num+1
// }
// addone(4)
// //another method
// //this below one we can't call the function before it is defined whereas in above we can
// //console.log(add) // wrong 
// const add= function(num) {
//     return num+2
// }
// we should take care of the scopes 