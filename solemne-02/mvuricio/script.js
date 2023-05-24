document
  .getElementById("myBtn")
  .addEventListener("click", displayDate);

function displayDate(event) {
  // esto solamente lo recomiendo usar para el event listener del
  // evento submit hecho en un formulario
  event.preventDefault();
  // por favor procesa la info de Date de alguna manera
  document.getElementById("demo").innerHTML = Date();
}

// darle un nombre mas explicativo a go
// y explicar como se esta usando
function go() {
  if (
    document.form.password.value == "CONTRASEÑA" &&
    document.form.login.value == "USUARIO"
  ) {
    document.form.submit();
  } else {
    alert(
      // corregi este por favor, decia "porfavor"
      "Por favor ingrese, nombre de usuario y contraseña correctos.",
    );
  }
}
