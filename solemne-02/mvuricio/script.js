document
.getElementById("myBtn")
.addEventListener("click", displayDate);

function displayDate(event) {
    event.preventDefault();
  document.getElementById("demo").innerHTML = Date();
}


function go(){
        
    if (document.form.password.value=='CONTRASEÑA' && 
    document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
        alert(
          "Por favor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 
   
