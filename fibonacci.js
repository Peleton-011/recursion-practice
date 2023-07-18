import { setupInput } from "./input";

function setupFibonacci(element) {
	const wrapper = document.createElement("div");

	wrapper.appendChild(
		setupInput(calculateFib, "Non-recursive Fibonacci", "normalFib")
	);
	wrapper.appendChild(
		setupInput(recursiveFib, "Recursive Fibonacci", "recFib")
	);

	return wrapper;
}

function calculateFib(n) {
	return n + n;
}

function recursiveFib(n) {
	return n + n;
}

export { setupFibonacci };
