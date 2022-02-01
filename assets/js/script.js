const rowFonda = document.getElementById("row-fonda");
const rowStaff = document.getElementById("row-staff");
const rowModo = document.getElementById("row-modo");
const rowMentor = document.getElementById("row-mentor");
const btnMentor = document.getElementById("btn-mentor");
const btnModo = document.getElementById("btn-modo");
const btnStaff = document.getElementById("btn-staff");
const btnFonda = document.getElementById("btn-fonda");

btnMentor.addEventListener("click", () => {
    if (getComputedStyle(rowMentor).opacity != "0") {
        rowMentor.style.opacity = "0";
    } else {
        rowMentor.style.opacity = "1";
    }
});
btnModo.addEventListener("click", () => {
    if (getComputedStyle(rowModo).opacity != "0") {
        rowModo.style.opacity = "0";
    } else {
        rowModo.style.opacity = "1";
    }
});
btnStaff.addEventListener("click", () => {
    if (getComputedStyle(rowStaff).opacity != "0") {
        rowStaff.style.opacity = "0";
    } else {
        rowStaff.style.opacity = "1";
    }
});
btnFonda.addEventListener("click", () => {
    if (getComputedStyle(rowFonda).opacity != "0") {
        rowFonda.style.opacity = "0";
    } else {
        rowFonda.style.opacity = "1";
    }
});

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 200)
});

