import { setupInput } from "../input";

function setupEuler3() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(largestPrimeFactor, "Euler 3", "Euler3"));

	return wrapper;
}

function largestPrimeFactor(n) {
	const primes = [];
	const primeFactors = [];

    console.log(getNextPrime(primes))
	while (primes[primes.length - 1] < n) {
		primes.push(getNextPrime(primes));

		if (n % primes[primes.length - 1] === 0) {
			n /= primes[primes.length - 1];

			primeFactors.push(primes[primes.length - 1]);
		}
	}

	return primeFactors[primeFactors.length - 1];
}

function getNextPrime(curr) {
    if (curr.length < 1) return 2
	//TODO improve this function

	let last = curr[curr.length - 1];

    while (curr.some((prime) => last % prime === 0)) {
        last++;
    }

    return last
}

export { setupEuler3 };
