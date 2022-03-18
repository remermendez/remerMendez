function fecha (fechaa){
    return `${fechaa.getDay()}/${fechaa.getMonth()}/${fechaa.getFullYear()}`;
};

// window.addEventListener('load', function(event){
//     const Data = trans();
//     const lista = document.querySelector("#list");
//     for (let dat of Data){
//         if (dat.cuenta.type === "consumo"){
//             let marcado = fecha(new Date(dat.fecha_registro));
//             lista.innerHTML = lista.innerHTML +
//             `<div id="gasolina">
//                 <div class="main__article">
//                     <div class="main__cont">
//                         <h5>${dat.cuenta.name}</h5>
//                         <p class="dias">${marcado }</p>
//                     </div>
//                     <div>    
//                         <p class="main__parrafo">usted a pagado: <b>${dat.monto}</b> pesos</p>
//                         <p class="main__parrafo">tipo: <b style='color:red;'>${dat.cuenta.type}</b></p>
//                         <p class="main__parrafo main__parrafo--modifier">${dat.nota}</p>
//                     </div>
//                 </div>
//             </div>`;
//         };
//     };
// });

function titulo(){
    let titles= trans();
    let contenedor = document.querySelector('#gasolina')
    let agua = document.querySelector('#agua');
    let alimento = document.querySelector('#alimento')
    let seguroMedico = document.querySelector('#seguroMedico');
    for (let title of titles){
        if (title.cuenta.name == "gasolina"){
            contenedor.innerHTML = contenedor.innerHTML +
            `
            <div class="main__article">
                <div class="main__cont">
                    <h5>${title.cuenta.name}</h5>
                    <p class="dias">${fecha(new Date(title.fecha_registro))}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${title.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${title.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${title.nota}</p>
                </div>
            </div>`;
        }else if (title.cuenta.name == "agua"){
            agua.innerHTML = agua.innerHTML +
            `
            <div class="main__article">
                <div class="main__cont">
                    <h5>${title.cuenta.name}</h5>
                    <p class="dias">${fecha(new Date(title.fecha_registro))}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${title.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${title.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${title.nota}</p>
                </div>
            </div>`;
        }else if (title.cuenta.name == "alimento"){
            alimento.innerHTML = alimento.innerHTML +
            `
            <div class="main__article">
                <div class="main__cont">
                    <h5>${title.cuenta.name}</h5>
                    <p class="dias">${fecha(new Date(title.fecha_registro))}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${title.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${title.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${title.nota}</p>
                </div>
            </div>`;
        }else if (title.cuenta.name == "seguro medico"){
            seguroMedico.innerHTML = seguroMedico.innerHTML +
            `
            <div class="main__article">
                <div class="main__cont">
                    <h5>${title.cuenta.name}</h5>
                    <p class="dias">${fecha(new Date(title.fecha_registro))}</p>
                </div>
                <div>    
                    <p class="main__parrafo">usted a pagado: <b>${title.monto}</b> pesos</p>
                    <p class="main__parrafo">tipo: <b style='color:red;'>${title.cuenta.type}</b></p>
                    <p class="main__parrafo main__parrafo--modifier">${title.nota}</p>
                </div>
            </div>`;
        }
    }
}

titulo();

function resta(){
    let restantes = trans();
    let residuo = 0;

    for (let restante of restantes){
        if (restante.cuenta.type == "consumo"){
           residuo -= parseInt(restante.monto);
        }
    }
    const restando = document.getElementById('restando');
    restando.innerHTML = restando.innerHTML +
    `sus gastos son de: <b style='color:red;'>${residuo}</b>`
}
resta();