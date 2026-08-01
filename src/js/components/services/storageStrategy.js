const memoriatemporaria = {
    _cache: new Map(),
    //verificar se existe dados na memoria
    existe(chave) {
        return this._cache.has(chave);
    },
    //buscar dados salvos na memoria
    buscarDadosLocal(chave) {
        return this._cache.get(chave);
    },
    //salvar dados na memoria
    salvarDadosLocal(chave, valor) {
        this._cache.set(chave, valor);
    }
}

const memoriaPermanente = {
    //verificar se existe dados no localStorage
    existe(chave) {     
        return localStorage.getItem(chave) !== null;
    },
    //buscar dados salvos no localStorage
    buscarDadosLocal(chave) {
        const dados = localStorage.getItem(chave);
        //condição ternario
        // existe retorne o conteudo apos ? senao o conteudo apos:
        // JSON.parse(dados) converte objeto em texto
        return dados ? JSON.parse(dados) : null;
    },
    //salvar dados na memoria
    // JSON.stringify = transforma objeto em texto 
    salvarDadosLocal(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }
}

export { memoriaPermanente, memoriatemporaria };