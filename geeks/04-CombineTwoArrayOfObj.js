const arr1 = [
  { id: 1, name: "kiran" },
  { id: 2, name: "sra" },
  { id: 3, name: "kaaa" },
  { id: 7, name: "kaaa" },
  { id: 9, name: "kaaa" },
];

const arr2 = [
  { id: 1, city: 100 },
  { id: 2, age: 35 },
  { id: 4, age: 67 },
  { id: 9, age: "kaaa" },
  { id: 24, age: 35 },
  { id: 42, age: 67 },
  { id: 27, age: 35 },
  { id: 49, age: 67 },
];

// Q.Combine the two arrays ...output should be like this
const output = [
  { id: 1, name: "kiran", city: 100 },
  { id: 2, name: "sra", age: 35 },
  { id: 3, name: "kaaa" },
  { id: 4, age: 67 },
  { id: 7, name: "kaaa" },
  { id: 9, name: "kaaa", age: "kaaa" },
  { id: 24, age: 35 },
  { id: 27, age: 35 },
  { id: 42, age: 67 },
  { id: 49, age: 67 },
];

// .. way 1
let obj2 ={1:  { id: 49, age: 67 },undefined}
console.log(obj2[2])
obj2[2]   = {...obj2[2], name : "kira"}
console.log(obj2)

const res = [...arr1, ...arr2].reduce((acc, arr) => {
  console.log(acc[arr.id])
  acc[arr.id] = { ...acc[arr.id], ...arr };
  return acc;
}, {});

console.log(Object.values(res));

// .. way 2
let obj = {};
arr1.forEach((ele) => {
  obj[ele.id] = ele;
});

arr2.forEach((ele) => {
  if (Object.keys(obj).includes(`${ele.id}`)) {
    obj[ele.id] = { ...obj[ele.id], ...ele };
  } else {
    obj[ele.id] = ele;
  }
});

console.log(Object.values(obj));

// 3rd way ...................
const out = [...arr1, ...arr2].reduce((acc, ele) => {
  let flag = false;

  for (let i = 0; i < acc.length; i++) {
    if (acc[i].id == ele.id) {
      acc[i] = { ...acc[i], ...ele };
      flag = true;
      break;
    }
  }

  if (!flag) {
    acc.push(ele);
  }
  return acc;
}, []);
console.log(out);

