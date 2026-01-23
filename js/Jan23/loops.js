/*  loops in js 
keyword   termination condition ,   body of the loop
while
do while
for
for/in
for/of
forEach
*/
//1. write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable names sum

let sum =0;
let i=1;
while(i<=5){
    sum +=i;
    i++;
}
console.log(sum)

//2. write a while loop that counts down 5 to 1

let val= 5;
while(val!=0){
    console.log(val);
    val--;
}

//write a do while loop that prompts a user to enter their favorite tea type until they enter "stop" store each tea type in array named `teaCollection`.

// let teaCollection =[]
// let tea;
// do{
//    tea = prompt("Enter your favourite tea (type stop to finish)")
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }while(tea !=="stop")
// console.log(teaCollection)

//run the above code in browser as we cant use prompt in the vs code


//4. write a do while loop that adds numbers form 1 to 3 and stores the result in a variable named total.
 let total =0;
 let a=1;
 do{
 total += a;
 a++;
 }while(a<=3)
    console.log(total)
//5. write a for loop that multiplies each element in the array [2,4,6] by and stores the results in a new array named multipliedNumbers

let arr =[2,4,6]
let multipliedNumbers=[]
for(let j=0;j<arr.length;j++){
    multipliedNumbers[j] = arr[j]*2
}
console.log(multipliedNumbers)


//6 write a for loop  that lists all the cities in the array ["Paris","New york","Tokyo","London"] and stores each city in the new array names cityList

let cities =["Paris","New york","Tokyo","London"]
let cityList =[]
cities.forEach((city,index)=>{
    console.log(`city name ${city}`);
    cityList[index] = city;
});
console.log(cityList)