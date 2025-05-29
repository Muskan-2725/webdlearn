//===========scope ===========
//because of scope limit we use let and const in place of var to initiate a variable 
//local scope and global scope
var c=300;
let a=200;
const b=100;
if(true){
    let a =20;
    var c=30;
    const b=10;
    console.log("inner : ",a);
    console.log("inner : ",b);
    console.log("inner : ",c);
}
console.log("outer : ",a)
console.log("outer : ",b)
console.log("outer : ",c)
// the variable c from inner to outer remained same as it has global scope 
// let and const changed as they have block scope 
//-------closure--------
function one(){
    let username="muskan";
    function two(){
        let website="linkdin"
        console.log(username);
    }
    // console.log(website); //it results in an error
    console.log(username)
    two();
}

one()
//      hoisting
console.log(addone(5));
function addone(num){
    return num+1
}
addone(4)
//another method
//this below one we can't call the function before it is defined whereas in above we can
//console.log(add) // wrong 
const add= function(num) {
    return num+2
}
// we should take care of the scopes 
