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

## Código de Alteração de Background : Explicando o JAVASCRIPT

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

## CSS - 

    Exemplificação - No sistema é criado um elemento para alterção do body como /fontes/marge . 
    
    *Background 
    - opção de botão para alteração de fundo de tela;
    - hover background : Ao passar pelo botão é alteradom sua cor;

    cor_botões{

        adicionado tamanho e altura sendo cada botão tendo sua respectiva cor e alteração de background ao ser sido selecionada a cor.
    }

## HTML e Composição do codigo

O html é a base desse sistema e o que serve de base para o css estilizar e o javascript dar funcionalidade. Dentro do HTML existem 2 div: Uma para dar funcionalidade ao pressionar o botão background(linha 21 a 35) e uma para dar funcionalidades aos botões cor-botao, que estão no color-menu(linha 25 a 34).
O primeiro div faz com que todo o container de opções de cores no menu fiquem invisiveis ao usuário até o momento que ele clique no botão, permitindo ver e selecionar a cor do fundo.
O segundo div atribui valores e estilos para todos os botões de selecionar cor, dando-os as instruções de o que fazer ao ser pressionado e como fazer.