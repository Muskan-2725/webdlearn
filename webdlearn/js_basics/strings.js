//=================strings==================
let str1 = "hello"
let str2 = "muskan"
console.log(str1+" "+str2);//not a good practice using +
console.log(`${str1} ! this is ${str2}`)
//another method :defeines it as a string only
const gamename=new String("game Knockout kick")
console.log(gamename)
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.substring(1,5))
console.log(gamename.slice(-6,5))//can even use negative indexing from back
console.log(gamename.charAt(3))
console.log(gamename.indexOf('n'))
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.toString())

const newstring="    muskan   "
console.log(newstring.trim())
const url="https://oenvn/nnvo%20jnnc"
console.log(url.replace('%20','-'))
console.log(url.includes('oen'))
console.log(url.includes('oend'))
console.log(gamename.split(' '))
