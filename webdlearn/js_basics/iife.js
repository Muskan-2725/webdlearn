// --------------this, arrow function----------------
// in browser generally global object is windows 
const obj={
    username:"muskan",
    password:"******",
    message :function() {
        console.log(`${this.username}, hello welcome here`);
        console.log(this)
    }
}
obj.message();
obj.username="mukul"
obj.message();
console.log(this) // returns {} as there is no global object 
function user1(){
    let username="muskan";
    console.log(this) // has no purpose to be used in function 
}
user1()
//arrow function
//explicitly
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,5))
//implicitly
const AddTwo=(num1,num2)=>(num1+num2)//parenthesis are used for implicit return
const user2=()=>({username:"muskan"})
console.log(AddTwo(5,7))
console.log(user2()) ;


//----------IIFE(immediately invoked function expression)-----------
// functions that can be invoked directly as and when declared to avoid global polution
//named iife
(function user() {
    console.log(`username:muskan`);
})();
//";" is required between these two functions 
//unnamed 
((names)=>{
    console.log("hello! everyone ",names);
})("rahul")

//it is a good practice to use semicolon ':'