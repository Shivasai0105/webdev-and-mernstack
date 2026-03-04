//merge arrays 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]   

//copying arrays

const user = {name: "Sam", age: 22};

// change age to 23 without mutating original
const updatedUser = {...user, age: 23};
console.log(updatedUser); // Output: {name: "Sam", age: 23}
console.log(user); // Output: {name: "Sam", age: 22} - original object remains unchanged

//rest operator

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9

function displayUserInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}
displayUserInfo("Alice", 30, "Reading", "Traveling", "Cooking");
// Output:
// Name: Alice, Age: 30
// Hobbies: Reading, Traveling, Cooking