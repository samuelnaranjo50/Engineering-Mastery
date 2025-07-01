// Accessing before initialization with "var"
console.log(name);

var name = 'Sam';

// Accessing before initialization with "let"

//console.log(name2);

let name2 = 'Sam';

// Redeclaring a var variable

var myvariable = 100;
var myvariable = 120; // Redeclaring the variable


// GLOBAL ACCESS

// loop | Condition

var myvalues = [100,200,300,400];

for(let i = 0; i <= myvalues.length; i++){
    console.log(myvalues[i]);

    if(i == myvalues.length ){
        var accesible_variable1 = 'You can access this var';
        console.log("Variable declared");
    }
}

console.log(accesible_variable1);



//function

function myfunction(){
    var functionAnimal = 'Dog';
    console.log('Var declared');
}

myfunction(); //Invoking the function

console.log(functionAnimal) // Trying to access function declared variable