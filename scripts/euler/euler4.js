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
	n = Number(n);
	let currPal = ((len) => {
		let maxNum = "";

		for (let i = 0; i < len; i++) {
			maxNum += "9";
		}
		console.log("max: ", String(Number(maxNum) ** 2));
		return String(Number(maxNum) ** 2);
	})(n);

	let primes = primeNumbersUnder(
		((len) => {
			let maxNum = "";

			for (let i = 0; i < len; i++) {
				maxNum += "9";
			}
			return String(Number(maxNum));
		})(n)
	);

	let currResult = { success: false };

	while (!currResult.success) {
		console.log("trying");
		currPal = getNextPalindromeUnderX(Number(currPal));
		if (currPal < 1) {
			return "error";
		}
		console.log(currPal);
		console.log("trying factors");
		const factors = primesToFactors(currPal, primes);
		console.log(factors);
		if (!factors) continue;
		currResult = checkFinalFactors(factors, n);
	}

	return currResult.value;
}

function getNextPalindromeUnderX(n) {
	console.log("trying ", n);
	n = String(n);
	const len = n.length;
	const hasCenter = len % 2 !== 0;
	const center = hasCenter ? n[Math.floor(len / 2)] : null;
	const curr = [...n.slice(0, Math.floor(len / 2)).split("")];

	curr.map((val, i) => (curr[i] = Number(val)));

	if (hasCenter) curr.push(center);

	let currPal = makePalindrome(curr, hasCenter);

	while (currPal >= n && currPal > 0) {
		currPal = makePalindrome(decreaseArr(curr), hasCenter);
	}

	return currPal;
}

function decreaseArr(arr) {
	// arr.reverse();
	// const i = arr.findIndex((val) => val != 0);
	// arr[i]--;
	// arr.reverse();
	return String(Number(arr.join("")) - 1).split("");
}

function makePalindrome(arr, hasCenter) {
	const rev = arr.toReversed();
	if (hasCenter) {
		rev.shift();
	}
	return Number([...arr, ...rev].join(""));
}

function primesToFactors(pal, primes) {
	const factors = [];
	const OGpal = pal;

	let i = 0;
	while (pal > 1 && i < primes.length) {
		if (pal % primes[i] !== 0) {
			i++;
			continue;
		}

		factors.push(primes[i]);
		pal /= primes[i];
	}

	if (
		factors.reduce(
			(accumulator, currentValue) => accumulator * currentValue,
			1
		) === OGpal
	) {
		return factors;
	}
	return 0;
}

function checkFinalFactors(arr, maxlen) {
	const path = [true];
	const factors = arr.toReversed();
	const currFactors = [factors[0], 1];
	factors.shift();
	console.log(arr);
	console.log("maxlen", maxlen);
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
		console.log(
			productStr.length < maxlen + 1 ? "valid" : "too long",
			" ",
			productStr.length,
			" > ",
			maxlen
		);
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

	if (path.length !== arr.length)
		return { success: false, value: "Error, not possible" };
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

export { setupEuler4 };
