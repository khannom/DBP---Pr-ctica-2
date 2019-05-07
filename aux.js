function enviar(){
	var lleno=true;
	var contenido = document.getElementById("nombre");
	if(!contenido.value||/^\s+$/.test(contenido.value)||/\d/.test(contenido.value)){
		alert("Tienes que ingresar tu nombre.");
		lleno=false;
	}
	var contenido = document.getElementById("apell");
	if(!contenido.value||/^\s+$/.test(contenido.value)||/\d/.test(contenido.value)){
		alert("Tienes que ingresar tus apellidos.");
		lleno=false;
	}
	var contenido = document.getElementById("email");
	if(!contenido.value ||  !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(contenido.value))){
		alert("Tienes que ingresar tu dirección de correo electrónico.");
		lleno=false;
	}
	var contenido = document.getElementById("notificaciones");
	if(!contenido.checked){
		alert("Tienes que marcar la casilla de notificaciones.");
		lleno=false;
	}
	if(lleno){
		alert("Datos enviados exitosamente!");
	}
}
