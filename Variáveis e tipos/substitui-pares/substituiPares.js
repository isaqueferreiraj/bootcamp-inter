function substituiPares(array){
    
    if(array===undefined){
        console.log("-1");
    } else {
        console.log(array);

        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                array[i] = 0;
            }
        }
        console.log(array);
    }
}