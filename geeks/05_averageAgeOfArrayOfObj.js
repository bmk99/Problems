const family = [
    {
        name : "emp1", 
        age : 20
    },
    {
        name : "emp2", 
        age : 12
    },
    {
        name : "emp3", 
        age : 34
    },
    {
        name : "emp4", 
        age : 65
    },
    {
        name : "emp5", 
        age : 34
    },
    {
        name : "emp6", 
        age : 87
    },
]

const res = family.reduce((acc,ele)=>{
    if(ele?.age){
        acc += ele.age
    }
    return acc

},0)
console.log(res)
console.log(Math.floor(res/4))