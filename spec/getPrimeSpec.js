'use strict'
const getPrimes =  require("../app/getPrimes.js");

describe("testing for proper functionality", function(){
	describe("Case for a valid input", function(){
		it("should return [2, 3, 5] for primes numbers between 0 and 5", function(){
			expect(getPrimes.getPrimes(5)).toEqual([2, 3, 5]);
		});

		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ] for primes numbers between 0 and 23", function(){
			expect(getPrimes.getPrimes(23)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]);
		});

		it("should return [ 2, 3, 5, 7, 11, 13 ] for primes numbers between o and 15", function(){
			expect(getPrimes.getPrimes(15)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
		});

		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83 ] for primes numbers between 0 and 88", function(){
			expect(getPrimes.getPrimes(88)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83 ]);
		});

		it("should return [2, 3, 5, 7] for primes numbers between 0 and 8", function(){
			expect(getPrimes.getPrimes(8)).toEqual([2, 3, 5, 7]);
		});
	})

	describe("case for invalid input", function(){
		it("should return 'Negative numbers cannot be a prime' for numbers less or equal to zero", function(){
			expect(getPrimes.getPrimes(-4)).toEqual("Negative numbers cannot be a prime");
		});

		it("should return '1 is not a prime number' for 1", function(){
			expect(getPrimes.getPrimes(1)).toEqual("1 is not a prime number");
		});

		it("should return 'Negative numbers cannot be a prime' for numbers less or equal to zero", function(){
			expect(getPrimes.getPrimes(0)).toEqual("Negative numbers cannot be a prime");
		});
	});

});
