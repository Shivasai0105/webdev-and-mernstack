let arr = [1,2,4,5,6,7]
console.log(arr);
console.log(arr.length);
arr.push(10);
arr.push("shiva")
console.log(arr);
console.log(typeof arr);
console.log(arr.join(" hello ")) //join: it adds the separator between the element instead of the comma we can use any thing

arr.pop();//removes the last element
console.log(arr);
console.log(arr.shift()) // removes retrives the first element
console.log(arr.unshift(5)) // insert new element at the beginning of the array and return the size of the array
let ar1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [11,12,13,14,15]
console.log(ar1.concat(arr2,arr3))
console.log(ar1); 
arr2.splice(1,2); // it takes the arguments of starting index and an deletion no of elements count and it deletes
console.log(arr.reverse()); 
console.log(arr2);
console.log(Array.from("shiva")); //converts it into the arrays