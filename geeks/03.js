// Given a number N find the prime factorization of the number.

// Example 1:

// Input:
//| N = 100
// Output:
// 2 2 5 5
// Explanation:
// 100 = 2 * 2 * 5 * 5


const primeFact = (num) =>{

    let n = num;
    let s = ""
    let arr =[]
        for(let i = 2;i<=n/2;i++){
            console.log("enter")
            if(n%i ==0){
                arr.push(i)
                console.log(arr)
                n = n / i 
                console.log(n)
                i = 1 
            }
        }
    arr.push(n)

    // --1
    // for creating a string using the for loop
    // for(let i = 0;i<arr.length;i++){
    //     console.log(`dsf ${arr[i]}`)

    //     s = s + arr[i] +" "
    //     console.log(s)
    // }
    // console.log(s)
    // return s

    // --2
    // returning a string from an array  ........ by using the join method
    return arr.join(" ")

}

const res = primeFact(100)
console.log(res)