function verificaPalindromo(string){
    if(!string){
        return "String inexistente";
    } else {
        for(var i = 0; i < string.length/2; i++){
            console.log(string[i]);
            if(string[i] !== string[string.length-1-i]){
                return "Não é um palindromo";
            }
        }
        return "É um palíndromo"
    }
}

function verificaPalindromo2(string){
    if(!string){
        return "String inexistente";
    }
    
    return string.split("").reverse().join("") === string;
}