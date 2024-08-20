const menu = document.getElementById("menu")
const dropdown = document.querySelector(".dropdown")
let menuclick = true

menu.addEventListener("click", () => {
    if (menuclick) {
        dropdown.style.display = "flex"
    } else {
        dropdown.style.display = "none"
    }
    menuclick = !menuclick
})