import api from './api'
import showError from '../common/showError'

async function buscarFaturaDoMes(mes) {
    return api.get(`/creditos?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function buscarCartoes() {
    return api.get(`/creditos/cartao`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function cadastrarGastoNoCartao(gasto) {
    return api.post(`/creditos`,
        {
            desc: gasto.desc,
            valor: gasto.valor,
            dataCompra: gasto.dataCompra,
            numeroDeParcelas: gasto.numeroDeParcelas,
            cartaoCreditoId: gasto.cartaoCreditoId
        })
        .then((response) => response.data)
        .catch((err) => showError(err))
}

export {
    buscarFaturaDoMes,
    cadastrarGastoNoCartao,
    buscarCartoes
}