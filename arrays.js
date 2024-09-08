// 1. Función que recibe un array de números y retorna la suma de todos los números del array.
function sumaArray(numeros) {
    return numeros.reduce((Sumatoria, numero) => Sumatoria + numero, 0);
  }
  // 2. Función que recibe un array de números y retorna el promedio de todos los números del array.
  function promedioArray(numeros) {
    if (numeros.length === 0) {
      return 0; // Por si hay error con 0
    }
    const suma = sumaArray(numeros);
    return suma / numeros.length;
  }
  // 3. Función que toma un arreglo de strings como parámetro y devuelve un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
  function mayusculasArray(strings) {
    return strings.map(str => str.toUpperCase());
  }
  // 4. Función que toma un arreglo de números como parámetro y devuelve un nuevo arreglo que contenga solo los números pares.
  function numerosParesArray(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
  }
  const numeros = [1, 2, 3, 4, 5,6];
  console.log(sumaArray(numeros));
  console.log(promedioArray(numeros));
  const strings = ["pepito", "El Papu"];
  console.log(mayusculasArray(strings));
  const numeros2 = [1, 2, 3, 4, 5, 6];
  console.log(numerosParesArray(numeros2));