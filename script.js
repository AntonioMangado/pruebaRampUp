// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function contarLetra(frase, char) {

    let contador = 0;       

    for (let i = 0; i < frase.length; i++) {       //bucle que itere por cada elemento de la frase
        if (frase[i].toLowerCase() == char.toLowerCase()) {       //toLowerCase usado para que el algoritmo tenga en cuenta tanto mayusculas como minusculas 
            contador++             //si la letra en la posicion i es la misma que la letra dada en la funcion, se suma uno al contador.
        };
    }

    return contador;   
}

function contarLetra2(frase, char) {
 
    let storageStr = "" 

    for (let i = 0; i < frase.length; i++) { 
        if (frase[i].toLowerCase() == char.toLowerCase()) { 
            storageStr += frase[i]; 
        };
    }

    return storageStr.length; //misma solucion que antes, pero en vez de usar un contador, he usado un string vacio donde guardar todas las letras que quiero que encuentre, y una vez que haya terminado el bucle, devuelve el length del string.
}


// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function imprimirImpares(num) {
    for (let i = num; i <= num+50; i++) {  //bucle donde el valor inicial de i es el numero dado, que itere hasta i+50.
        if (i % 2 != 0) {                //si el valor de i no es divisible de forma exacta por dos, significa que es impar
            console.log(i)                 //por tanto imprime i                         
        };
    }
}

function imprimirImpares2(num) {

let i = num                             //misma funcion usando un bucle while en vez de un bucle for
while (i <= num+50) {
    if (i % 2 != 0) {                
        console.log(i)                                         
    };
    i++
}    
}