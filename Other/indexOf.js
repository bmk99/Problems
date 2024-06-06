// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// console.log("Welcome to Programiz!");

// n we can't call the array elements with negative value it will give undefined

const array = [1, 2, 3, 4, 5];

// Accessing the last element using positive index
console.log(array[array.length - 1]); // Output: 5
// console.log(array[-1])// undefined value

// Accessing the second-to-last element using a negative index equivalent
console.log(array[array.length - 2]); // Output: 4

//
// n to find the whether that value is present or not in the array
const array1 = [1, 2, 1, 3, 14, 5, 9, 9];

const elementToFind1 = 10;
const elementToFind2 = 14;
// console.log(array1[-1])
const index1 = array1.indexOf(elementToFind1);// when that index is not present it return -1
const index2 = array1.indexOf(elementToFind2);// when index is present it return index 
const index3 = array1.findIndex(x => x==3)


console.log({index1});
console.log({index2});
console.log({index3})
if (index1 !== -1) {
  console.log(`Element ${elementToFind1}} found at index ${index1}}`);
} else {
  console.log(`Element ${elementToFind1} not found in the array`);
}
if (index2 !== -1) {
  console.log(`Element ${elementToFind2} found at index ${index2}`);
} else {
  console.log(`Element ${elementToFind2} not found in the array`);
}

function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the element is not already in the new array
    const elementCheck = uniqueArray.indexOf(arr[i]);
    console.log("elementCheck", elementCheck);
    console.log("normal", uniqueArray);
    if (elementCheck === -1) {
      // console.log(uniqueArray.indexOf(arr[i]))
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const originalArray = [1, 2, 3, 4, 2, 5, 1, 6, 7, 7, 8];
const newArray = removeDuplicates(originalArray);

console.log(newArray);
