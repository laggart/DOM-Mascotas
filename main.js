console.log("conectado")


function cambiarFondo() {
    let fondoUsuario = document.getElementById("imagenFondo").value.toLowerCase();
    if (fondoUsuario == "gollum"){
    document.getElementById("divRellenar").style.backgroundImage = "url(/img/gollum.avif";
    
    } else if (fondoUsuario == "shelob"){
        document.getElementById("divRellenar").style.backgroundImage = "url(/img/shelob.jpg";
    } else if (fondoUsuario == "balrog"){
        document.getElementById("divRellenar").style.backgroundImage = "url(/img/balrog.jpg";
    } 
    else {
        alert("Speak friend and enter!")
    }
}