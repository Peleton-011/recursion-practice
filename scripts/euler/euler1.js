import { setupInput } from "../input";

function setupEuler1() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(sumOf3or5Multiples, "Euler 1", "euler1"));

	return wrapper;
}

function sumOf3or5Multiples(n) {
	return sumOfXMultiples(n, [3, 5]);
}

function sumOfXMultiples(n, x) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		if (x.some((val) => i % val === 0)) sum += i;
	}
	return sum;
}

export { setupEuler1 };
