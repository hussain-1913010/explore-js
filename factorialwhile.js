var i=1;
var factorial=1;
while(i<=10){
    factorial=factorial*i;
    console.log(factorial);
    i++;
}


var i=1;
var factorial=1;
while(i<=10){
    factorial=factorial*i;
    i++;
}
console.log(factorial);


function doFactorial(n){
    var i=1;
    var factorial=1;
    while(i<=n){
        factorial=factorial*i;
        i++;
    }
    return factorial;
}
var result= doFactorial(10);
console.log(result);