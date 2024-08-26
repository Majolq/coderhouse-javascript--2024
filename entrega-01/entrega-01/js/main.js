function desactivarBomba() {

    let numeroBomba = Math.floor(Math.random() * 100) + 1;
    console.log("El numero de la Bomba es:" + numeroBomba);
        
    let cantidadIntentos = 0;
    let intentosTotales = 5;
    let acertado = false;
    
    while (cantidadIntentos < 5 && acertado === false) {

        let intentosRestantes = intentosTotales - cantidadIntentos;

        let numeroElegido = parseInt(prompt("Debes desactivar la bomba adivinando su valor. \n(Tiene que ser un número entero entre 1 y 100) \nTenes " + intentosRestantes + " intentos, sino explota. \n¿Qué valor tiene la bomba? 💣"));
        console.log("El número elegido es:" + numeroElegido);

        cantidadIntentos++;
        console.log("La cantidad de intentos es:" + cantidadIntentos);

        if (numeroElegido === numeroBomba) {

            alert("GANASTE!!! 🏆\nLograste desactivar la bomba! 👏");
            acertado = true;
            
        } else if (cantidadIntentos >= 5) {

            alert("PERDISTE! 😱\n💥💥💥¡La bomba explotó!💥💥💥\nEl número correcto era " + numeroBomba + "."); 

        } else if (numeroElegido > 100 || numeroElegido < 0) {
            
            alert("VALOR INGRESADO INVÁLIDO! ⚠️ \nEl valor de la bomba es un número entero entre 1 y 100. \nTe quedan " + intentosRestantes + " intentos. 💣")

        } else if (isNaN(numeroElegido)) {
            
            alert("ERROR! ❌ \nNO ingresaste un número. \nEl valor de la bomba es un número entero entre 1 y 100. \nTe quedan " + intentosRestantes + " intentos. 💣")

        } else {

            alert("Este NO es el valor de la bomba. 😕\nSeguí probando. \nTe quedan " + intentosRestantes + " intentos. 💣")
            
        }
    }  
    
} 

desactivarBomba();