

function validar(){
  var correo = document.getElementById("correo").value;
  var password = document.getElementById("contraseña").value;

  if(correo.length < 1){
    alert("Ingrese correo");
    return false;
  }
  else{
    if(password.length < 1){
      alert("Ingrese contraseña");
      return false;
    }
  }

  if (correo === "admin@mail.com" && password == "concord"){
    swal("Bienvenido Administrador", "succes");

    window.location="../dashboard/index-Administrador.html";  
  }
  else
    if (correo === "usuario@mail.com" && password === "12345"){
      swal("Bienveido", "succes");

      window.location="../dashboard/index-Cliente.html";
    }

    else{
      alert("Correo o Contraseña Incorrecto");
      return false;
    }

}