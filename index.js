function toggleCardapio() {
    let cardapio = window.document.getElementById('cardapio');

    if (cardapio.classList.contains('hidden')) {
        cardapio.classList.remove('hidden')
    } else {
        cardapio.classList.add('hidden');
    }
}

function clickMenu() {
    let item = document.getElementById('item');

    if (item.classList.contains('itens')) {
        item.classList.remove('itens')
    } else {
        item.classList.add('itens');
    }
}
