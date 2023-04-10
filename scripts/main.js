function calcularImc(altura, peso) {
return peso / Math.pow(altura, 2);
}

function evaluarImc(imc) {
            let mensaje = "";
            if (imc < 18.5) {
                { alert('supeso es bajo') }

            } else if (imc >= 18.5 && imc <= 24.9) {
                { alert('peso normal') }
            } else if (imc >= 25 && imc <= 29.9) {
                { alert('sobre peso') }
            } else {
                { alert('obesidad') }
            }
            return mensaje;
        }

    let seguir = true;

    while (seguir) {
        let altura = parseFloat(prompt("Ingresa tu altura en metros: "));
        let peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));

        let imc = calcularImc(altura, peso);
        console.log("Tu índice de masa corporal es: " + imc.toFixed(2));
        console.log("Tu condición física es: " + evaluarImc(imc));

        let respuesta = prompt("¿Deseas calcular otro IMC? (si / no)").toLowerCase();
        if (respuesta !== "si") {
            seguir = false;
        }
    }

    

