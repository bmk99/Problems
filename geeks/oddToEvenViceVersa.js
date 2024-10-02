const arr =[1,2,3,4,5,6,7,8,9,10]

const res = arr.map((el)=> el %2 ==0 ? el -1 :el +1)
console.log(res)