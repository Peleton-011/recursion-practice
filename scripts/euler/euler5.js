import { setupInput } from "../input";

function setupEuler5() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(smallestMultipleUnder, "Euler 5", "euler5"));

	return wrapper;
}

function smallestMultipleUnder(n) {
	const factors = new FactorList();

	const primes = primeNumbersUnder(n);
	primes.forEach((p) => factors.addFactor(p, 1));

	for (let i = 2; i < Number(n) + 1; i++) {
        if (primes.indexOf(i) >= 0) {
            continue;
		}
        
	}
}

class FactorList {
	list = [];

	addFactor(prime, exponent) {
		this.list.push(new Factor(prime, exponent));
	}

	product() {
		return this.list.reduce(
			(acc, factor) => acc * factor.num ** factor.exp,
			1
		);
	}
}

class Factor {
	constructor(prime, exponent) {
		this.num = prime;
		this.exp = exponent || 1;
	}

	setExponent(n) {
		this.exp = n;
	}
}

function primeNumbersUnder(n) {
	const primeList = [2];
	console.log(n);
	while (primeList[primeList.length - 1] <= n) {
		// console.log(primeList[primeList.length - 1])
		primeList.push(getNextPrime(primeList));
	}
	primeList.pop();
	return primeList;
}

function getNextPrime(curr) {
	if (curr.length < 1) return 2;
	//TODO improve this function

	let last = curr[curr.length - 1];

	while (curr.some((prime) => last % prime === 0)) {
		last++;
	}

	return last;
}

export { setupEuler5 };
