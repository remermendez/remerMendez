function nav(){
    const menu = document.getElementById('menu');
    menu.innerHTML = `
<header class="header">
    <div class="header__container container">
        <h1 class="header__h1">ifinancia</h1>
        <nav class="nav__container">
            <ul class="header__ul">
                <li><a class="header__a" href="/index">Inicio</a></li>
                <li><a class="header__a" href="/gastos">Gastos</a></li>
                <li><a class="header__a header__a--modifier" href="/ingresos">Ingresos</a></li>
            </ul>
        </nav> 
    </div>
</header>`
}