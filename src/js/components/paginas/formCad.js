async function cadastroCliente(cep){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    };
}
async function capturacep(){
    const campocep = document.getElementById("cep")
    campocep.addEventListener("blur",async (event)=>{
        const dados = await cadastroCliente(event.target.value)
        document.getElementById("logradouro").value = dados.logradouro
        document.getElementById("bairro").value = dados.bairro
        document.getElementById("localidade").value = dados.localidade
        document.getElementById("estado").value = dados.estado
    })
}
async function telaCadastro(app){
    const formulario = `
    <form id="cadastroCliente" class="bem-conteiner">
        <label for="cep" class="bem-form_label">CEP</label>
        <input type="text" id="cep" class="bem-form_input">
        <label for="logradouro" class="bem-form_label">logradouro</label>
        <input type="text" id="logradouro"class="bem-form_input">
        <label for="bairro" class="bem-form_label ">bairro</label>
        <input type="text" id="bairro"class="bem-form_input">
        <label for="localidade" class="bem-form_label">localidade</label>
        <input type="text" id="localidade"class="bem-form_input">
        <label for="estado" class="bem-form_label">estado</label>
        <input type="text" id="estado" class="bem-form_input">
    </form>
    `
    app.innerHTML = formulario;
    await capturacep();
}


export default
{
    url:'#cadastro',
    label:'Cadastro',
    pagina: telaCadastro
}