import "./style.css";
import { setupFibonacci } from "./scripts/fibonacci";
import { setupMergeSort } from "./scripts/merge-sort";
import { setupEuler1 } from "./scripts/euler1";

const appElem = document.querySelector("#app");

appElem.appendChild(setupFibonacci());
appElem.appendChild(setupMergeSort());
appElem.appendChild(setupEuler1());