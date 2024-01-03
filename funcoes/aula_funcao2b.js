function escreverMeuNome (nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log( escreverMeuNome('Vitor ') + 'sou maior de idade.');
    } else {
        console.log( escreverMeuNome('Vitor ') + 'sou menor de idade.');
    }
}
verificarIdade (18);
