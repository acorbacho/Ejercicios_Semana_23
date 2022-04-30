<?php
include 'object.php';

$new_nombre = $_POST["nombre"];
$new_apellidos = $_POST["apellidos"];
$new_edad = $_POST["edad"];
$new_nota = $_POST["nota"];

$alumnos = array();
$isCreated = false;

for ($i = 0; $i < 9; $i++) {
  $alumnos[$i] = "";
}

for ($i = 0; $i < count($alumnos); $i++) {
  if ($alumnos[$i] === "") {
    $alumnos[$i] = new Alumno($new_nombre, $new_apellidos, $new_edad, $new_nota);
    $isCreated = true;
    break;
  }
}

if ($isCreated) {
  echo "Registro exitoso.";
  $isCreated = !$isCreated;
} else {
  echo "Error en el registro. Consulta con el administrador.";
}

//echo ("Nombre: " . $alumnos[0]->get_nombre() . "<br>Apellidos: " . $alumnos[0]->get_apellidos() . "<br>Edad: " . $alumnos[0]->get_edad() . "<br>Nota: " . $alumnos[0]->get_nota());
