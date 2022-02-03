function comparaNumeros(a, b){
    let saoIguais = " não são iguais";
    let soma = a + b;

    if(a === b){
        saoIguais = " são iguais";
    }

    if(soma > 10 && soma < 20){
        console.log("Os números " + a + " e " + b + saoIguais + ". Sua soma é " + soma + ", que é maior que 10 e menor que 20.");
    } else if(soma<10){
        console.log("Os números " + a + " e " + b + saoIguais + ". Sua soma é " + soma + ", que é menor que 10 e menor que 20.");
    } else {
        console.log("Os números " + a + " e " + b + saoIguais + ". Sua soma é " + soma + ", que é maior que 10 e maior que 20.");
    }
}