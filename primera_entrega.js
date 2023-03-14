//calcular costo de productos

//1 - menu
/*
let totalIngresado= 0;
let total=0;
let banda;

let respuesta = prompt("Tienda de musica\nSeleccione el el genero de musica del disco que desea comprar:\n1-Rock\n2-Pop\n3-Electronica\n4-Clasicos\n5-salir");
while(respuesta != 5){
    switch(respuesta){
        case "1":{
            banda= prompt("Seleccione una banda\n1-Soda Stereo-Obras Cumbres: 300$\n2-Virus-Virus: 300$\n3-Tears For Fears-disco debut 1983: 250$\n4-The police-Greatest Hits : 400$\n");
                switch(banda){
                    case "1":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=250;
                        break;
                    }
                    case "2":{
                        total=400;
                        break;
                    }
                }    
            break;
        }
        case "2":{
            banda= prompt("Seleccione una banda\n1-banda x: 300$\n2-banda x: 300$\n3-banda x: 250$\n4-banda x: 400$\n");
                switch(banda){
                    case "1":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=250;
                        break;
                    }
                    case "2":{
                        total=400;
                        break;
                    }
                }    
            break;
        }
        case "3":{
            banda= prompt("Seleccione una banda\n1-banda x: 300$\n2-banda x: 300$\n3-banda x: 250$\n4-banda x: 400$\n");
                switch(banda){
                    case "1":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=250;
                        break;
                    }
                    case "2":{
                        total=400;
                        break;
                    }
                }    
            break;
        }
        case "4":{
            banda= prompt("Seleccione una banda\n1-banda x: 300$\n2-banda x: 300$\n3-banda x: 250$\n4-banda x: 400$\n");
                switch(banda){
                    case "1":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=300;
                        break;
                    }
                    case "2":{
                        total=250;
                        break;
                    }
                    case "2":{
                        total=400;
                        break;
                    }
                }    
            break;
        }
        default:{
            alert("error");
            break;
        }
    }totalIngresado=totalIngresado+total;
    totalIngresado++;
    respuesta = prompt("Tienda de musica\nSeleccione el el genero de musica del disco que desea comprar:\n1-Rock\n2-Pop\n3-Electronica\n4-Clasicos\n5-salir");
}
alert("Total: "+ totalIngresado);
*/

// 2 - Mostrar el costo

// 4

let nroLibretaUniversitaria;
let notaPrimerParcial, notaSegundoParcial;
let opcion=1;

//Ejecucion del programa
    while(opcion != "0"){
        ingresarDatos();
        mostrarDatos();
        opcion= prompt("1-Seguir ingresando alumnos\n0-Salir");
    };


function ingresarDatos(){
    nroLibretaUniversitaria= prompt("Ingrese el numero de libreta universitaria: ");

    notaPrimerParcial= prompt("Ingrese nota del primer parcial");
    notaSegundoParcial= prompt("Ingrese nota del segundo parcial");
}

function parcial(notaParcial){
    if(notaParcial >= 6){
        return true;
    }
    else{
        return false;
    }
}

function promedio(nota1, nota2){
    let promedio = (nota1 + nota2) / 2;
    return(promedio);
}

function mostrarDatos(){
    alert("\nLibreta Universitaria: " + nroLibretaUniversitaria + "\nNota P1: " + notaPrimerParcial + "\nNota P2: " + notaSegundoParcial);
    
    if( (parcial(notaPrimerParcial) === true) && (parcial(notaSegundoParcial) === true) ){

        if(promedio(notaPrimerParcial, notaSegundoParcial) >= 7){
            alert("El alumno promociona la materia");
        }
        else{
            alert("El alumno regulariza la materia");
        }
    }
    else if( (parcial(notaPrimerParcial) != true) || (parcial(notaSegundoParcial) != true) ){
        alert("El alumno quedo libre en la materia")
    }
}