
let taskId = 1;

function add_task() {
    const titulo = document.getElementById('input_1').value;
    const descricao = document.getElementById('area_descricao').value;
    if (!titulo){
        return false;
    }else{
        salvarEssesDados(titulo, descricao);
    }
}

function limpacampos() {
    document.getElementById('input_1').value = '';
    document.getElementById('area_descricao').value = '';
}

function carregarDados(title, descricao, id) {
    document.getElementById('input_1').value = title;
    document.getElementById('area_descricao').value = descricao;
}

function salvarEssesDados(title, descricao) {
    var novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `
        <div class="card text-bg-success mb-3" style="max-width: 18rem; cursor: pointer;" onclick="carregarDados('${title}', `+'`'+`${descricao}`+'`'+`, ${taskId})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card-header d-flex justify-content-between">
                <h5 class="card-title text-center" id="title_card_view_${taskId}">${title}</h5>
                <i class="fa-solid fa-trash fa-xl" onclick="deletarItem(event)"></i>
            </div>
            <div class="card-body">
                <p class="card-text" id="description_card_view_${taskId}">${descricao ? descricao : "Sem Descrição"}</p>
            </div>
        </div>
    `;
    // novaTarefa.innerHTML = `
    // <div id="espaco_card">
    // <div id="input_trash">
    // <input placeholder="Título" id="task_card_${taskId}" value="${title}" style="${getComputedStyle(document.getElementById('input_1')).cssText}">
    // <i class="fa-solid fa-trash fa-xl" onclick="deletarItem('${taskId}')"></i>
    // </div>
    // <textarea placeholder="A vingança nunca é plena, mata a alma e a envenena!" name="descricao" id="textearea_descricao" cols="30" rows="10" style="${getComputedStyle(document.getElementById('area_descricao')).cssText}">${descricao}</textarea>
    // <p id="time"></p>
    // </div>
    // `;
    
    var novaColuna = document.getElementById('new_task');
    novaColuna.appendChild(novaTarefa);
    taskId++;
}

function deletarItem(event) {
    event.target.parentElement.parentElement.remove();
}


function mudaFundo(event, cor) {
    document.body.style.backgroundColor = cor;
}

function background() {
    let div = document.getElementById('color_menu');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
}