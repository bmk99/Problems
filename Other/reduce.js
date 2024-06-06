


//  ------link------------https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
// usage of reduce method
// Summarizing your values into a single value
// Grouping similar items together
// Removing duplicates from an array

console.log("toatal score ---------------")

  const scores = [1,2,3,4,5,6,5]
  scores.push(9)
  const totalScore = scores.reduce((accumulator,score)=>{
    return accumulator +=score

  },0)
  console.log({totalScore})


//  add the toatal price in the objects 

const items1 = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];

  
  const totalPrice1 = items1.reduce((accumulator,item)=>{
    console.log({accumulator})
    console.log({item})
    return accumulator += item.price
  },0)

  console.log({totalPrice1})


// n------------------------

console.log("grouped data -------------------")
//  grouping the data in terms of category 
const items2 = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];
  

  const grouped = items2.reduce((accumulator,item)=>{
    console.log({accumulator})
    console.log({item})
    const category = item.category
    //  we have use bracket notation when it was used dynamically 
    if(!accumulator[category]){
        accumulator[category] =[]
    }
    accumulator[category].push(item.name)
    return accumulator

  },{})

  console.log({grouped})


// removing the duplicate items in the array

console.log("remove duplicate -------------------------")
const items3 = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const uniqueItems =  items3.reduce((accumulator,item)=>{
    if(!accumulator.includes(item)){
        accumulator.push(item)
    }
    return accumulator

},[])

console.log({uniqueItems})


// One more thing before we conclude the article. In all examples above, we define 2 parameters for the callback function, but the reduce() method actually passes 4 arguments to the callback function:

// The accumulator value
// The item value
// The index of the current item in iteration
// The array from which you call the method itself
// The full syntax of the method is as follows:
console.log("all four arguments passed to the reducer ---------------")
const initialAccumulatorValue = 0
const items4 = [1,2,3,4,5,6]
const totalScore1 =items4.reduce((accumulator, item, index, array) => {
  // TODO: Define the process for each iteration here
  console.log({accumulator})
  console.log({item})
  console.log({index})
  console.log({array})
  return accumulator += item
}, initialAccumulatorValue)
// The full syntax of the reduce() method