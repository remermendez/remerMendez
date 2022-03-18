function fecha (fechaa){
    return `${fechaa.getDay()}/${fechaa.getMonth()}/${fechaa.getFullYear()}`;
};


window.addEventListener('load', function(event){
    const Data = trans();
    const listado = document.querySelector("#extras");
    const listado2 = document.querySelector("#trabajo");
    const listado3 = document.querySelector("#renta");
    const listado4 = document.querySelector("#inversion");

    for (let dat of Data){
        if (dat.cuenta.name === "pago de hora extras"){
        let marcado = fecha(new Date(dat.fecha_registro));
        listado.innerHTML = listado.innerHTML +
        `<div class="main__article">
             <div class="main__cont">
                <h5>${dat.cuenta.name}</h5>
                <p class="dias">${marcado}</p>
            </div>
            <div>    
                <p class="main__parrafo">usted a pagado: <b>${dat.monto}</b> pesos</p>
                <p class="main__parrafo">tipo: <b style='color:red;'>${dat.cuenta.type}</b></p>
                <p class="main__parrafo main__parrafo--modifier">${dat.nota}</p>
            </div>
         </div>`
        }else if (dat.cuenta.name == "pago del trabajo"){
            let marcado = fecha(new Date(dat.fecha_registro));
            listado2.innerHTML = listado2.innerHTML +
            `<div class="main__article">
                 <div class="main__cont">
                    <h5>${dat.cuenta.name}</h5>
                    <p class="dias">${marcado}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${dat.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${dat.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${dat.nota}</p>
                </div>
             </div>`
        }else if (dat.cuenta.name == "pago de la renta"){
            let marcado = fecha(new Date(dat.fecha_registro));
            listado3.innerHTML = listado3.innerHTML +
            `<div class="main__article">
                 <div class="main__cont">
                    <h5>${dat.cuenta.name}</h5>
                    <p class="dias">${marcado}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${dat.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${dat.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${dat.nota}</p>
                </div>
             </div>`
        }else if (dat.cuenta.name == "pago de una inversion"){
            let marcado = fecha(new Date(dat.fecha_registro));
            listado4.innerHTML = listado4.innerHTML +
            `<div class="main__article">
                 <div class="main__cont">
                    <h5>${dat.cuenta.name}</h5>
                    <p class="dias">${marcado}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${dat.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${dat.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${dat.nota}</p>
                </div>
             </div>`
        }
    }
});

function prueba(){
    const aver = trans();
    let almacenamiento = 0;

    for (let av of aver){
        if (av.cuenta.type == "ingreso"){
            almacenamiento += parseInt(av.monto);
        }   
    }
    const res = document.getElementById('almacen');
    res.innerHTML = res.innerHTML +
    `Usted Tiene un Ingreso de: <b style='color:green;'>${almacenamiento}</b>`;
}
prueba();