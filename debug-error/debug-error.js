function verifica(array, n){
    try{
        if(array === undefined || n === undefined) throw new ReferenceError("Parâmetros vazios");
    
        if(!array.typeof(Object)) throw new TypeError("Envie um elemento do tipo Array");
    
        if(!n.typeof(Number)) throw new TypeError("Envie um elemento do tipo Number");
    
        if(array.length !== n) throw new RangeError("Tamanho do array inválido");
    
        return array;
    } catch (e) {
        if(e instanceof RangeError){
            console.log("RangeError!");
            console.log(e.stack);
        } else if(e instanceof ReferenceError) {
            console.log("ReferenceError!");
            console.log(e.stack);
        } else {
            console.log("Outro tipo de erro");
            console.log(e.stack);
        }
    }
}