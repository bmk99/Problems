//  find the sum betwwen two numbers 

const sum = (n,a)=>{
    let res=0
    for(let i =n;i<a;i++){
        res += i
        
    }

    return res;

}

const result = sum(10,30)
console.log(result)