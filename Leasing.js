// Toggle class Active untuk Hamburger menu
const navbarMenu = document.querySelector(".navbar-menu");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
    navbarMenu.classList.toggle("active");
    e.preventDefault();
};