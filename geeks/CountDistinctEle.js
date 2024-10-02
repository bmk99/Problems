//  count the distinct elements..........
// s = 'aasaadds'
// {a : 4,s :1,d:2}

const s = 'aaddsseewssaa'

const res = s.split("").reduce((acc, ele)=>{
    if(!acc[ele]){
        acc[ele]  = 0
    }
    acc[ele] += 1
    return acc


}, {})

console.log(res)