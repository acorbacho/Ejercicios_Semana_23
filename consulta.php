<?php
include 'object.php';
$nombre_search = $_GET["nombre_search"];
$alumnos_lista = array();
$alumnos_lista[0] = new Alumno("Alex", "García", "22", "9");
$alumnos_lista[1] = new Alumno("Luís", "Pérez", "20", "2");
$alumnos_lista[2] = new Alumno("Alan", "González", "21", "6");
$alumnos_lista[3] = new Alumno("Manuel", "Pacheco", "25", "4");
$alumnos_lista[4] = new Alumno("Sara", "Rúa", "28", "7");
$alumnos_lista[5] = new Alumno("Iker", "Errejón", "25", "5");
$alumnos_lista[6] = new Alumno("Sofía", "Rey", "29", "7");
$alumnos_lista[7] = new Alumno("Mario", "Carballo", "26", "5");
$alumnos_lista[8] = new Alumno("Luz", "Estevez", "24", "9");
$alumnos_lista[9] = new Alumno("Isabel", "Ruíz", "22", "10");
$isIn = false;

for ($i = 0; $i < count($alumnos_lista); $i++) {
  if ($alumnos_lista[$i]->get_nombre() == $nombre_search) {
    echo ("DATOS:\nNombre: " . $alumnos_lista[$i]->get_nombre() . "\nApellidos: " . $alumnos_lista[$i]->get_apellidos() . "\nEdad: " . $alumnos_lista[$i]->get_edad() . "\nNota: " . $alumnos_lista[$i]->get_nota() . "\n");
    $isIn = true;
  }
}
if ($isIn == false) {
  echo "No encontrado.";
}
