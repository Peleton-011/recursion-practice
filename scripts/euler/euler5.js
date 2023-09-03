import { setupInput } from "../input";

function setupEuler5() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(smallestMultipleUnder, "Euler 5", "euler5"));

	return wrapper;
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
