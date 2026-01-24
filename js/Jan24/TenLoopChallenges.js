/* 1. write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds "chai"  
store all teas before chai in a new array names selectedTeas*/

let teas = ["Green tea", "Black tea", "Chai", "Oolong tea"]
let selectedTeas =[]
for(let i=0;i<teas.length;i++){
    if(teas[i] !=="Chai"){
        selectedTeas.push(teas[i]);
    }else{
        break;
    }
}
console.log(selectedTeas)
/* Challenge 2

Write a for loop that:

Iterates through the array
["London", "New York", "Paris", "Berlin"]

Skips "Paris"

Stores all other cities in a new array named visitedCities */

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities =[]
for(let i=0;i<cities.length;i++){
    if(cities[i]==="Paris"){
        continue;
    }
    visitedCities.push(cities[i]); 
    
}
console.log(visitedCities)

/* Challenge 3

Use a for...of loop to:

Iterate through the array
[1, 2, 3, 4, 5]

Stop when the number 4 is found

Store all numbers before 4 in a new array named smallNumbers */
let arr =[1,2,3,4,5]
let smallNumbers=[]
for (const i of arr) {
    if(i==4){
        break;
    }
    smallNumbers.push(i);
}
console.log(smallNumbers)


/* Challenge 4

Use a for...of loop to:

Iterate through the array
["Chai", "Green tea", "Herbal tea", "Black tea"]

Skip "Herbal tea"

Store the remaining teas in an array named preferredTeas */
let tea = ["Chai", "Green tea", "Herbal tea", "Black tea"];

let preferredTeas = []
for (const t of tea) {
    if(t==="Herbal tea"){
        continue;
    }
    preferredTeas.push(t);
}
console.log(preferredTeas);


/* Use a for...in loop to:

Iterate through an object cityPopulation

Stop the loop when the city "Berlin" is encountered

Store all previous city–population pairs in a new object named newCityPopulation
let citiesPopulation ={
"London":8900000,
"New York":840000,
"Paris":2200000,
"Berlin":350000
};
*/
let citiesPopulation ={
"London":8900000,
"New York":840000,
"Paris":2200000,
"Berlin":350000
};
let newCityPopulation={}
for (const city in citiesPopulation) {
    if(city==="Berlin"){
        break;
    }
    //key-value
    newCityPopulation[city] = citiesPopulation[city]
}
console.log(newCityPopulation)


/* Challenge 6

Use a for...in loop to:

Iterate through an object cityPopulation

Skip cities with population below 3 million

Store the remaining cities in a new object named largeCities */
let worldCities={
    "Sydney":500000,
    "Tokyo":900000,
    "Berlin":3500000,
    "Paris":2200000
};
let largeCities ={}

for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city]=worldCities[city]
    
    
}
console.log(largeCities)

/* Challenge 7

Use a forEach loop to:

Iterate through the array
["Earl Grey", "Green tea", "Chai", "Oolong tea"]

Stop processing when "Chai" is found

Store all teas before "Chai" in an array named availability

⚠️ break is not allowed here — use correct logic. */


let teaCollection = ["Earl Grey", "Green tea", "Chai", "Oolong tea"]
let teaStorage = []
let stop = false;
teaCollection.forEach(tea => {
    if (tea === "Chai") stop = true;
    if (!stop) teaStorage.push(tea);
});

console.log(teaStorage);


/* Challenge 8

Use a forEach loop to:

Iterate through the array
["Berlin", "Tokyo", "Sydney", "Paris"]

Skip "Sydney"

Store the remaining cities in an array named travelledCities */

let myWorldCities =["Berlin", "Tokyo", "Sydney", "Paris"]
let travelledCities =[]
myWorldCities.forEach(city => {
    if(city==="Sydney"){
        return;
    }
travelledCities.push(city)
});
console.log(travelledCities);

/* Challenge 9

Write a for loop that:

Iterates through the array
[2, 5, 7, 9]

Skips the value 7

Multiplies the remaining numbers by 2

Stores the result in a new array named doubleNumbers */

let nums =[2,5,7,9]
let doubleNumbers =[]
for(let i=0;i<nums.length;i++){
    if(nums[i]===7){
        continue;
    }
    doubleNumbers.push(nums[i]*2);
}
console.log(doubleNumbers);


/* Challenge 10

Use a for...of loop to:

Iterate through the array
["Chai", "Green tea", "Black tea", "Jasmine tea", "Herbal tea"]

Stop the loop when the length of the current tea name is greater than 10

Store the iterated teas in an array named shortTeas */

let teaArray = ["Chai", "Green tea", "Black tea", "Jasmine tea", "Herbal tea"]
let shortTeas =[]
for (const tea of teaArray) {
    if(tea.length>10){
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);

