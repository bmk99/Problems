//  given an array , generate from that output havbing the object habing even and odd 
// [1,2,3,5]
// {even :2,odd:9 }


let arr =[1,3,4,6,3,2,8]
let res = arr.reduce((acc,el) =>{
    // console.log(acc)
    if(el %2 ===0 ){
        acc['even'] += el
    }else{
        acc['odd'] += el
    }
    return acc



}, {odd: 0, even :0})
console.log(res)



const obj = {
    "length" : 0
}
console.log(Array.isArray(obj))
console.log(typeof obj)

if(obj !== null){
    console.log('nul')
}else{
    console.log('npo')
}