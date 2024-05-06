/*
	Segunda parte 


	https://github.com/italoartista/js-functions/blob/main/resumo.md
	https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
	https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop
	https://pokeapi.co/
	https://binance-docs.github.io/apidocs/spot/en/#compressed-aggregate-trades-list (utlizamos curl para fazer um request)
	

*/



/*
	Primeira parte 

*/
let tarefa = document.getElementById('tarefa')
let adicionar = document.getElementById('adicionar')
let listaTarefas = document.getElementById('lista-tarefas')
let limpar = document.querySelector('#limpar')


adicionar.addEventListener('click', adicionarTarefa)

limpar.addEventListener('click', function(){ 
    listaTarefas.textContent = ''
})


function adicionarTarefa() { 
    let item = document.createElement('li')
    let span = document.createElement('span')
    span.textContent = tarefa.value 
    item.appendChild(span)
    listaTarefas.appendChild(item)
    let remover = document.createElement('button')
    remover.textContent = 'Deletar'
    remover.addEventListener('click', function() { 
      listaTarefas.removeChild(item)
    })
    item.appendChild(remover)
    let editar = document.createElement('button')
    editar.textContent = 'Editar'
    editar.addEventListener('click', function() { 
      let conteudo = span.textContent
      let novaTarefa = document.createElement('input')
      novaTarefa.type = 'text'
      novaTarefa.value = conteudo
      item.appendChild(novaTarefa)
      let salvar = document.createElement('button')
      salvar.textContent = 'Salvar'
      salvar.addEventListener('click', function() { 
          let novoItem = document.createElement('li')
          let span = document.createElement('span')
          span.textContent = novaTarefa.value 
          novoItem.appendChild(span)
          listaTarefas.appendChild(novoItem)
          let remover = document.createElement('button')
          remover.textContent = 'Deletar'
          remover.addEventListener('click', function() { 
            listaTarefas.removeChild(novoItem)
          })
          listaTarefas.removeChild(item)
          
      })
      item.appendChild(salvar)
      item.removeChild(span)
      item.removeChild(remover)
      item.removeChild(editar)
  
    })
    item.appendChild(editar)
  }

function adicionarTarefa() { 
    const item = criarItemTarefa(tarefa.value);
    listaTarefas.appendChild(item);
}

function criarItemTarefa(conteudo) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = conteudo;
    item.appendChild(span);

    const remover = criarBotao('Deletar', () => {
        listaTarefas.removeChild(item);
    });
    item.appendChild(remover);

    const editar = criarBotao('Editar', () => {
        editarTarefa(item, span);
    });
    item.appendChild(editar);

    return item;
}

function criarBotao(texto, callback) {
    const botao = document.createElement('button');
    botao.textContent = texto;
    botao.addEventListener('click', callback);
    return botao;
}

function editarTarefa(item, span) {
    const conteudo = span.textContent;
    const novaTarefaInput = document.createElement('input');
    novaTarefaInput.type = 'text';
    novaTarefaInput.value = conteudo;

    const salvar = criarBotao('Salvar', () => {
        salvarEdicao(item, novaTarefaInput.value);
    });

    item.replaceChild(novaTarefaInput, span);
    item.removeChild(item.querySelector('button')); // Remove o botão editar
    item.appendChild(salvar);
}
	
function salvarEdicao(item, novoConteudo) {
    const novoSpan = document.createElement('span');
    novoSpan.textContent = novoConteudo;

    const novoRemover = criarBotao('Deletar', () => {
        listaTarefas.removeChild(item);
    });

    const novoEditar = criarBotao('Editar', () => {
        editarTarefa(item, novoSpan);
    });

    item.replaceChild(novoSpan, item.querySelector('input'));
    item.removeChild(item.querySelector('button')); // Remove o botão salvar
    item.appendChild(novoRemover);
    item.appendChild(novoEditar);
}
