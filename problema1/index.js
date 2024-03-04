const livros = require('./listalivros'); 

let atual = 0;
let maisBarato = 0;

for ( let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preço < livros[maisBarato].preço){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato é o ${livros[maisBarato].titulo} que está na pocição ${maisBarato} da nossa lista e custa R$${livros[maisBarato].preço},00`);