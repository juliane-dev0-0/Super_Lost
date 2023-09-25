# Super_Lost

## Apresentação do Projeto

Projeto Trelo é uma iniciativa que visa criar uma plataforma com a ideia principal sendo a organização, o site funcionará envolta dessa ideia, tendo várias funções e ferramentas para organizar seu projeto, sendo algumas delas um sistema de etiquetas, organização em colunas e tudo isso sendo personalizado pelo usuário. O Trelo vai ser um site com a interface simples e direta, tendo colunas como base, onde o usuário pode alterar e muda-las do jeito que achar melhor. Esse site será feito para o uso de qualquer um que deseje, porém foi feito em mente para desenvolvedores e gestores de projetos.

## Lista de funcionalidades que o projeto irá incoporar:
Alterar Background: Deverá conter uma tabela para seleção de cores sólidas. Manter Task:

Criar task;
1. Adicionar Titulo e Descrição;
2. Excluir task;
3. Data de criação em cada card;

Manter Coluna:

Criar coluna;
1. Podendo alterar título;
2. Adicionar task;
3. Botão que permita excluir a coluna inteira; Mover Coluna: Opção de mover as colunas dentro. Mover Task: Opção de mover as tasks entre as colunas.

## Colaboração da equipe:

1. Juliane da Costa - Lider do grupo encarregada com as entregas e diagrama de caso de uso;
2. João Pedro - Encarregado de organizar o tap e algumas participações;
3. Guilherme Telles - Licitação de requisitos;
4. Lucas Eduardo - Encarregado com diagrama de sequência baixa fidelidade do site e média com ajuda dos participantes do grupo

## Lista de tecnologias utilizadas no projeto:
-HTML 

-CSS 

-Trello 

-Figma 

-Miro

Código de Alteração de Background : Explicando o JAVASCRIPT

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
