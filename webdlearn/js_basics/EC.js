//---------javascript execution context--------
//----->global exefcution context : this 
//----->funtion execution context 
//-----> eval execution context 
//further it has two phaes for complete working 
//one is : memory creation phase --> her only variables are allocated 
//second is : execution phase --> all operations takes place 
//supose we have our code••
let val1=10;
let val2=5;
function addnum(num1,num2){
    let total=num1+num2;
    return total;
}
let result1=addnum(val1,val2);
let result2=addnum(3,6);
//for this first global EC : this
/*than memory creation phase : val1->undefined;
                                val2->undefined;
                                addnum->defination
                                result1->undefined
                                result2->undefined;*/
/* now execution phase: val1 <- 10;
                        val2 <- 5;
                        addnum -> new execution environment+ ececution thread
                                    memory phase : val1->undefined
                                                    val2->undefined
                                                    total->undefined
                                    execution phase: num1<-10;
                                                    num2<-5;
                                                    total<-15; // returned to global EC
                                    //after the execution this gets deleted 
                        result1<-15;
                        result2   same happens as that of result1 with change in value of variable*/
// call stack : lifo 
