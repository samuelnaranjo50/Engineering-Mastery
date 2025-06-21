var arithmetic = {
    operationtypes: ["Addition, Subtraction, Multiplication, Division"],
    add (a, b) {
        console.log("Addition product: ", a + b);
    },
    substract (a, b) {
        console.log("Subtraction product", a - b);
    },
    multiply(a, b) {
        console.log("Multiplication product", a * b);
    },
    division (a, b) {
        console.log("Multiplication product", a / b);
    },
};

var value1 = 50;
var value2 = 3;

arithmetic.add(value1, value2);

arithmetic.substract(value1, value2);

arithmetic.multiply(value1, value2);

arithmetic.division(value1, value2);