// let mess = "hello ha..";
// let s = "";
// for (let char of mess) {
//   s = char + s;
// }
// console.log(s);

// // ---------------

// const panagrom = (e) => {
//   console.log(e);
//   // let e = k.toLowerCase().split("").sort().join("")
//   // let al ='abcdefghijklmnopqrstuvwxyz'
//   // let flag = true
//   let k = e.toLowerCase();
//   let arr = [];
//   // console.log(typeof e)
//   for (let char of k) {
//     if (char < "a" || char > "z" || arr.includes(char)) {
//       continue;
//     } else {
//       arr.push(char);
//     }n
//   }
//   console.log(arr);
//   let output = arr.length == 26 ? true : false;
//   return output;
// };
// let k =
//   "OqgPmuVccvfWDxHGSbqYtTPrpZJlrNSyhSmZVudpTvXZXIZlYGbEHKybgaVJuZvYYSxVvUtbaJladMtvNWsTdDiCgqkDfE";

// let res = panagrom(k);
// console.log(`res of pangaram is ${res}`);

// // for(let i =)
// -------------------------------------------------------
function panagram(str){

	if(str.length < 26) return false;
	let s = str.toLowerCase() 
    let val = 'abcdefghijklmnopqrstuvwxyz'
	let flag = true;
	for(let char of s){
		if(val.includes(char)){
			continue;
		}else{
			flag = false;
			break;

		}
	}
	return flag;
	
} 

console.log(panagram("abcdefghijklmnopqrstuvwxyz"))