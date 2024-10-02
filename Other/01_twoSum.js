// for finding the key in obj
console.log("Try programiz.pro");

const ob = {};

ob[2] = 1;
ob["name"] = "kiran";
console.log(ob);
if (2 in ob) {
  console.log("ha");
}

if (Object.keys(ob)[0] == "2") {
  console.log(Object.keys(ob)[0]);
}
if ("city" in ob) {
  console.log("noo");
}
console.log("soultion ..............");
//  solutin ...............

var twoSum = function (arr, target) {
  const nums = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (complement in nums) {
      return [nums[complement], i];
    }

    nums[arr[i]] = i;
  }

  return [-1, -1];
};
const arr = [2, 7, 11, 22];
const target = 9;
console.log(twoSum(arr, target));
