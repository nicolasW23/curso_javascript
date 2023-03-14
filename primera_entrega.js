//variables globales
let nroLibretaUniversitaria;
let notaPrimerParcial, notaSegundoParcial;
let opcion = 1;

//Ejecucion del programa

//ciclo
while (opcion != "0") {
    ingresarDatos();
    mostrarDatos();
    opcion = prompt("1-Seguir ingresando alumnos\n0-Salir");
};

//funciones
function ingresarDatos() {
    nroLibretaUniversitaria = prompt("Ingrese el numero de libreta universitaria: ");

    notaPrimerParcial = prompt("Ingrese nota del primer parcial");
    notaSegundoParcial = prompt("Ingrese nota del segundo parcial");
}

function parcial(notaParcial) {
    //condicional
    if (notaParcial >= 6) {
        return true;
    }
    else {
        return false;
    }
}

function promedio(nota1, nota2) {
    let promedio = (nota1 + nota2) / 2;
    return (promedio);
}

function mostrarDatos() {
    alert("\nLibreta Universitaria: " + nroLibretaUniversitaria + "\nNota P1: " + notaPrimerParcial + "\nNota P2: " + notaSegundoParcial);

    if ((parcial(notaPrimerParcial) === true) && (parcial(notaSegundoParcial) === true)) {

        if (promedio(notaPrimerParcial, notaSegundoParcial) >= 7) {
            alert("El alumno promociona la materia");
        }
        else {
            alert("El alumno regulariza la materia");
        }
    }
    else if ((parcial(notaPrimerParcial) != true) || (parcial(notaSegundoParcial) != true)) {
        alert("El alumno quedo libre en la materia")
    }
}
