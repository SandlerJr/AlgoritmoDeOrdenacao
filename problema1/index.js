const precoLivros = [25, 15, 45, 50, 30, 20];

let atual = 0;
let maisBarato = 0;

for ( let atual = 0; atual < precoLivros.length; atual++){
    if (precoLivros[atual] < precoLivros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato está na pocição ${maisBarato} e custa R$${precoLivros[maisBarato]},00`);