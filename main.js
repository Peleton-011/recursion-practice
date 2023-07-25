import "./style.css";
import { setupFibonacci } from "./scripts/fibonacci";
import { setupMergeSort } from "./scripts/merge-sort";
import { setupEuler1 } from "./scripts/euler/euler1";
import { setupEuler2 } from "./scripts/euler/euler2";
import { setupEuler3 } from "./scripts/euler/euler3";
import { setupEuler4 } from "./scripts/euler/euler4";
import { setupEuler5 } from "./scripts/euler/euler5";

function setup() {
	const appElem = document.querySelector("#app");

	appElem.appendChild(setupFibonacci());
	appElem.appendChild(setupMergeSort());

	//Euler Stuff
	appElem.appendChild(setupEuler1());
	const pair1 = document.getElementById("euler1").parentElement.parentElement;
	pair1.appendChild(setupEuler2().querySelector(".inputWrapper"));

	appElem.appendChild(setupEuler3());
	const pair2 = document.getElementById("euler3").parentElement.parentElement;
	pair2.appendChild(setupEuler4().querySelector(".inputWrapper"));

	appElem.appendChild(setupEuler5());
}

setup();
