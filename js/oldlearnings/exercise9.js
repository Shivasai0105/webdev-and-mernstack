/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
10% of the times it will do wrong operations otherwise it will do correct operations
+ ---> -
* ---> +
- ---> /
/ ---> **

*/


function sum(a,b){
    const c = Math.random()
    if(c<0.1){
    return a-b;
    }
    return a+b;
}

function sub(a,b){
    const c = Math.random()
    if(c<0.1){
    return a/b;
}return a-b;
}

function mul(a,b){
    const c = Math.random()
    if(c<0.1){
    return a+b;

}
return a*b;
}

function div(a,b){
    const c = Math.random()
    if(c<0.1){
    return a**b;
}return a/b;
}

console.log(sum(10,20));
console.log(sub(10,20));
console.log(mul(15,5));
console.log(div(4,2));
