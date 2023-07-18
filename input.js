export function setupInput(func, name, id) {
	const wrapper = document.createElement("div");
	const label = document.createElement("label");

	label.textContent = name;
	label.setAttribute("for", id);

	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.id = id;

	const submit = document.createElement("button");
	submit.textContent = "Calculate";

	const output = document.createElement("p");
	output.className = "output";

	submit.onclick = (e) => {
		const wrapperElem = e.target.parentElement;
		const inputVal = wrapperElem.querySelector("input").value;
		wrapperElem.querySelector(".output").textContent = func(inputVal);
	};

	wrapper.appendChild(label);
	wrapper.appendChild(input);
	wrapper.appendChild(submit);
	wrapper.appendChild(output);

	return wrapper;
}
