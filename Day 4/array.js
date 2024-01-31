let fruits = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
let slicedFruits = fruits.slice(1, 4);

// console.log(slicedFruits); 
// console.log(fruits); 


let removedFruits = fruits.splice(1, 2, 'mango', 'pear');

console.log(removedFruits); 
console.log(fruits);
