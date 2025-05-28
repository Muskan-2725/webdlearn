//-------------objects-------------
//object literals
let sym1= Symbol("key1")
//to use symbol in object the symbol name is to writtem in square bracket
const user={
    name:"muskan",
    "full name":"muskan garg",
    [sym1]:"mykey",
    batch:"cse2",
    roll:18,
    clg:"nsit",
}
console.log(user.name)//one method
console.log(user["full name"])
console.log(user["name"])
console.log(user[sym1])
console.log(user)

user.roll=20
// Object.freeze(user)
user.roll=30
console.log(user)
user.greetingone = function(){
    console.log("hello user");
}
user.greetingtwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(user.greetingone())
console.log(user.greetingtwo())
console.log(user)

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="himanshi"
tinderuser.isloggedin=false
console.log(tinderuser)
const regularuser={
    email:"muskan@gmail.com",
    name:{
        fullname:{
            firstname:"muskan",
            lastname:"garg"
        }
    },
    islogged:false,
}
console.log(regularuser)
console.log(regularuser.name.fullname)

const obj1={ 1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={5:'e',6:'f'}
// const obj4={obj1,obj2}//will form object in object
// console.log(obj4)
// const obj4=Object.assign({},obj1,obj2,obj3) // better to have {} have at first place as Object.assign{target,source}
// console.log(obj4)
// console.log(obj1) // if we didn't used {} than obj1 should be same as obj4
const obj4={...obj1,...obj2}
console.log(obj4)
const myuser=[
    {

    },{

    },{

    },
]
myuser[1].email="muskan.garg"
console.log(myuser)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isloggedin"))

//+++++++++++object destructure+++++++++++
const course={
    name:"b.tech",
    clg:"nsut",
    courseinstructor:"6576ggj",
}
////first method:course.id
////another: de-structure
const {courseinstructor}=course
console.log(courseinstructor)
const {courseinstructor:instructor}=course
console.log(instructor)
//api:json format
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
