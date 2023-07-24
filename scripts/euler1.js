import { setupInput } from "./input";

function setupEuler1() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";

	wrapper.appendChild(setupInput(sumOf3or5Multiples, "Euler 1", "euler1"));

	return wrapper;
}

function sumOf3or5Multiples(n) {
	return;
}

export { setupEuler1 };
