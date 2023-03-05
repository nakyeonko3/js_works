import { userInput } from "./main.js";
export const removeInputElement = (element) => {
  element.remove();
  userInput.value = "";
};
