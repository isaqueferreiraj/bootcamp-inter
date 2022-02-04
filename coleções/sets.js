function valoresUnicos(array){
    let set = new Set;
    
    for (const iterator of array) {
        set.add(iterator);
    }

    return [...set];
}