let arr = [1,13,5,7,11];
// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)

    
// }

let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr)

const greaterThanSeven = (e)=>{
    return e>7
}
console.log(newArr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,6,5]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red));