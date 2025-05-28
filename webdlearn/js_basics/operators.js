//=========operations============
 let num=3;
 let negnum=-num
 console.log(negnum)
 console.log(2+2)
 console.log(2*2)
 console.log(2-2)
 console.log(2**4)
 console.log(2/3)
 console.log(2%3)
 let str1="hello"
 let str2=" muskan"
 let str3=str1+str2
 console.log(str3)

 let gamenumber=100
//  let preincrement=++gamenumber
 let postincrement =gamenumber++
//  let predecrement=--gamenumber
//  let postdecrement=gamenumber--
//  console.log(preincrement)
 console.log(postincrement)
//  console.log(predecrement)
//  console.log(postdecrement)
console.log(gamenumber)


//======comparison======
//generally try to compare varibles of same datatype
console.log(2>3)
console.log(2==3)
console.log(2<=3)
//using different datatypes can sometimescause problem
console.log("2"==2)//itself converts "2" into 2 and compares
console.log(null>0)
console.log(null==0)
console.log(null>=0)
//strict comparison (===) also checks for datatypes
console.log("2"===2)