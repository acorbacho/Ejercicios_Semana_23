let nombre = document.getElementsByClassName("nombre")
let apellidos = document.getElementById("apellidos")
let edad = document.getElementById("edad")
let nota = document.getElementById("nota")
let enviar = document.getElementById("enviar")
let form_alert = document.getElementsByClassName("form_alert")
let recuperar = document.getElementById("recuperar")
let isValid = []
let anonFunctionsArray = []

anonFunctionsArray[0] = () => {
  comprobarNombre(nombre[0], 0)
}
anonFunctionsArray[1] = () => {
  comprobarApellidos(apellidos, 1)
}
anonFunctionsArray[2] = () => {
  comprobarEdad(edad, 2)
}
anonFunctionsArray[3] = () => {
  comprobarNota(nota, 3)
}

let envio_formulario = function (event) {
  isValid[0] = comprobarNombre(nombre[0], 0)
  isValid[1] = comprobarApellidos(apellidos, 1)
  isValid[2] = comprobarEdad(edad, 2)
  isValid[3] = comprobarNota(nota, 3)
  isValid[4] = true
  for (let i = 0; i <= isValid.length; i++) {
    if (isValid[i] == false) {
      nombre[0].addEventListener("input", anonFunctionsArray[0])
      apellidos.addEventListener("input", anonFunctionsArray[1])
      edad.addEventListener("input", anonFunctionsArray[2])
      nota.addEventListener("input", anonFunctionsArray[3])
      isValid[4] = false
    }
  }
  if (isValid[4]) {
    alert("Se pulsó el botón de envío con la información:\nNombre: " + nombre[0].value + "\nApellidos: " + apellidos.value + "\nEdad: " + edad.value + "\nNota: " + nota.value)
    $.ajax({
      data: {
        "nombre": nombre[0].value,
        "apellidos": apellidos.value,
        "edad": edad.value,
        "nota": nota.value,
      },
      url: 'main.php',
      type: 'post',
      success: function (response) {
        $("#response").html(response);
      }
    });
  }
  event.preventDefault()
}
enviar.addEventListener("click", envio_formulario, true)

recuperar.addEventListener("click", (event) => {
  $.ajax({
    data: {
      "nombre_search": nombre[1].value,
    },
    url: 'consulta.php',
    type: 'GET',
    success: function (response) {
      alert(response);
    }
  });
  event.preventDefault()
})

function comprobarNombre(nombre, n) {
  try {
    const pattern = new RegExp("^[A-Z,á,é,í,ó,ú, ]+$", "i")
    if (nombre.value.length > 25 || nombre.value == "") {
      nombre.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Pon un nombre válido (max 25 caract.)."
      return false
    } else if (!pattern.test(nombre.value)) {
      nombre.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Pon un nombre válido (max 25 caract.)."
      return false
    } else {
      nombre.style.backgroundColor = "white"
      form_alert[n].innerHTML = ""
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

function comprobarApellidos(apellidos, n) {
  try {
    const pattern = new RegExp("^[A-Z,á,é,í,ó,ú, ]+$", "i")
    if (apellidos.value.length > 50 || apellidos.value == "") {
      apellidos.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Pon un apellido válido (max 25 caract.)."
      return false
    } else if (!pattern.test(apellidos.value)) {
      apellidos.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Pon un apellido válido (max 25 caract.)."
      return false
    } else {
      apellidos.style.backgroundColor = "white"
      form_alert[n].innerHTML = ""
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

function comprobarEdad(edad, n) {
  const parsed_edad = parseInt(edad.value, 10)
  try {
    if (isNaN(parsed_edad)) {
      edad.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Introduce una edad válida."
      return false
    } else if (parsed_edad > 100 || parsed_edad < 10) {
      edad.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "La edad debe estar entre 10 y 100."
      return false
    } else {
      edad.style.backgroundColor = "white"
      form_alert[n].innerHTML = ""
      return true
    }
  } catch (err) {
    console.log(err)
  }
}

function comprobarNota(nota, n) {
  try {
    const parsed_nota = parseInt(nota.value, 10)
    if (isNaN(parsed_nota)) {
      nota.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "Introduce una nota válida."
      return false
    } else if (parsed_nota > 10 || parsed_nota < 0) {
      nota.style.backgroundColor = "lightcoral"
      form_alert[n].innerHTML = "La nota debe estar entre 0 y 10."
      return false
    } else {
      nota.style.backgroundColor = "white"
      form_alert[n].innerHTML = ""
      return true
    }
  } catch (err) {
    console.log(err)
  }
}
