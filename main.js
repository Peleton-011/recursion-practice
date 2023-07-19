import "./style.css";
import { setupFibonacci } from "./scripts/fibonacci";

const appElem = document.querySelector("#app");

appElem.appendChild(setupFibonacci(document.querySelector("#counter")));
