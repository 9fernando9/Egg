const barra = document.querySelector("#idnav_");
const abrir = document.querySelector("#idbtnMenuAbrir");
const cerrar = document.querySelector("#idbtnMenuCerrar");

abrir.addEventListener("click", () => {
  barra.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  barra.classList.remove("visible");
});
