let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);
// rescatadodel repositorio de "montoyamoraga"
function grabarInfo(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre");
    alert(nombre.value);
    document.getElementById("botonIngresar").style.backgroundColor = "lightblue";
}