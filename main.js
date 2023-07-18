import "./style.css";
import { setupFibonacci } from "./fibonacci";

const appElem = document.querySelector("#app");

appElem.appendChild(setupFibonacci(document.querySelector("#counter")));
