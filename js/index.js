function mudaFundo(event, cor) {
    document.body.style.backgroundColor = cor 
}

function background() {
    let div = document.getElementById('color_menu');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
    
}

/*

explicando o cófigo js:

function mudaFundo(event, cor) {
    document.body.style.backgroundColor = cor
}

///no HTML foi criado as cores (hexadecimais) e colocado como argumento um 'evento' 
que vai mostrar no meu código qnd apertar num botao (cor do botao) mostra oq foi feito (click do botao).
nessa função do mudaFUndo com os parâmetros ja chamados é adicionado um comando.
Ao colocar document (ou seja, ele vai ler o documento HTML todo desde o DOCTYPE la em cima)
e entrar no body, após isso estiliza a tela com backgroundColor(comando que irá mudar a cor da tela)
que irá receber ('=') a cor (hexadecimais postos no meu código)

function background() {
    let div = document.getElementById('color_menu');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
    
}

/// nessa função ele vai ter interação com o botão, ou seja, vai ser aquele sistema em que qnd
clicar no botão ele abre para baixo as cores e pode ser mudado o background ok.

ali é criado um let (uma variavel sla é a mesma coisa) declarada(chamada) como div, onde vai receber os comandos
em que entra no document (HTML) e procura o Id, o comando getElementById('color_menu'); vai pegar
um id específico e poder mexer nele, onde entra o comando debaixo;

div.style.display = div.style.display === 'block' ? 'none' : 'block';

//nesse comando ele vai pegar a div e estilizar o display (bolinha colorida) onde se for 'block'
 ou seja, se torna vísivel (ele abre com as cores abaixo), se n for identico ao bloco ent vai ser 'none'
 , se for 'none' ele fecha o bloco, mantém somente a imagem da bolinha colorida  


*/ 