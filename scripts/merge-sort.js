import { setupInput } from "./input";

function setupMergeSort() {
	const wrapper = document.createElement("div");
	wrapper.className = "calcWrapper";
	wrapper.appendChild(
		setupInput(
			(input) => sanitizeInputArr(input, recMergeSort),
			"Recursive Merge Sort",
			"recMergeSort"
		)
	);

	//Add value for testing
	wrapper.querySelector("input").value = "2,5,3,6,1,4,87,2";

	return wrapper;
}

function sanitizeInputArr(input, cb) {
	return cb(
		input
			.split(",")
			.filter((val) => val != "[" && val != "]")
			.map((val) => val.trim())
	);
}

function recMergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	if (arr.length === 2) {
		if (Number(arr[0]) > Number(arr[1])) {
			return [arr[1], arr[0]];
		}
		return arr;
	}

	const halfLen = Math.ceil(arr.length / 2);
	let firstHalf = recMergeSort(arr.slice(0, halfLen));
	let secondHalf = recMergeSort(arr.slice(halfLen));

	const newArr = [];

	while (firstHalf.length || secondHalf.length) {
		if (
			Number(firstHalf[0]) > Number(secondHalf[0]) ||
			firstHalf[0] === undefined
		) {
			newArr.push(secondHalf[0]);
			secondHalf = secondHalf.slice(1);
			continue;
		}

		newArr.push(firstHalf[0]);
		firstHalf = firstHalf.slice(1);
	}

	return newArr;
}

export { setupMergeSort };
