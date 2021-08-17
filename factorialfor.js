var factorial=1;
for(var i=1; i<=10; i++){
    factorial = factorial*i;
    console.log(factorial);
}

var factorial=1;
for(var i=1; i<=10; i++){
    factorial = factorial*i;
    console.log(i,"=",factorial);
}


function dofactorial(n){
    var factorial=1;
    for(var i=1; i<=n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = dofactorial(10);
console.log(result);