const array1 = [1, 2, 1, 3, 14, 5, 9, 9];

const elementToFind1 = 10;
const elementToFind2 = 14;

const index3 = array1.findIndex(x => x==elementToFind1) // call function passed as the argument // function return true then it stops and return that value index
const index4 = array1.findIndex(x => x==elementToFind2)

console.log({index3}) //  return -1 because 10 element is not present
console.log({index4})// return index number 

// -----------------------------------------

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    
    console.log({num},{idx},{arr})
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
  
console.log({firstTrough}); // 1


