import "./style.css";
import { setupFibonacci } from "./scripts/fibonacci";
import { setupMergeSort } from "./scripts/merge-sort";

const appElem = document.querySelector("#app");

appElem.appendChild(setupFibonacci());
appElem.appendChild(setupMergeSort());
