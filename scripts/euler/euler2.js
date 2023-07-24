import { setupInput } from "../input";

function setupEuler2() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(sumOfEvenFibonacciUpTo, "Euler 2", "euler2"));

	return wrapper;
}

// 1,1,2   3,5,8   etc...
//You only need the 1,2 5,8 etc.. to keep going and get all evens
// F3 = F2 + F1
// F4 = F3 + F2 = 2F2 + F1
// F5 = F4 + F3 = F4 + 2F2 + F1
//
// F4 & F5 are the current pair and F1 & F2 are the last pair

function sumOfEvenFibonacciUpTo(n) {
	let sum = 0;

	let pair = [1, 2];

	while (pair[1] < n) {
		sum += pair[1];

		const f4 = 2 * pair[1] + pair[0];
		const f5 = f4 + pair[1] + pair[0];

		pair = [f4, f5];
	}

	return sum;
}

export { setupEuler2 };
