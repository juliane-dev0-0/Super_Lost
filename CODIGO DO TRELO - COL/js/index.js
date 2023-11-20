let taskMax = 0;
let columnId = 0; //variavel global que é usada para obter o valor da coluna ao clicar add task
let arrayMain = [];
let todo = {
    id: 'to_do',
    tasks: []
}
let progress = {
    id: 'progress',
    tasks: []
}
let done = {
    id: 'done',
    tasks: []
}
arrayMain.push(todo)
arrayMain.push(progress)
arrayMain.push(done)
console.log(arrayMain)



class task {
    titulo;
    descricao;
    id;
};

function salvarLocalStorage(){
    const arrayMainJSON = JSON.stringify(arrayMain);
    localStorage.setItem('mainData',arrayMainJSON);
}

function abrirModalDelete(id_card) {
    const modal = new bootstrap.Modal("#modalDelete");
    const deleteButton = document.getElementById('btn_modal_delete');
    deleteButton.onclick = function () {
        document.getElementById(id_card).remove();
        deletarLocalStorage(id_card);
        modal.hide();
    };
    modal.toggle();

}


// function deletarLocalStorage(id_card) {
//     const taskMax = parseInt(id_card.split('_')[1]); // Extract taskMax from id_card
//     localStorage.removeItem(`task${taskMax}`);
//     localStorage.removeItem(`descricaoTask${taskMax}`);

//     taskNum[taskMax] = undefined;
//     console.log(localStorage);
// }

function deletarLocalStorage(id_card) {
    const taskId = parseInt(id_card.split('_')[1]); // Extrair o ID da tarefa do id_card

    // Encontrar a coluna que contém a tarefa com base no taskId
    const columnContainingTask = arrayMain.find(column => column.tasks.some(task => task.id === taskId));

    if (columnContainingTask) {
        // Encontrar a tarefa na coluna
        const taskIndex = columnContainingTask.tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            // Remover a tarefa da coluna
            columnContainingTask.tasks.splice(taskIndex, 1);
            salvarLocalStorage(); // Atualizar o armazenamento local após a remoção
        }
    }

    // Remover o elemento HTML do card
    document.getElementById(id_card).remove();
}


function armazenarId(id) {
    const idColuna = document.getElementById(id).previousElementSibling.id;
    columnId = idColuna;

    limpacampos();
}

function add_task() {
    const titulo = document.getElementById('input_1').value;
    const descricao = document.getElementById('area_descricao').value;
    let id = Date.now();
    if (!titulo) {
        return false;
    } else {
        salvarEssesDados(titulo, descricao, id);
        limpacampos();
    }
}

function limpacampos() {
    document.getElementById('input_1').value = '';
    document.getElementById('area_descricao').value = '';
    document.getElementById('btn_delete').style.display = 'none';
}

function carregarDados(title, descricao, taskMax) {
    document.getElementById('input_1').value = title;
    document.getElementById('area_descricao').value = descricao;
    document.getElementById('btn_delete').style.display = '';
    document.getElementById('btn_delete').setAttribute('onclick', `abrirModalDelete('card_${taskMax}')`);
    ;
    // document.getElementById('btn_modal_delete').addEventListener('onclick', `deletarLocalStorage('card_${taskMax}')`);
}

function armazenarId(id){
    const idColuna =  !!document.getElementById(id).previousElementSibling?.parentNode.id ?  document.getElementById(id).previousElementSibling?.parentNode.id : id;
    columnId=idColuna;

    limpacampos();
}   

function salvarEssesDados(title, descricao, id) {
    var novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `
   
        <div draggable="true" 
        class="card dropp text-bg-success mb-3 mx-auto p-2" 
        style="max-width: 15rem; cursor: move ;" 
        onclick="carregarDados('${title}', ` + '`' + `${descricao}` + '`' + `, ${taskMax})"
        data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
        id="card_${taskMax}" >

            <div class="card-header d-flex justify-content-between">
                <h5 class="card-title text-center" id="title_card_view_${taskMax}">${title}</h5>
            </div>

            <div class="card-body">
                <p class="card-text" id="description_card_view_${taskMax}">${descricao ? descricao : "Sem Descrição"}</p>
            </div>
           
        </div>
    
    `;

        //SaveTask()
        const structDados = new task();
        structDados.titulo = title;
        structDados.descricao = descricao;
        structDados.id = id;
        arrayMain.forEach(function (arrayMain){
            if(arrayMain.id==columnId){
                arrayMain.tasks.push(structDados);
            }
    
        })
        console.log(arrayMain);
        salvarLocalStorage();
        // for (let i = 0; i < arrayDearrayMain.length; i++) {
        //     const coluna = arrayDearrayMain[i];
        
        //     for (let j = 0; j < coluna.length; j++) {
        //         const tarefa = coluna[j];
        //         const tituloJSON = tarefa.titulo;
        //         const descricaoJSON = tarefa.descricao;
        //         localStorage.setItem(`task${j}_column${i}`, JSON.stringify(tituloJSON));
        //         localStorage.setItem(`descricaoTask${j}_column${i}`, JSON.stringify(descricaoJSON));
        //     }
        // }
        
        //saveTask - fim
        let currentColumn = document.getElementById(columnId)
        let teste = currentColumn.firstChild.nextSibling;
        teste.appendChild(novaTarefa);
        taskMax++;
    

// drag and drop

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    // log('CARD: Start dragging ')
    dropzones.forEach( dropzone => dropzone.classList.add('dropzone'))

    // this = card
    this.classList.add('is-dragging')
}


function dragend() {
    // log('CARD: Stop drag! ')
    dropzones.forEach( dropzone => dropzone.classList.remove('dropzone'))

    // this = card
    this.classList.remove('is-dragging')
}

/** place where we will drop cards */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})


function dragover() {
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave ')
    // this = dropzone
    this.classList.remove('over')

}

function drop() {
    // log('DROPZONE: dropped ')
    this.classList.remove('over')
}
  
}




function deletarItem(event) {
    event.target.parentElement.parentElement.remove();
}


function mudaFundo(cor) {
    document.body.style.backgroundColor = cor;
    localStorage.setItem('colorBackground', cor);
}


function background() {
    let div = document.getElementById('color_menu');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
}




document.addEventListener("DOMContentLoaded", function salvarFundo() {
    const corSalva = localStorage.getItem('colorBackground');
    if (corSalva) {
        document.body.style.backgroundColor = corSalva;
    }

    if(localStorage.getItem('mainData')) {

        let taskCarreagadas = JSON.parse(localStorage.getItem('mainData'));
    
        taskCarreagadas.forEach((dados) => {

            armazenarId(dados.id);

            dados.tasks.forEach((dado) => {
                salvarEssesDados(dado.titulo, dado.descricao ,dados.id);
            })
         })
    }
    
});
