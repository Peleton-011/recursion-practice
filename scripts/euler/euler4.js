import { setupInput } from "../input";

function setupEuler4() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(
		setupInput(getLargestPalindromeOfXLen, "Euler 4", "euler4")
	);

	return wrapper;
}

function getLargestPalindromeOfXLen(n) {
	return primesToFactors(
		[137, 73, 11, 7],
		3
	).value;
	return calculateTraversal([137, 73, 11, 7], [true, false, false, true]);
}

function primesToFactors(arr, maxlen) {
	const path = [true];
	const factors = arr.toReversed();
	const currFactors = [factors[0], 1];
	factors.shift();
	console.log(arr);

	const check = (n) => {
		console.log("Checking " + (n === 0 ? "left" : "rigth"));
		const productStr = String(currFactors[n] * factors[0]);
		console.log(
			currFactors[n],
			" * ",
			factors[0],
			" is ",
			currFactors[n] * factors[0]
		);
		console.log(productStr.length < maxlen + 1 ? "valid" : "too long");
		return productStr.length < maxlen + 1;
	};
	const turn = (n, isTemp) => {
		console.log("Turning " + (n === 0 ? "left" : "rigth"));
		path.push(n === 0);
		temp.push(isTemp);
		currFactors[n] *= factors[0];
		factors.shift();
	};

	const temp = [false];

	const left = 0;
	const right = 1;
	while (factors.length) {
		const checkLeft = check(left);
		const checkRight = check(right);

		if (checkLeft && checkRight) {
			console.log("turn idk left");
			turn(left, true);
		} else if (checkRight) {
			console.log("turn right");
			turn(right);
			continue;
		} else if (checkLeft) {
			console.log("turn left");
			turn(left);
			continue;
		} else if (!temp.includes(true)) {
			break;
		} else {
			const i = temp.reverse().indexOf(true);
			for (let j = 0; j < i + 1; j++) {
				temp.pop();
				path.pop();
			}
			turn(right);
		}
	}
	console.log(path);
	console.log(arr);
	console.log(currFactors);

    if(path.length !== arr.length) return { success: false, value: "Error, not possible" };
	return { success: true, value: calculateTraversal(arr.reverse(), path) };
}

function calculateTraversal(arr, choices) {
	let a = arr
		.filter((val, i) => choices[i])
		.reduce((prev, curr) => prev * curr, 1);
	let b = arr
		.filter((val, i) => !choices[i])
		.reduce((prev, curr) => prev * curr, 1);
	return [a, b];
}

function primeFactors(n) {
	const primes = [];
	const primeFactors = [];

	while (primes[primes.length - 1] < n || primes == 0) {
		primes.push(getNextPrime(primes));

		while (n % primes[primes.length - 1] === 0) {
			n /= primes[primes.length - 1];

			primeFactors.push(primes[primes.length - 1]);
		}
	}

	return primeFactors;
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

export { setupEuler4 };
