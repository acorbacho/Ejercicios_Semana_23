<?php
class Alumno {
  function __construct($nombre, $apellidos, $edad, $nota) {
    $this->nombre = $nombre;
    $this->apellidos = $apellidos;
    $this->edad = $edad;
    $this->nota = $nota;
  }

  public function set_nombre($nombre) {
    $this->nombre = $nombre;
  }

  public function set_apellidos($apellidos) {
    $this->apellidos = $apellidos;
  }

  public function set_edad($edad) {
    $this->edad = $edad;
  }

  public function set_nota($nota) {
    $this->nota = $nota;
  }

  public function get_nombre() {
    return $this->nombre;
  }

  public function get_apellidos() {
    return $this->apellidos;
  }

  public function get_edad() {
    return $this->edad;
  }

  public function get_nota() {
    return $this->nota;
  }
}
