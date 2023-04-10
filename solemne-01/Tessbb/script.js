console.log("hola");
        console. log ("ancho: " + window.innerWidth)
        let par;
        par = document.getElementById("parrafito")
        if (window.innerWidth < 1000) {
            par. innerHTML = "menos a 1000 px";
        }
        else{
             par.innerHTML = "mayor o igual a 1000 px"; 
         }

         let captura;

         function setup() {
            creativeCanvas(1000, 800);
            noCursor();
            captura = creativeCature(VIDEO);
            captura.hide();
         }