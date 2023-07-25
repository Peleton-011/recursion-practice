import { setupInput } from "../input";

function setupEuler4() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(largestPrimeFactor, "Euler 4", "euler4"));

	return wrapper;
}

function largestPrimeFactor(n) {
	const primes = [];
	const primeFactors = [];

	while (primes[primes.length - 1] < n || primes == 0) {
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

export { setupEuler4 };
