// Calculate the area of a rectangle

function calculateArea(lenght, widht){
    let area_value = lenght * widht;
    console.log('Your meassurement were: lenght=', lenght, 'Widht =', widht);
    return area_value;
}

let fg_length = 50;
let fg_widht = 10;

//Assigning return value to a variable and printing it
let rectangle_area = calculateArea(fg_length, fg_widht); 
console.log('The area of your rectangles is =', rectangle_area);

//Directly printing the value
console.log('The area of your rectangles is =', calculateArea(fg_length, fg_widht))
