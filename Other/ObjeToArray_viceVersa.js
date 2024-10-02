const obj = {
    length :0,
    name : "ktian", 
    city : "hyderabad", 
    age : 26
}

let keys = Object.keys(obj)
let values = Object.values(obj)
let both = Object.entries(obj)
let both2 = Array.from(Object.entries(obj))

console.log(Object.keys(obj).length)


console.log({keys})

console.log({values})

console.log({both})

console.log({both2})


let originalArray = [1, 2, { a: 3 }];
let deepCopy = JSON.parse(JSON.stringify(originalArray));
console.log(JSON.stringify(originalArray))

deepCopy[2].a = 42;

console.log(originalArray[2].a); // 3
console.log(deepCopy[2].a);      // 42



// syntax : Array.from("arraylike or any iterable", `map function`,` thisArg`)
// this is 
let fileList = {
    0: { name: 'Screenshot (36).png'},
    1: { name: 'Screenshot (37).png'},
    2: { name: 'Screenshot (38).png'},
    length: 3
  }
  
// Given an array-like object (fileList)
const fileArray = Array.from({ length: fileList.length }, (_, index) => fileList[index]);

console.log({fileArray});


const fileArray2 = Array.from(fileList)
console.log({fileArray2})


const array3 = Array.from({length:4},(ele,index)=>{return  {index : `${ele} to -> index - ${index}`}})

console.log({array3})

// | ` _ ` it indicates that we are simply ingoring that one...
const array4 = Array.from({length:4}, (_,index)=> `${_} to ->index ${index}`)
console.log(array4)


//  we can restrict the the length of  array like objects.

let fileList1 = {
    0: { name: 'Screenshot (36).png'},
    1: { name: 'Screenshot (37).png'},
    2: { name: 'Screenshot (38).png'},
    length: 2
  }

console.log(fileList1['2'])
  