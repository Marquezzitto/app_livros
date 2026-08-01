import buscarNoMundo from "./api";     
import { memoriatemporaria, memoriaPermanente } from "./storageStrategy";

const storage = memoriaPermanente;

async function buscarServicos(url, dados='', forma=''){
    const formataURL = `${url}${dados}${forma}` 
    if(memoriaPermanente.existe(formataURL)){
        console.time(`[CACHE] TEMPO PARA: ${dados || 'página incial'}`)
        const resultadoEmCache = memoriaPermanente.buscarDadosLocal(formataURL)
        console.timeEnd(`[CACHE] TEMPO PARA: ${dados || 'página incial'}`)
        return resultadoEmCache
    }
    console.time(`[Mundo Exterior] TEMPO PARA: ${dados || 'página incial'}`)
    try{
        const resultadoEmCache = await buscarNoMundo(url, dados, forma)
        memoriaPermanente.salvarDadosLocal(formataURL, resultadoEmCache)
        console.timeEnd(`[Mundo Exterior] TEMPO PARA: ${dados || 'página incial'}`)
        return resultadoEmCache

    }catch(error){
        console.timeEnd(`[Mundo Exterior] TEMPO PARA: ${dados || 'página incial'}`)
        console.error("Erro na busca:", error );
        throw error;
    }
    
}

export default buscarServicos; 
