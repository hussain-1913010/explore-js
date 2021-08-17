// just simple a number 
var number=5;
console.log(number);
// turns a negative number into positive
var number=-5;
var absoluteNumber=Math.abs(number);
console.log(absoluteNumber);
// turns float value into a round figure . nb if the value is lower than point 5 , then it will get down to its lower real value
var number=5.45;
var resultNumber=Math.round(number);
console.log(resultNumber);
// turns float value into a round figure . nb if the value is upper than point 5 , then it will get down to its upper real value
var number=5.54;
var resultNumber=Math.round(number);
console.log(resultNumber);
// turns float value into a round figure . and it will add 1 to the real value ..where float is upper or lower point 5, doesn't matter.
var number=5.45;
var resultNumber=Math.ceil(number);
console.log(resultNumber);
// turns float value into a round figure . and it will add 1 to the real value ..where float is upper or lower point 5, doesn't matter.
var number=5.54;
var resultNumber=Math.ceil(number);
console.log(resultNumber);
// turns float value into a round figure . and it will substract 1 to the real value ..where float is upper or lower point 5, doesn't matter.
var number=5.45;
var resultNumber=Math.floor(number);
console.log(resultNumber);
// turns float value into a round figure . and it will substract 1 to the real value ..where float is upper or lower point 5, doesn't matter.
var number=5.54;
var resultNumber=Math.floor(number);
console.log(resultNumber);
// its a random value ...this value will change within zero to one.
var number=5.54;
var resultNumber=Math.random(number);
console.log(resultNumber);
// it will give a random value . but it will change within zero to hundrade with a round figure.
var number=Math.random()*100;
var result=Math.round(number);
console.log(result);