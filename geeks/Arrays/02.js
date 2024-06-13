//  count the number of zeroes present in the array

const noOfZeroes =(arr)=>{
   let index = arr.indexOf(0)
   return (index== -1 ? 0 : arr.length - index)
}
let arr =[1,1,1,1,1,1]
const res = noOfZeroes(arr)
console.log(res)

