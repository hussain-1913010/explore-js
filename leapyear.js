const aYear=3688;
const check=aYear%4;
console.log(check);




const year=3688;
const remainder=year%4;
if(remainder==0){
    console.log('This is leap year')
}
else{
    console.log('this is not leap year');
}




function isLeapYear(year){
    const remainder=year%4;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear=isLeapYear(3688);
console.log(checkYear);