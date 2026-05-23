const rota = window.location.hash;
console.log(rota)
console.log(typeof rota)
console.log(typeof '#inicio')
console.log(rota === '#inicio')
//um = é receba atribuição
// == ou === é comparação
if(rota === '#inicio'){
    console.log("Página Inicial")
}else if(rota === '#contato'){
    console.log("Página de Contato")
}else{    
    console.log("Página não encontrada")
}



const idade = 18;
const sexo = "M"
if(idade>=18){
    console.log("Pode Entrar")
}else if(idade >=30 && idade < 60){
    console.log("Pode entrar, mas cuidado com a saúde")
}else if(idade <=30 && sexo === "F"){
    console.log("Entrada Free")
}


const estudante = true;
// != diferente
//!== diferente valor e tipo
if(estudante){
    console.log("Meia Entrada")
}else{
    console.log("Entrada normal")
}