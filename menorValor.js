const livros = require('./listalivros'); 

function menorValor(arrProdutos, podicsoInicial){
    let maisBarato = podicsoInicial;

    for ( let atual = 0; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preço < arrProdutos[maisBarato].preço){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;