import api from './api'
import showError from '../common/showError'

async function buscarCustosDiversosDoMes(mes) {
    return api.get(`/diversos?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function cadastrarCustoDiverso(custo) {
    return api.post(`/diversos`,
        {
            desc: custo.desc,
            valor: custo.valor,
            data: custo.data
        })
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function deletarCustoDiverso(id) {
    try {
        await api.delete(`/diversos/${id}`)
    } catch (err) {
        showError(err)
    }
}

export { buscarCustosDiversosDoMes, cadastrarCustoDiverso, deletarCustoDiverso }