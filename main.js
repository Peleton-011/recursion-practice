import "./style.css";
import { setupFibonacci } from "./scripts/fibonacci";
import { setupMergeSort } from "./scripts/merge-sort";
import { setupEuler1 } from "./scripts/euler/euler1";
import { setupEuler2 } from "./scripts/euler/euler2";

const appElem = document.querySelector("#app");

appElem.appendChild(setupFibonacci());
appElem.appendChild(setupMergeSort());
appElem.appendChild(setupEuler1());
appElem.appendChild(setupEuler2());
