// Intento de poner borde en la imagen en java
// la web no tiene java, tiene javascript!!

console.log("probando 1 2 3");
            console.log("ancho: " + window.innerWidth);
            
            function setup() 

            let img = document.createElement("img");
            img.src = "https://nikeclprod.vteximg.com.br/arquivos/ids/667596-1000-1000/DV3464_001_A_PREM.jpg?v=638127860944130000";
            
            img.style.border = "5px solid black";
            img.style.borderRadius = "5px";
            
            document.body.appendChild(img);
