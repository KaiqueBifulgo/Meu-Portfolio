// NAV MOBILE
// SELEÇÃO DE ELEMENTOS
const btnMenu = document.querySelector("#btn-abrir-menu");
const navMobile = document.querySelector("#nav-mobile");
const btnFecharMenu = document.querySelector(".btn-fechar");



// EVENTOS
btnMenu.addEventListener("click", () => {
    navMobile.classList.add("menu-aberto");
})

btnFecharMenu.addEventListener("click", () => {
    navMobile.classList.remove("menu-aberto");
})

navMobile.addEventListener("click", () => {
    navMobile.classList.remove("menu-aberto")
})