import { setupInput } from "./input";

function setupFibonacci(element) {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(
		setupInput(calculateFib, "Non-recursive Fibonacci", "normalFib")
	);
	wrapper.appendChild(
		setupInput(recursiveFib, "Recursive Fibonacci", "recFib")
	);

	return wrapper;
}

function calculateFib(n) {
	n = Number(n);
	const fibArr = [];
	for (let i = 0; i < n; i++) {
		const len = fibArr.length;
		if (len < 2) {
			fibArr.push(1);
			continue;
		}
		fibArr.push(Number(fibArr[len-1]) + Number(fibArr[len - 2]));
	}
	return fibArr;
}

function recursiveFib(n) {
	n = Number(n);
	return n + n;
}

export { setupFibonacci };
