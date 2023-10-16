let taskId = 1;

function abrirModalDelete(id_card) {
    const modal = new bootstrap.Modal("#modalDelete");
    document.getElementById('btn_modal_delete').setAttribute("onclick", `deletarItem('${id_card}')`);
    modal.toggle();
}

function add_task() {
    const titulo = document.getElementById('input_1').value;
    const descricao = document.getElementById('area_descricao').value;
    if (!titulo) {
        return false;
    } else {
        salvarEssesDados(titulo, descricao);
    }
}

function limpacampos() {
    document.getElementById('input_1').value = '';
    document.getElementById('area_descricao').value = '';
    document.getElementById('btn_delete').style.display = 'none';
}

function carregarDados(title, descricao, taskId) {
    document.getElementById('input_1').value = title;
    document.getElementById('area_descricao').value = descricao;
    document.getElementById('btn_delete').style.display = '';
    document.getElementById('btn_delete').setAttribute('onclick', `abrirModalDelete('card_${taskId}')`);
}

function salvarEssesDados(title, descricao) {
    var novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `
        <div class="card text-bg-success mb-3 mx-auto p-2" style="max-width: 18rem; cursor: pointer;" 
         onclick="carregarDados('${title}', `+'`'+`${descricao}`+'`'+`, ${taskId})"
         data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="card_${taskId}" >
            <div class="card-header d-flex justify-content-between">
                <h5 class="card-title text-center" id="title_card_view_${taskId}">${title}</h5>
            </div>
            <div class="card-body">
                <p class="card-text" id="description_card_view_${taskId}">${descricao ? descricao : "Sem Descrição"}</p>
            </div>
        </div>
    `;
    
    var novaColuna = document.getElementById('new_task');
    novaColuna.appendChild(novaTarefa);
    taskId++;

    // Salva os dados após adicionar uma nova tarefa
    saveTask();
}

function deletarItem(id_card) {
    const taskElement = document.getElementById(id_card);
    taskElement.remove();
    
    // Remove do localStorage
    saveTask();
}

function mudaFundo(cor) {
    // Altera o CSS e salva a cor no localStorage
    document.body.style.backgroundColor = cor;
    localStorage.setItem('colorBackground', cor);
}

function background() {
    let div = document.getElementById('color_menu');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const corSalva = localStorage.getItem('colorBackground');
    if (corSalva) {
        // Aplica a cor salva no localStorage
        document.body.style.backgroundColor = corSalva;
    }

    // Chama a função para carregar os dados salvos na página
    loadSavedData();
});

// Função para carregar os dados salvos na página
function loadSavedData() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        document.getElementById('new_task').innerHTML = savedTasks;
    }
    // lucas eduardo: é criado uma função de carregamento de dados salvos dentro da task ao atualizar a página, criando const-savedTasks para receber os dados salvos no local storage e se tiver algo salvo dentro de savTask será carregado junto com a página.


}


// Função para salvar os dados no localStorage
function saveTask() {
    const tasks = document.getElementById('new_task').innerHTML;
    localStorage.setItem('tasks', tasks);


    // é criado uma constante task para receber os dados ao inserir uma nova task (newTask), para armazenar o conteúdo html. 
}

