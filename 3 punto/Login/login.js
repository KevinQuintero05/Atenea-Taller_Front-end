function validar(){
	var correo = document.getElementById('usuario').value;
	var contraseña = document.getElementById('contraseña').value;

	if(correo.length < 1 ){
		alert("Ingrese Correo");
		return false;
	}
	else{
		if(contraseña.length < 1){
			alert("Ingrese contraseña");
			return false;
		}
	}

	if (correo === "admin@gmail.com" && contraseña === "concord"){
		swal("Bienvenido Administrad@r", "identificacion valida");

		window.location="../dashboard/Admin.html";	
	}
	else
		if (correo === "usuario@gmail.com" && contraseña === "12345"){
			swal("Bienveid@", "Ingreso exitoso");

			window.location="../dashboard/principalCliente.html";
		}

		else{
			alert("correo o contraseña Incorrecto");
			return false;
		}

}