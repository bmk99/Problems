
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]










// sparese the array
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]


const reacts = [
    {
      react: "like",
      count: 1,
      users: [
        {
          like: "like",
          name: "anjitha",
          reactBy: {
            _id: "anjitha",
          },
        },
      ],
    },
    {
      react: "love",
      count: 0,
      users: [],
    },
    {
      react: "haha",
      count: 0,
      users: [],
    },
    {
      react: "sad",
      count: 0,
      users: [],
    },
    {
      react: "wow",
      count: 0,
      users: [],
    },
    {
      react: "angry",
      count: 2,
      users: [
        {
          react: "angry",
          name: "kiran",
          reactBy: {
            _id: "kiran",
          },
        },
        {
          react: "angry",
          name: "harsha",
          reactBy: {
            _id: "harsha",
          },
        },
      ],
    },
  ];
const data = reacts.map(react => {
    return (
        react.count > 0 && (
            react.users.slice(0,1).map(user =>user.name )
        )
    )
})
console.log(data)

// ---------------2ty
const data2 = reacts.filter(react => react.count !== 0)
console.log(data2)
const slicedData = data2.slice(0,1).map(react=> react.users.map(user=> user.namec))
console.log(slicedData)
// ----------------3ty

const data3 = reacts.reduce((accumulator,react)=> {
react.users.map(user=> accumulator.push(user))
return accumulator
},[])
console.log(data3)
const slicedData2 = data3.slice(0,2).map(data => data.name)
console.log(slicedData2)