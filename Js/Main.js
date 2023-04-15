let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
}

function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function(match) { 
      return llaves[match];
    });
    }
function desencriptar(texto) {
    return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }

//encriptar
function procesar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = encriptar(texto);
    salida.value = resultado;
    }

//desencriptar
function procesarDesencriptar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = desencriptar(texto);
    salida.value = resultado;
    }

//copiar
function copiarAlPortapapeles() {
  let texto = document.getElementById("textoEncriptado").value;
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("Texto copiado al portapapeles");
      document.querySelector('.notificacion').classList.add('show');
      setTimeout(() => {
        document.querySelector('.notificacion').classList.remove('show');
      }, 3000);
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

//Boton rest
function borrarSegundoTextarea() {
    document.getElementById("textoEncriptado").value = "";
    }  
  
  //Ocultar Divs
function mostrarOcultarDivs() {
    setTimeout(() => {
    let texto = document.getElementById("textoOriginal").value;
    let divPasivo = document.getElementById("pasivo");
    let divActivo = document.getElementById("activo");
    let textoEncriptado = document.getElementById("textoEncriptado");
    if (texto == "") {
   
      divPasivo.style.display = "block";
      divActivo.style.display = "none";
    } else {
      
      divPasivo.style.display = "none";
      divActivo.style.display = "block";

      textoEncriptado.value = texto;
    }
    }, 0); 
}