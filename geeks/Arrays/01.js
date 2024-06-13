//  find if the array is sorted or not 

const sortedArr =(arr,n) =>{
    let arr1 = [...arr]
    arr1.sort((a,b) => a-b)
    // console.log(arr1)
    // console.log(arr1.toString())
    // console.log(arr1.join(''))
    // console.log(arr1)
    if(arr1.join("") == arr.join("")){
        return true
    }else{
        return false
    }
// 
}
let array = [10,20,30,40]
let n = array.length
const res = sortedArr(array,n)
console.log(res)