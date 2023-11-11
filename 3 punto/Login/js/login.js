function validar(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("pasword").value;

	if(correo.length < 1){
		alert("Ingrese Correo");
		return false;
	}
	else{
		if(password.length < 1){
			alert("Ingrese Contrasena");
			return false;
		}
	}

	if (email === "admin@mail.com" && password == "concord"){
		swal("Bienvenido Administrador", "succes");

		window.location="../dashboard/index-Administrador.html";	
	}
	else
		if (email === "usuario@mail.com" && password === "12345"){
			swal("Bienveido", "succes");

			window.location="../dashboard/index-Cliente.html";
		}

		else{
			alert("Correo o Contrasena Incorrecto");
			return false;
		}

}