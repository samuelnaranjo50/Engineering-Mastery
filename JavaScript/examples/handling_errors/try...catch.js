var num1 = 3
var num2 = '4'

try {
    
   if(typeof(num1) != "number" || typeof(num2) != "number"){
    throw new TypeError("Your input is not valid, try with numbers")
   }
   else{
    console.log("Result is", num1 + num2)
   }
} catch(error){

    console.log("Error detected->", error);
}

console.log("Code make it here !");