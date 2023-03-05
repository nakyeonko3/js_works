import sayHello from "./say.js";
import { hayhay } from "./hayhay.js";

import { removeInputElement } from "./removeElement.js";
export const userInput = document.querySelector("input");

const handleSubmit = () => {
  sayHello(userInput.value);
  hayhay();
  removeInputElement(userInput);
  hayhay();
};

userInput.addEventListener("change", handleSubmit);
