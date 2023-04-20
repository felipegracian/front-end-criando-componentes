'use strict'

import './card.js'
import { produtos } from './index.js'

const criarCard = (produto) => {
    const card = document.createElement('card-felipe')
    card.classList.add('card')
    card.nome = produto.name
    card.turma = produto.descripcion

    card.append(nome, turma)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('card-container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()

