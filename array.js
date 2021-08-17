var friendName=['Muneem','Mashiur','Mahbub','Neon'];
console.log(friendName);

var friendRoll=[10,16,08,23];
console.log(friendRoll);
// all name and roll in a suppose table....calling process 
console.log(friendName[0],' ',friendRoll[0]);
console.log(friendName[1],' ',friendRoll[1]);
console.log(friendName[2],' ',friendRoll[2]);
console.log(friendName[3],' ',friendRoll[3]);
// set a index name
var muneem=friendRoll[0];
console.log(muneem);
// change array value
friendRoll[0]=1913010;
console.log(friendRoll);
// to know array index position (if any output comes with -1 then it will be defined as unknown value or it isn't in the array)
var positionName=friendName.indexOf('Mashiur');
var positionRoll=friendRoll.indexOf(16);
console.log(positionName,' ',positionRoll);
// remove value from array form the last position
friendName.pop();
friendRoll.pop();
console.log(friendName,' ',friendRoll);
// add value in array at the last
friendName.push('Plaban');
friendRoll.push(24);
console.log(friendName,' ',friendRoll);
// remove value from the first positoin of an array
friendName.shift();
friendRoll.shift();
console.log(friendName,' ',friendRoll);
// add value in the first position of an array
friendName.unshift('Ramzan');
friendRoll.unshift(09);
console.log(friendName,' ',friendRoll);



// understanding slice in a new array ...lets start...slicel e main array er koono change hoy na.....just slice e define kore deya part ene dekhay .......slice e ending index position na dile starting index position theke shesh porjonto kete niye ene show korbe
var name=['a','b','c','d','e','f','g','h']
var part=name.slice(2,5);
console.log(part);
console.log(name);