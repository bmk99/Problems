function prime(n) {
	let flag = true;

	for(let i = 2; i < Math.ceil(n / 2); i++){
		if(n % i == 0){
		 flag = false;
		 break;
		}
	}
	return flag;

}
console.log(prime(23))