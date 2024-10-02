//  mask characters with passed values........


// 1231341251235435 -> mask last 4 characters -> 123134125123####

let maskCharacters =(s,mask) =>{
    console.log(s)
    for(let i =(s.length- mask);i< s.length;i++){
        console.log(s[i]);
        s[i] = "#"
    }
    return s.join(''); 


}

let str = 123141276
console.log(str.toString().split(""))
let maskNumber = 4
let s = str.toString().split('')
console.log(maskCharacters(s,maskNumber))


// let res2 = s.slice(0, s.length - maskNumber).join("")
// let res = (s.splice(str.length -4), 4,"#".repeat(4))
// console.log( res2+ res)

console.log(str.length) // undefined..............
let end =  ("#".repeat(maskNumber))
let res3 = s.slice(0, s.length - maskNumber).join("") + end
console.log(res3)
