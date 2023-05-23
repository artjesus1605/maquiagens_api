let filtroNome = document.getElementById('filtrar-makes')
let filtroMarcas = document.getElementById('filtro-marcas')
let filtroPreco = document.getElementById('filtro-preco')

filtroNome.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card')

    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.make').textContent

            let expressao = new RegExp(this.value, 'i')

            if (!expressao.test(nome)) {
                card.classList.add('hide')
            } else {
                card.classList.remove('hide')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('hide')
        }
    }

})
filtroMarcas.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card')

    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let name = card.querySelector('.marca').textContent

            let expressao = new RegExp(this.value, 'i')

            if (!expressao.test(name)) {
                card.classList.add('hide')
            } else {
                card.classList.remove('hide')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('hide')
        }
    }

})


let keys = document.querySelectorAll('.card')

if (filtroPreco === 1) {
    keys.sort(function (a, b) {
        if (a.price < b.price) {
            return -1
        } else {
            return true
        }

    })
}




