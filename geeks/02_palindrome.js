//  find either the number is palindrome or not ................
// ex : madam
// if we reverse the string it should be the same; 


function palindrom(str){

    let s = str.toLowerCase(),
    flag = true,
    len = str.length;
    
    for(let i = 0; i < Math.floor(str.length/2); i++){
        if(s[i] == s[(len-1)-i]){
            continue;
        }
        flag = false;
        break;
    }

    return flag;
    
}
console.log(palindrom("12331"));
console.log(palindrom("Madam"));