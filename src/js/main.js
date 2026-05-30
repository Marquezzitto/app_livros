import navbar from "./componentes/navbar/navbar.js";
import home from "./componentes/paginas/home.js";
import servicos from "./componentes/paginas/servicos.js";
import contato from "./componentes/paginas/contato.js";
import sobre from "./componentes/paginas/sobre.js";


const app = document.getElementById('app');
// app.textContet = '<h1>Olá Mundo</h1>';



let rota = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange" , ()=>{
rota = window.location.hash;
render();

})

function render(){
    switch(rota){
        case '#inicio':
            app.innerHTML = home;
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
}



// console.log("Contagem Regressiva")
// for(let i=100; i<=100; i-=5){
//     console.log(i);
// }


// console.log("Contagem Progressiva")
// for(let i=0; i<=100; i+=5){
//     if(i % 2 === 0){
//         console.log(i + " É par!");
//     }
    
// }
    

// let temperatura = 20
// let ligado = true;
// while (ligado){
//     console.log("A temperatura atual é: " + temepratura);
//     temperatura +- 0.05;
//     if(temperatura >=30 && temperatura <33){
//         console.log("Enviar email de alerta: Temperatura alta!");
//     }else if(temperatura >33){
//         ligado = false;
//         console.log("Desligando o sistema para evitar danos. ")
//         //break;
//     }

// }