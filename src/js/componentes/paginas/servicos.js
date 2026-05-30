let servicos = '';
const detalhes = [
    {
        titulo: 'Centroavante da Seleção',
        descricao: 'Fenomeno na Copa de 2002',
        imagem: 'src/img/fenomeno.jpg'
    },
    {
        titulo: 'Lateral-Direito da Seleção',
        descricao: 'Cafú na Copa de 2002',
        imagem: 'src/img/cafu.jpg'
    },
    {
        titulo: 'Goleiro Da Seleção',
        descricao: 'Marcos na Copa de 2002',
        imagem: 'src/img/marcos.jpg'
    },
    {
        titulo: 'Lateral-Esquerdo da Seleção',
        descricao: 'Roberto Carlos na Copa de 2002',
        imagem: 'src/img/roberto.jpg'
    },
    {
        titulo: 'Meia-Atacante da Seleção',
        descricao: 'Ronaldinho na Copa de 2002',
        imagem: 'src/img/ronaldinho.png'
    }
]

servicos += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
servicos += `
            <div class="bem-card">
                <img class="bem-card__image" src="${detalhes[i].imagem}" alt="${detalhes[i].titulo}">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                    <p>${detalhes[i].descricao}</p>
                </div>
            </div>
`
}
servicos += `</div>`;

export default servicos;