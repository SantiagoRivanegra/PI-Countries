//VALIDACIONES DEL FORMULARIO

//   \u00f1 y \u00d1 son el equivalente para "ñ" y "Ñ
//   \D -> cualquier caracter que no sea un digito 0-9
//   \s -> espacios en blanco

// ^ significa "anclar a la izquierda", y sirve para que la expresión regular comience desde el principio de la cadena, y no desprecie lo que se encuentre a su izquierda.
// \d significa "un dígito cualquiera" (de 0 a 9)
// El símbolo + detrás de \d significa "repetir una o más veces", por lo que tendríamos uno o más dígitos.
// $ significa "anclar a la derecha" para que no pueda haber ninguna otra cosa detrás de los dígitos.

function validate(input){
  let error = {};
  if (!input.name){
    error.name = 'Ingrese un nombre para su actividad'
  } 
  if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)){
    error.name = 'Para el nombre ingrese solo letras, por favor'
  } 
  //
  if (!input.duration){
    error.duration = 'Ingrese la duracion(Hs) de su actividad'
  }
  if (input.duration < 1 || input.duration > 5){
    error.duration = 'La duracion(Hs) de su actividad debe ser de entre 1 y 5 Horas'
  }
  if (!/^[\d]$/.test(input.duration)){
    error.duration = 'La duracion(Hs) de su actividad debe ser con numero enteros'
  }
  // 
  if (!input.season){
    error.season = 'Ingrese la estacion en la que se realizara su actividad'
  } 
  //
  if (!input.difficulty){
    error.difficulty = 'Ingrese la dificultad de su actividad'
  }
  //
  if (!input.countries){
    error.countries = 'Ingrese un pais/es donde se desarrollara su actividad'
  }
  return error
}

module.export = {validate}


// function validate(input){
//   let error = {};
//   if (!input.name){
//     error.name = 'Ingrese un nombre para su actividad'
//   } 
//   if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)){
//     error.name = 'Para el nombre ingrese solo letras, por favor'
//   } 
//   //
//   if (!input.duration){
//     error.duration = 'Ingrese la duracion(Hs) de su actividad'
//   }
//   if (input.duration < 1 || input.duration > 5){
//     error.duration = 'La duracion(Hs) de su actividad debe ser de entre 1 y 5 Horas'
//   }
//   if (!/^[\d]$/.test(input.duration)){
//     error.duration = 'La duracion(Hs) de su actividad debe ser con numero enteros'
//   }
//   // 
//   if (!input.season){
//     error.season = 'Ingrese la estacion en la que se realizara su actividad'
//   } 
//   //
//   if (!input.difficulty){
//     error.difficulty = 'Ingrese la dificultad de su actividad'
//   }
//   //
//   if (!input.countries){
//     error.countries = 'Ingrese un pais/es donde se desarrollara su actividad'
//   }
//   return error
// }