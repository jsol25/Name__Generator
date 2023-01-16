import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("main__form").addEventListener("submit", (event) => {
    event.preventDefault()
  })
}

document.addEventListener("DOMContentLoaded", initApp);