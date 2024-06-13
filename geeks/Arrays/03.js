/*
You are given a list numbers that contains integers. You need to return average of the non negative integers.

Example 1:

Input:
|numbers = [-12, 8, -7, 6, 12, -9, 14]
Output:
avg = 10.0
Explanation: The positive numbers are 
8 6 12 14. The sum is 8+6+12+14 = 40, 
Average = 40/4 = 10.0
*/


const ave = (arr) =>{
    let sum =0
    for(let num of arr){
        if(num > 0){
            sum += num
        }


    }
    return sum

}
let array =[1,2,4,-23,23,-22,-12,2,3]
const res = ave(array)
console.log(res)