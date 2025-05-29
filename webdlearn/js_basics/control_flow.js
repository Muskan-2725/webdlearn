//------------control flow----------
// if statement 
let loggedin=true
const temp=42;
if(loggedin){
    console.log("sucessfully logged in");
}
//if-else 
if(temp>40){
    console.log("greater than 40");
}else{
    console.log("less than 40");
}
// >,<,>=,<=,!=,!==
//with scope check/limit
let score=100
if(score>50){
    let power="fly";
    console.log(`user power:${power}`);
}
// console.log(`user power:${power}`); // causes an error
//one line if statement 
if(score>50) console.log("well done!!") , console.log("good job");
//but this is not a good practice , it makes the code less readable
//multiple if else
let price=200
if(price>1000){
    console.log("greater than 1000")
}else if(price>800){
    console.log("greater than 800")
}else if(price>500){
    console.log("greater than 500")
}else{
    console.log("less than 500")
}
//multiple conditions 
let userloggedin=true;
let usersignin=true;
let userapply=false;
if(userloggedin && usersignin){
    console.log("user succesfully created an account")
}
//other operators are &&(and) ,||(or).


//switch case: structure
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let month=3;
switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("month not choosen");
        break;
}
//here if in cases break not used than as soon as the case satisfy the further cases tend to turn true
//key can be of any datatype
let day="tue";
switch (day){
    case "mon":
        console.log("monday");
        break;
    case "tue":
        console.log("tuesday");
        break;
    case "wed":
        console.log("wednesday");
    default:
        console.log("day not choosen");
        break;
}
//falsy values: 0 , -0 , false, "" ,BigInt 0n, NaN, undefined , null
//truthy values: true ,"0","false", [], {},function(){}, " "
let useremail=[]
if(useremail){
    console.log("got user email ")
}else{
    console.log("don't have user email")
}
//to check whether array is empty
if(useremail.length===0){
    console.log("it ia an empty array")
}
//to check whether object is empty or not
useremail={}
if(Object.keys(useremail).length===0){
    console.log("it is an empty object")
}


//nullish coalescing operator: null or undefined
//here gets the right value if the left value is null or undefined else gets the left value
let sum= 5??10;
console.log(sum)
sum=null??10
console.log(sum)
sum=undefined??10??40
console.log(sum)
//ternary operator
//condition ? true:false
let carry=20;
carry<10 ? console.log("less than 10"):console.log("greater than 10");
