//iterations
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("value is equal to 5")
    }
    console.log(element)
}
//nested loops
for (let i = 0; i < 10; i++) {
    console.log(`outer loop : ${i}`)
    for (let j = 0; j < 5; j++) {
        console.log(`inner loop : ${j}`)  
    }
}
for (let i = 0; i < 10; i++) {
    console.log(`outer loop : ${i}`)
    for (let j = 0; j < 5; j++) {
        console.log(i+"*"+j+"="+i*j);  
    }
}
let myarray1=["batman","superman","spiderman"]
for (let index = 0; index < myarray1.length; index++) {
    const element = myarray1[index];
    console.log(element)
}
//break and continue
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("detected number 5");
        break;
    }
    console.log(`value of element is ${index}`)
    
}
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("detected number 5");
        continue;
    }
    console.log(`value of element is ${index}`)
    
}


//while loop
let i=0;
while (i<=10) {
    console.log(`value of i is : ${i}`)
    i=i+2
}
const myarray=["muskan","mukul","rohan","ram"]
let arr1=0
while (arr1<myarray.length) {
    console.log(`vaule at index ${arr1} is ${myarray[arr1]}`)
    arr1++
}
//do while loop
let score=10
do {
    console.log(`score is ${score}`)
    score--;
} while (score>10);

// ARRAY  loops
//for of 
let countries=["india","britain","america","finland"]
for (const ele of countries) {
    console.log(ele)
}
//can also use it for strings as well
let user="hello world"
for(const ele of user){
    console.log(ele)
}
//new datatype maps :works in key value pair with unique items
let map1=new Map();
map1.set('IN','india')
map1.set('USA','united states of america')
map1.set('FR','france')
console.log(map1)
for(const key of map1){
    console.log(key)
}
for(const [key, value] of map1){
    console.log(key,":-",value)
}
//on objects
// let obj={
//     game1:"nfs",
//     game2:"ycity"
// }
// for (const [key,value] of obj) {
//     console.log(key,":-",value)
// }
//it returns an error . so this doesn't work for an object

//therfore we have another 'for in' statement
let myobject={
    js:"javaascript",
    cpp:"C++",
    rb:"ruby"
}
for (const key in myobject) {
    console.log(`${key} is shortcut for ${myobject[key]}`)
}
//'for in ' in arrays
let arr=['programming','python','c++']
for (const key in arr) {
    console.log(key)//it prints the indeces 
    console.log(arr[key])//this results in values 
}
//'for in' on maps :as maps are not iteratble therefore can't apply on it
let map=new Map();
map.set('IN','india')
map.set('USA','united states of america')
map.set('FR','france')
for (const key in map) {
    console.log(key)
}

//'for each' loop:higher order
let coding=["js","cpp","python","java"]
coding.forEach( function(val) {//it is a call back funtion so doesn't require name
    console.log(val)
} );
coding.forEach( (val)=>{
    console.log(val)
} );

function PrintMe(item){
    console.log(item)
}
coding.forEach(PrintMe)//just need to provide the refrence no need to call the function 
coding.forEach( function (val , index, arr) {
    console.log(val, index, arr)
})

let mycoding=[
    {
        language:"javascript",
        languagefilename:"js"
    },
    {
        language:"python",
        languagefilename:""
    },
    {
        language:"java",
        languagefilename:"java"
    }
]
mycoding.forEach( function (item){
    console.log(item.language)
} )