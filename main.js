const fichaPersonal = [];
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellito");
let edad = parseInt(prompt("Ingrese su edad"));
let anio = parseInt(prompt("Ingrese su anio de nacimiento"));
let localidad = prompt("Ingrese su localidad");
let direccion = prompt("Ingrese su direccion");
let trabajo = parseInt(
  prompt(
    "Selleccione la opcion deseada. 1 - Colocacion de ceramicas. 2 - Armado de techo. 3 - Construccion desde cero."
  )
);
fichaPersonal.push(nombre, apellido, edad, anio, localidad, direccion);

const iva = (a, b) => a * b * 0.21;

switch (trabajo) {
  case 1:
    let metros = parseInt(
      prompt("Ingrese totalidad de los metros a construir")
    );
    total = metros * 1000 + iva(metros, 1000);
    alert("El trabajo vale " + total);
    fichaPersonal.push("Total presupuestado: " + total);
    alert("Los datos del presupuesto final son correctos? " + fichaPersonal);
    break;
  case 2:
    let metros1 = parseInt(
      prompt("Ingrese totalidad de los metros a construir")
    );
    total = metros * 1200 + iva(metros1, 1200);
    alert("El trabajo vale " + total);
    fichaPersonal.push("Total presupuestado: " + total);
    alert("Los datos del presupuesto final son correctos? " + fichaPersonal);
    break;
  case 3:
    let metros2 = parseInt(
      prompt("Ingrese totalidad de los metros a construir")
    );
    total = metros * 3500 + iva(metros2, 3500);
    alert("El trabajo vale " + total);
    fichaPersonal.push("Total presupuestado: " + total);
    alert("Los datos del presupuesto final son correctos? " + fichaPersonal);
    break;
  default:
    alert("La opcion ingresada es incorrecta");
    break;
}
