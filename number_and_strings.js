// adding two number
var number1 = 25;
var number2 = 15.45;
console.log(number1+number2);
// adding two number and taking only integer number
var number1 = 25;
var number2 = 15.45;
number2 = parseInt(number2);
console.log(number1+number2);
// adding two number and taking float number
var number1 = 25;
var number2 = 15.45;
number2 = parseFloat(number2);
console.log(number1+number2);
// adding a number and a string
var number1 = 25;
var number2 = '15.45';
console.log(number1+number2);
// converting number2 string to numeric number and taking only integer value of number2 and adding 
// with number1
var number1 = 25;
var number2 = '15.45';
number2 = parseInt(number2);
console.log(number1+number2);
// converting number2 string to numeric number and taking only float value of number2 and adding 
// with number1
var number1 = 25;
var number2 = '15.45';
number2 = parseFloat(number2);
console.log(number1+number2);

// converting number2 from string to numeric value with shortcut way and adding with number1
var number1 = 25;
var number2 = '15.45';
number2 = +number2;
console.log(number1+number2);
// converting number2 from numeric to string value with shortcut way and adding with number1
var number1 = '25';
var number2 = 15.45;
number2 = ''+number2
console.log(number1+number2);
// adding two float number
var numberFloat1 = 0.2;
var numberFloat2 = 0.1;
var result = numberFloat1 + numberFloat2;
console.log(result);
// adding two float number and taking the result for 4th number after the point
var numberFloat1 = 0.2;
var numberFloat2 = 0.1;
var result = numberFloat1 + numberFloat2;
result = result.toFixed(4);
console.log(result);
// adding two float number and taking the result for 1st number after the point
var numberFloat1 = 0.2;
var numberFloat2 = 0.1;
var result = numberFloat1 + numberFloat2;
result = result.toFixed(1);
console.log(result);