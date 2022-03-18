function transacciones(transaccion){
    let validar = trans();
    validar.push(transaccion);
    localStorage.setItem("validar", JSON.stringify(validar));
};

function trans(){
    const validar = JSON.parse(localStorage.getItem("validar"))
    if (validar) {
        return validar;
    }else{
        return [];
    }
}