const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand"></a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                <li class="bem-navbar__item">
                    <a href="#inicio" class="bem-navbar__link bem-navbar__link--active">Início</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#sobre" class="bem-navbar__link">Sobre</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#servicos" class="bem-navbar__link">Serviços</a>
                </li>
                <li class="bem-navbar__item">
                    <a href="#contato" class="bem-navbar__link">Contato</a>
                </li>
            </ul>
        </nav>`

const app = document.getElementById('app');
// app.textContet = '<h1>Olá Mundo</h1>';




window.addEventListener("hashchange" , ()=>{
const rota = window.location.hash;
switch(rota){
    case '#inicio':
        app.innerHTML = inicio;
    break;
    case '#sobre':
        app.innerHTML = sobre;
    break;
    case '#servicos':
        app.innerHTML = servicos;
    break
    case '#contato':
        app.innerHTML = contato;
    break;
    default:
        app.innerHTML = '<h1>Página não Encontrada</h1>';
}
})


app.innerHTML = `<h1>Bem vindo</h1>`;