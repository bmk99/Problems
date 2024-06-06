const comment ={
    name:"",
    age : 25 
}
console.log(comment?.name || "hey")

const name =" ehalkdjfsl dasfsdal     "
console.log(name.trim())

let img;
console.log(img ? "kiran":"nothing")

const parent  = ''
const parent1 = null // null is true
const bool = parent && parent // results false 
const bool1 = parent1 && parent1 // results false 
console.log(parent1 ? `null ${parent1} shows ` : `shows false`)
console.log(parent ? `empty ${parent} shows ` : `shows false `)
console.log(bool ? "shows empty" :"doesn not shows empty")
console.log(bool1 ? "shows nulll" :"doesn not shows null")
