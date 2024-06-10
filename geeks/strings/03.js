

//  finding the sunstring present or not without the inbuilt functions

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
