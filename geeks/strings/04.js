//  palindrome.....
const palindrome = (s) =>{
    let i = 0;
    let j = s.length-1
    let len = s.length %2 ==0 ? Math.floor(s.length/2)-1 : Math.floor(s.length/2)-1
     console.log(len)
    let flag = false;
    while(i<=len ){
        if(s[i] == s[j]){
            console.log(`${s[i]} ,, ${s[j]}`)
            flag = true
    
        }else{
            flag = false
            break
            
        }
        i++;
        j--;

    }
    // return true
    return flag
}
let message = "hasasleh"
const res = palindrome(message)
console.log(`res is res ${res}`)