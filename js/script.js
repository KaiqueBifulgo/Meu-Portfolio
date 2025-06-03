// SELEÇÃO DE ELEMENTOS
const btnMenu = document.querySelector("#btn-abrir-menu");
const navMobile = document.querySelector("#nav-mobile");
const btnFecharMenu = document.querySelector(".btn-fechar");



// EVENTOS
const fecharMenu = () => navMobile.classList.remove("menu-aberto");

btnMenu.addEventListener("click", () => {
    navMobile.classList.add("menu-aberto");
})


btnFecharMenu.addEventListener("click", fecharMenu);




// FECHAR O MENU AO CLICAR EM UM LINK
navMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenu)
})

