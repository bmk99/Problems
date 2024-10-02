//  sum less than 40 

const ar =[10,20,30,40,50,60,70]

const res = ar.reduce((acc,el)=>{
    if(el < 40){
        acc += el
    }
    return acc
},0)

console.log(res)
