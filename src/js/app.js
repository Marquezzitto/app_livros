const rota = window.location.hash;
console.log(rota)
console.log(typeof rota)
console.log(typeof '#inicio')
console.log(rota === '#inicio')
// = é receba atribuição
// ==  comparação de valor
// === comparação de valor e TIPO
if(rota === '#inicio'){
    console.log("Pagina inicial")
}else if(rota === '#contato'){
    console.log("Pagina de contato")
}else{
    console.log("Pagina não encontrada")
}


const idade = 18;
const sexo = "F";
if(idade <=18){
    console.log("Não Pode entrar")
}else if(idade >= 30 && idade < 60){
    console.log("Pode entrar, mas cuidado com a saúde")
}else if(idade <= 30 && sexo === "F"){
    console.log("Entrada Free")
}


const estudante = true;
// != diferente
// !== diferente valor e tipo
if(!estudante){
    console.log("Meia entrada")
}else{
    console.log("Entrada normal")
}