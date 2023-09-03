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
		factors.addFactorList(getFactorList(i, primes));
	}

    console.log(factors.list)

	return factors.list.reduce(
		(acc, factor) => acc * factor.num ** factor.exp,
		1
	);
}

class FactorList {
	list = [];

	addFactor(prime, exponent) {
		this.list.push(new Factor(prime, exponent));
	}

	addFactorList(newList) {
        console.log(newList)
		const oldPrimes = this.list.map((factor) => factor.num);
		const newPrimes = newList.list.map((factor) => factor.num);

		newPrimes.forEach((p, newIndex) => {
			const index = oldPrimes.indexOf(p);
			if (index < 0) {
				this.addFactor(
					newList.list[newIndex].num,
					newList.list[newIndex].exp
				);
				return;
			}
			this.list[index].exp =
				this.list[index].exp > newList.list[newIndex].exp
					? this.list[index].exp
					: newList.list[newIndex].exp;
		});
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

function getFactorList(n, primes) {
	const factors = new FactorList();

	primes.forEach((p) => {
		let exp = 0;
		while (n % p === 0) {
			n /= p;
			exp++;
		}
		if (exp > 0) factors.addFactor(p, exp);
	});

	return factors;
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
