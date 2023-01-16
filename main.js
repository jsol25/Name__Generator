import { namesOne, namesTwo } from "./names.js";

/*initApp() function kicks off all the subsequent functions needed to generate a random name*/
const initApp = () => {
  document.getElementById("main__form").addEventListener("submit", (event) => {
    event.preventDefault() /*submit reloads the entire web page by default, .preventDefault() method used to override*/
    clearAll();
  })
}

document.addEventListener("DOMContentLoaded", initApp);

/* ||GLOBAL SELECTORS */
const display = document.getElementById("main__section")

const clearAll = () => {
  display.innerHTML = "";
} /*Resets the display area so that there isn't a large accumulation of data in case use the app multiple times.*/