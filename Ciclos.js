// 1. Imprimir en consola los números del 1 al 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
console.log("-----------------------------------------------------")
  // 2. Imprimir en consola los números del 10 al 1.
  for (var i = 10; i >= 1; i--) {
    console.log(i);
  }
console.log("-----------------------------------------------------")
  // 3. Imprimir en consola los números del 1 al 10 pero solo los pares.
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
console.log("-----------------------------------------------------")
  // 4. Imprimir en consola los números del 1 al 10 pero solo los impares.
  for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
console.log("-----------------------------------------------------")
  // 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
  for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
console.log("-----------------------------------------------------")
  // 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
  for (var i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
console.log("-----------------------------------------------------")
  // 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
  for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
  console.log("-----------------------------------------------------")
  // 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
  for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }