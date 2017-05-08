'use strict'
const getPrimes = (range) => {
	let primes = [2, 3];
	const checkPrime = (range) => {
		let rangeIsPrime;
		let counter;
		for(counter = 2; counter < range; counter++) {
			if(rangeIsPrime % counter === 0) {
				rangeIsPrime = false;
				break;
			}
			else{
				rangeIsPrime = true;
			}
		}
		return rangeIsPrime;
	};
	if (range === 1) {
		return "1 is not a prime number";
	}
	else if (range === 2) {
		return [range];
	}
	else if (range === 3) {
		return [range];
	}
	else if(range <= 0) {
		return "Negative numbers cannot be a prime";
	}
	else {
		let i;
		for(i = 4; i<= range; i++) {
			if(checkPrime(i) === true) {
				primes.push(i);
			}
		}
		return primes;
	}
}
module.exports = {
	getPrimes: getPrimes
};