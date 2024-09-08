// 1. Función que recibe un string y retorna el string en mayúsculas.
function toUpperCase(str) {
    return str.toUpperCase();
  }
  // 2. Función que recibe un string y retorna el string en minúsculas.
function toLowerCase(str) {
    return str.toLowerCase();
}
  // 3. Función que recibe dos números y los resta.
    function resta(numero1, numero2) {
    return numero1 - numero2;
}
  // 4. Función que recibe dos números y los divide.
function divide(numero1, numero2) {
    // Manejo de división por cero
    if (numero2 === 0) {
      return "Error: División por cero";
    }
    return numero1 / numero2;
}
  // 5. Función que recibe dos números y los multiplica.
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
  // 6. Función que recibe un string y devuelve la longitud del string.
function longitudString(str) {
    return str.length;
}
  // Ejemplo de uso:
const texto = "Buenas Noches edgarcito";
const numero1 = 10;
const numero2 = 5;
  console.log(toUpperCase(texto)); // "HOLA MUNDO"
  console.log(toLowerCase(texto)); // "hola mundo"
  console.log(resta(numero1, numero2)); // 5
  console.log(divide(numero1, numero2)); // 2
  console.log(multiplica(numero1, numero2)); // 50
  console.log(longitudString(texto)); // 10
