//----------------numbers & maths----------------
const score=400
console.log(score)
const balance =new Number(100.2879)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toPrecision(4))
const anothernum=1000000
console.log(anothernum.toLocaleString('en-IN'))
console.log(Number.MAX_SAFE_INTEGER)
//similarly other functions are there with Number.    ;


//++++++++++++++ Maths +++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.sqrt(10))
console.log(Math.round(4.87))
console.log(Math.ceil(4.2))
console.log(Math.floor(5.8))
console.log(Math.pow(2,3))
console.log(Math.random()) // returns any value between 0-1
console.log((Math.random()*10)+1) // limit the number to be greater than 1 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//to range between some paticular mimit say min-max
console.log(Math.LOG10E)


//---------------date & time----------------
const  mydate=new Date()
console.log(mydate)
console.log(typeof mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
let anotherdate=new Date("2025-07-02")
let newdate=new Date("07-02-2024")
console.log(anotherdate.toString())
console.log(newdate.toString())
let timestamp=Date.now()
console.log(timestamp)
console.log(mydate.getTime())
console.log(Math.floor(Date.now()/1000)) // in seconds
let newday=mydate.toLocaleString('en-IN',{
    weekday: "long",
    month:'short',
    year:'numeric',
    day:'numeric',
})
console.log(newday)