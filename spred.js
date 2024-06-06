// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
https://www.geeksforgeeks.org/how-to-remove-a-key-from-javascript-object/
console.log("Welcome to Programiz!");

const arr1 = {tasks:[{id:1,name:"kirya",age:23},{id:2,name:"kria",age:34}],userId:1234}



function todo(id){
    return({
        ...arr1,
        tasks:arr1.tasks.map(task=>task.id === id?({...task,age:45}):task)
    })
}


const a2 = [1,2,43,4,5,5]
const a5 = [...a2,1,2,43,4,5,5]
const a3 = {id:1,name:"kirya",age:23}
let a4 ={...a3,age:43,city:"hyderabad"}
const a1 = todo(6)
console.log(a1)
console.log(a4)
console.log(a5)


const arr2 =[
    
{react: 'love', count: 2, users: [{name:"kiran"},{name:"anjitha"}]},
{react: 'haha', count: 1, users:[{name:"harsha"}] },
{react: 'like', count: 0},
{react: 'sad', count: 0},
{react: 'wow', count: 0} ,
{react: 'angry', count: 0},
]

// console.log(arr2)

const arr3 = [...arr2]
const index1 = 1
arr3[index1] = {...arr3[index1], count:arr3[index1].count -1,react:"haha"}
delete arr3[index1].users
arr3.map((obj)=> console.log(obj))


