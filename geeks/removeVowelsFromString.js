//  remove all vowels from a string....

const removeVowels = (str) =>{
    let vowels ='aeiou'
    let s = ''
    for(let char of str){
        if(vowels.includes(char)){
            continue;
        }else{
            s += char
        }
    }
    return s

}
let  str = "aeiousaaaaaaaaaaaaadsfaaaaaaaaafdjwueuioiyuwr "
console.log(removeVowels(str))