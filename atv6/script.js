function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const texto = input.value.trim();

  if (texto === '') return;

  const li = document.createElement('li');

  // Cria o texto da tarefa
  const spanTexto = document.createElement('span');
  spanTexto.textContent = texto;

  // Marcar como concluída ao clicar
  spanTexto.addEventListener('click', () => {
    spanTexto.classList.toggle('concluida');
  });

  // Botão de remover
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(spanTexto);
  li.appendChild(btnRemover);

  document.getElementById('listaTarefas').appendChild(li);
  input.value = '';
  input.focus();
}
