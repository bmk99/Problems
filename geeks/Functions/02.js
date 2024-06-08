// Factorial of a number
const factoriala = (num) => {
  let a = 1;
  let s = num;
  console.log(s);
  while (s >= 1) {
    a = a * s;
    // console.log(a)
    s = s - 1;
    // console.log(s)
  }
  return a;
};

const res = factoriala(5);
console.log(res);
