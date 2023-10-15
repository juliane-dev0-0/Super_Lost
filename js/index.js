let taskId = 0;

const taskNum = [];

class TaskSpecs {
    titulo;
    descricao;
};

// function abrirModalDelete(id_card){
//     const modal = new bootstrap.Modal("#modalDelete");
//     document.getElementById('btn_modal_delete').setAttribute("onclick", `document.getElementById('${id_card}').remove()`);
//     deletarLocalStorage(id_card)
//     modal.toggle();

function abrirModalDelete(id_card) {
    const modal = new bootstrap.Modal("#modalDelete");
    const deleteButton = document.getElementById('btn_modal_delete');
    deleteButton.onclick = function() {
        document.getElementById(id_card).remove();
        deletarLocalStorage(id_card);
        modal.hide();
    };
    modal.toggle();

}

    // document.getElementById('btn_modal_delete').addEventListener("onclick",
    //     console.log(id_card)
    //     for (i=0; i<=taskId; i++){
    //         if (`card_${i}`==id_card)
    //         {
    //         localStorage.removeItem(`task${i}`)
    //         localStorage.removeItem(`descricaoTask${i}`) 
    //         break;
    //         }
    //          else {
    //          console.log(i);
    //         }
          
    //     }
    // )

//     taskId--;
// }

// function deletarLocalStorage(id_card)
// {
//     console.log(taskId)
//     for (i=0; i<=id_card; i++){
//         if (`card_${i}`==id_card)
//         {
//         localStorage.removeItem(`task${i}`)
//         localStorage.removeItem(`descricaoTask${i}`) 
//         break;
//         }
//          else {
//          console.log(i);
//         }
      
//     }
// }

function deletarLocalStorage(id_card) {
    const taskId = parseInt(id_card.split('_')[1]); // Extract taskId from id_card
    localStorage.removeItem(`task${taskId}`);
    localStorage.removeItem(`descricaoTask${taskId}`);

    taskNum[taskId]=undefined;
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
    // document.getElementById('btn_modal_delete').addEventListener('onclick', `deletarLocalStorage('card_${taskId}')`);
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
    
    //SaveTask()
    const structDados = new TaskSpecs();
    structDados.titulo = document.getElementById('input_1').value;
    structDados.descricao = document.getElementById('area_descricao').value;
    taskNum.push(structDados);

    for (let i = 0; i < taskNum.length; i++) {
        if (taskNum[i]==undefined){
        }
        else{
        const tituloJSON=taskNum[i].titulo;
        const descricaoJSON=taskNum[i].descricao;
        localStorage.setItem(`task${i}`, JSON.stringify(tituloJSON));
        localStorage.setItem(`descricaoTask${i}`, JSON.stringify(descricaoJSON));
        }
    }
    //saveTask - fim

    var novaColuna = document.getElementById('new_task');
    novaColuna.appendChild(novaTarefa);
    taskId++;
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

document.addEventListener("DOMContentLoaded", function salvarFundo(){
    const corSalva = localStorage.getItem('colorBackground');
     if (corSalva) {
         document.body.style.backgroundColor=corSalva;
    }
});
