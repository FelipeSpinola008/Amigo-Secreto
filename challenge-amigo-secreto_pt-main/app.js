let seuAmigo = [];

function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let adicionar = inputNome.value.trim();
    
    if (adicionar === "") {
        alert('digite um nome valido');
        return;
    }
    seuAmigo.push(adicionar);
    inputNome.value = "";
    inputNome.focus();
    listaAtualizada();
}

//adiciona os nomes em uma lista para ser sorteado
function listaAtualizada() {
    let atualizarNomes = document.getElementById('listaAmigos');
    atualizarNomes.innerHTML = ""; 

    
    for ( let atualizarLista = 0; atualizarLista < seuAmigo.length; atualizarLista++ ) {
        let item = document.createElement('li');
        item.textContent = seuAmigo[atualizarLista];
        atualizarNomes.appendChild(item);
    }
}

function sortearAmigo() {
    if(seuAmigo.length === 0) {
        alert('nehum nome adicionado');
        return;
    }
    let sorteio = seuAmigo[Math.floor(Math.random() * seuAmigo.length)];
    let vencedor = document.getElementById('resultado');
    vencedor.innerHTML = `O nome sorteado foi ${sorteio}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
    seuAmigo = [];
    
}

