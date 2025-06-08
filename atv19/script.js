function formatar(tipo){
    const selecao = window.getSelection();
    if(!selecao.rangeCount) return;
    const range = selecao.getRangeAt(0);
    const elemento = document.createElement(
        tipo === 'negrito' ? 'b' :
        tipo === 'italico' ? 'i' :
        tipo === 'sublinhado' ? 'u' : 'span'
    );
    try{
        const conteudoSelecionado = range.extractContents();
        elemento.appendChild(conteudoSelecionado);
        range.insertNode(elemento);
        selecao.removeAllRanges();
        const novoRange = document.createRange();
        novoRange.setStartAfter(elemento);
        selecao.addRange(novoRange);
    }catch(e){
        alert(`Erro ao aplicar formatação: ${e.message}`);
    }
};