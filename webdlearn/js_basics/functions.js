//-----------functions---------
function letter(){
    console.log('M')
    console.log('u')
    console.log('s')
    console.log('k')
    console.log('a')
    console.log('n')
}
// writting just letter would result in nothing it just states refrence rather
letter()

//for adding two numbers
function addtwonumbers(number1,number2){
    console.log(number1+number2)
}
addtwonumbers(4,5) // we need to pass on parameters in the function as NaN
const result=addtwonumbers(4,5)
console.log("result of addtwonumbers using console:",result)
//can also use return statement but that won't print unless function is printed
function AddTwoNumbers(number1, number2){
    let result=number1+number2
    return result
    //or simply return number1+number2
}
console.log(AddTwoNumbers(4,5))
const result2=AddTwoNumbers(4,5)
console.log("result of AddTwoNumbers using return:",result2)

function isloggedin(name="sam"){//we can even have predefined value for the argument
    // if(name===undefined){//or!name i.e parameter not passed 
    //     console.log("please enter the name ")
    //     return 
    // }
    return `${name} is logged in`
}
console.log(isloggedin("muskan"))
console.log(isloggedin())


//+++++++++++++ arrays and objects in functions ++++++++++++
function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice(399))
//what if we have multiple values the above fucntion would only take first argument and ignore the rest 
function CalculateCartPrice(...num1){// ... represent rest operator
    return num1
}
console.log(CalculateCartPrice(200,300,500,1000))//returns in form of an array

const user={
    name:"muskan",
    price:399
}
function handleobject(anyobj){
    return `username is ${anyobj.name} and price is ${anyobj.price}`
}
console.log(handleobject(user))
console.log(handleobject({name:"mukul",price:500}))

const arr=[200,500,400,2000]
function handlearr(anyarr){
    return anyarr[2]
}
console.log(handlearr(arr))
console.log(handlearr([300,800,100]))

//--------------map,filter,reduce----------
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 5);
console.log(sum); // 15
var mul=myArray.map(function(ele) {
    return ele*2;
});
var fil=myArray.filter(function(element) {
    return element%2==0;
});
console.log(mul,fil);


let mynums=[1,2,3,4,5,6,7,8,9]
let newnums=mynums.filter( (num)=> num>5)
console.log(newnums)
//these functions return an output unlike 'for each'
//using for each
let newnums2=[];
mynums.forEach( (num)=>{
    if(num>5){
        newnums2.push(num);
    }
})
console.log(newnums2)
//mixture
newnums=mynums.map((num)=> num*10).map((num)=> num+3).filter((val)=> val>40)
console.log(newnums)