// find the employess having experience > 3

const employess = [
    {
        name : "emp1", 
        experience : 5
    },
    {
        name : "emp2", 
        experience : 12
    },
    {
        name : "emp3", 
        experience : 1
    },
    {
        name : "emp4", 
        experience : 8
    },
    {
        name : "emp5", 
        experience : 2
    },
    {
        name : "emp6", 
        experience : 3
    },
]


const res = employess.filter(emp => emp.experience > 3)
console.log(res)