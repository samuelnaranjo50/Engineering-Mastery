var number = 60;

try {
    if(number > 18 && number < 30){
         console.log ("You can pass");
    }
    else {
       throw new RangeError("Your number is out of range");
    }
} catch (error_obj){
    console.log("Part 1 of the error", error_obj.name);
    console.log("Part 2 of the error", error_obj.message);
    console.log("Part 3 of the error", error_obj.stack);
}
    

    