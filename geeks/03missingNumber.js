function missingNumbers(array) {
  let missing = [];
  for (let i = 0; i < array.length - 1; i++) {
    let different = array[i + 1] - array[i];
    if (different > 1) {
      for (let j = 1; j < different; j++) {
        missing.push(array[i] + j);
      }
    }
  }
  return missing;
}
console.log(missingNumbers([1, 4, 6, 8, 12]));

//   const

function missingNumbers(ar) {
  const res = ar.reduce((acc, el, i, arr) => {
    let dif = arr[i + 1] - el;
    if (dif > 1) {
      for (let j = 1; j < dif; j++) {
        acc.push(el + j);
      }
    }
    return acc;
  }, []);
  return res;
}
console.log(missingNumbers([1, 4, 6, 8, 12]));



const date = new Date();
const date2 = new Date(0);
console.log(date);
console.log(date2);
console.log(date === date2);

try {
  Promise.resolve(
    Promise.reject(-1)
      .catch((e) => {
        console.log("inside",e);
        return e
      })
  ).then((res) => console.log("after",res));
} catch (e) {
  console.log(e);
} finally {
  console.log("final");
}


let arr =[1,2,24,5,5]
arr.gret = "hello world"
console.log(arr.length)
console.log(arr)
console.log(arr.gret)


