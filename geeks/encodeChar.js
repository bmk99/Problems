// ṭo create a secret code;\

//  encode by chars -> 2 .
// abcde -> cdefh




const encode = (str)=>{
    let s =''
    for (let char of str){
        console.log(char)
        let n = char.charCodeAt()
        console.log(n)

        s += String.fromCharCode(n+2)
    }
    return s

}
let str = 'ABCDEF'
console.log(encode(str))