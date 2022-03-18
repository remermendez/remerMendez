function start(){
    const tipo = "ingreso";
    const cuentas = data();
    const cuentasDatos = cuentas.filter(function(cuenta, index, cuentas){
        if (cuenta.type === tipo){
            return true;
        }
            return false
    });
    const tus__ingresos = document.querySelector('#ingresos')
    
    for (let cuenta of cuentasDatos){
        tus__ingresos.innerHTML = tus__ingresos.innerHTML +
        `<option value="${cuenta.name}">${cuenta.name}</option>`
    };
}
function dividir(event){
    event.preventDefault();
    const select = event.target.elements["cuenta"].value;
    const cuenta = data().find(function(cuenta){
         if (cuenta.name === select){
            return true;
         }else{
             return false
         }         
    })
    const validar = {
        monto:event.target.elements["monto"].value,
        fecha_registro: event.target.elements["fecha"].value,
        nota: event.target.elements["nota"].value,
        cuenta: cuenta
    };
    if (validacion(validar)){
        transacciones(validar);
    }

}

const validacion = (validar) =>{
    if (validar.monto == 0 || validar.fecha_registro == "" || validar.nota == ""){
        alert("llenar todos los campos")
        return false
    }else{
        return true
    }
}

window.addEventListener('load', function(event){
    start();
    document.getElementById('formulario').addEventListener("submit", dividir)
});