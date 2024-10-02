function duplicate(arr) {
  let obj = {};
  let out = [];
  for (let i of arr) {
    if (!Object.keys(obj).includes(`${i}`)) {
      obj[i] = [];
      obj[i].push(i);
    } else {
      out.push(i);
      obj[i].push(i);
    }
  }
  console.log(obj);
  return out;
}
console.log(duplicate([1, 1, 1, 1, 1, 3, 5, 5, 6, 7]));

let obj ={'ki':"anme",1:'fh'}
if(obj.hasOwnProperty(1)){
    console.log('he')
}