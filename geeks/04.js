// Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other. Strings a and b can only contain lower case alphabets.

//| Note:-

// If the strings are anagrams you have to return True or else return False

// |s| represents the length of string s.

// Example 1:

// Input:a = geeksforgeeks, b = forgeeksgeeks
// Output: YES
// Explanation: Both the string have same characters with
//         same frequency. So, both are anagrams.

let a = "helloha";
let n = "hahellos";
let k = a.split("");
console.log(`convert into the array ${a.split("")}`);
console.log(`k is ${k}`);
let r = a.split("").sort();
console.log(`sorting the split  ${r}`);
let h = a.split("").sort().join("");
console.log(`finally sorting the string ${h}`);

let i = n.split("").sort().join("");

console.log(h.includes(i));

//     Given two strings which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string.

// Example 1:

// Input:
// s1 = abcd
// s2 = badce
// Output:
// e

// for this we need to add the ascii values of the two sritng ;

let s = "aelloha";
let d = "haaellos";
let check = "ABCDEF";
console.log("A".charCodeAt());
console.log(check.charCodeAt(0));



console.log(String.fromCharCode(65))
// console.log(first);
const comp = (a, b) => {
  let s1 = 0;
  for (let j = 0; j < a.length; j++) {
    s1 = s1 + a.charCodeAt(j);

  }
  console.log(s1);
  let s2 = 0
  for(let j = 0;j<b.length;j++){

    s2 = s2 + b.charCodeAt(j)

  }
  console.log(s2)
  let diff = s2 -s1 

  return String.fromCharCode(diff)
};

const res = comp(s, d);
console.log(res)


//  another way to erite 


// ------------

const extraChar =() =>{

  let p = "aelloha";
  let q = "haaellos";
  for(let char of q){
  
    if(!p.includes(char)){
      console.log(char)
      return char
    }else{
      p.replace(char,"")
    }
  }
} 





// ------------ to find the characters between two letters

const characters = (c1,c2)=> {
    let arr =[]
    for(let i =c1.charCodeAt(0);i<=c2.charCodeAt(0);i++){
        arr.push(String.fromCharCode(i))
        
    }
    console.log(arr.join(" "))
    //your code goes here
}
characters("h","u")


// -----------
process.stdout.write("1st line") // it wouldn't add a new line 
process.stdout.write("2 nd line ")


console.log("3rd line ")// it will add a new line at the end of the statement .. 
console.log(`4 th line `)
console.log(`5 th line `)




// let k = s1.split("").sort("").join("")
// let s = s2.split("").sort("").join("")
// return s[s.length-1]
// console.log(a.split("").sort().join(''))

//  bu using the loops.......from geeks for geeks.......
// let sortString = (str) => {
//     return str.split('').reduce((sortedString, char) => {
//         let inserted = false;
//         for (let i = 0; i < sortedString.length; i++) {
//             if (char < sortedString[i]) {
//                 sortedString = sortedString.slice(0, i) + char + sortedString.slice(i);
//                 inserted = true;
//                 break;
//             }
//         }
//         if (!inserted) {
//             sortedString += char;
//         }
//         console.log(sortedString)
//         return sortedString;
//     }, '');
// }

// console.log("Sorted String: ");
// console.log(sortString("qwertyuiop"));
