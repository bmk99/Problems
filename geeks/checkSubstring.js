

//  finding the sunstring present or not without the inbuilt functions
//  --i think sol form gpt... only 

function strstr(s, x) {
    // Get lengths of the main string and the substring
    const lenS = s.length;
    const lenX = x.length;

    // Iterate through the main string
    for (let i = 0; i <= lenS - lenX; i++) {
        let j;
        
        // Check if substring matches
        console.log(`---------`)
        for (j = 0; j < lenX; j++) {
            console.log(s[i+j])
            console.log(x[j])
            if (s[i + j] !== x[j]) {
                console.log('brak')
                break;
            }
        }

        // If the whole substring matched
        if (j === lenX) {
            console.log(`jis ${j}`)
            return i;
        }
    }

    // If no match was found
    return -1;
}

// Example usage:
// console.log(strstr("GeeksForGeeks", "Fr"));  // Output: -1
console.log(strstr("GeeksForyes", "es")); // Output: 5
// console.log(strstr("hello world", "world")); // Output: 6
// console.log(strstr("hello", "hello"));       // Output: 0
// console.log(strstr("test", "st"));           // Output: 2

console.log("geek for geeks".includes("eks"))


const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

const ratings = [5, 4, 10];
let sum = 0;

const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// const res = ratings.map(async (ele) => sum = await sumFunction(sum, ele))

// console.log(res1.then(res=> console.log(res)) )
// console.log(sum);
// console.log(res1)
async function check() {
    let sum = 0

    var res1 =await Promise.all( ratings.map(async (ele) => {
        sum  = await sumFunction(sum, ele)
        return sum
   
   }))
   console.log(res1)
}
check()
console.log(out)
// Naively expected output: 14
// Actual output: 0
const ratings = [5, 4, 10];

const sumFunction = async (a, b) => a + b;
async function check() {
    let sum = 0;

    await ratings.reduce(async (acc, ele) => {
        // Wait for the previous promise to resolve
        await acc;
        console.log(acc)
        // Update the sum with the current element
        sum = await sumFunction(sum, ele);
    }, Promise.resolve());

    console.log(sum); // This will log the final sum
}

check();
