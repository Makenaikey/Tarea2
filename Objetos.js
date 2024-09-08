// Definir el objeto Persona
var persona = {
    nombre: "Juan Pérez",
    edad: 30,
    genero: "Refrigerador"
  };
  // Mostrar la información de la persona por la consola
  console.log("Información de la persona:");
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Género:", persona.genero);

// Definir el objeto "caja"
var caja = {
    cuadernos: ["Filosofia", "Historia","Matematica"],
    lapices: ["Lapiz mina", "Lapiz chula","lapiz pasta"],
    papel: ["A4", "Oficio","Carta"],
    fotografias: ["foto1", "foto2"],
    estado: "Ta bien"
  };
  // Imprimir el objeto entero por la consola
  console.log("Contenido de la caja:");
  console.log(caja);
  // Imprimir el objeto y el tipo de dato
  for (var propiedad in caja) {
    console.log(`${propiedad}: ${caja[propiedad]} (Tipo de dato: ${typeof caja[propiedad]})`);
  }