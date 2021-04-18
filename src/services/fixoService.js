import api from './api'
import showError from '../common/showError'

async function buscarCustosFixoDoMes(mes) {
    return api.get(`/fixos?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function cadastrarCustoFixo(custo) {
    console.log(custo)
    return api.post(`/fixos`, custo)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function editarCustoFixo(custo) {
    try {
        await api.put(`/fixos`, custo)
    } catch (err) {
        showError(err)
    }
}

async function deletarCustoFixoMesAtual(id) {
    try {
        await api.delete(`/fixos/mes_atual/${id}`)
    } catch (err) {
        showError(err)
    }
}

async function deletarCustoFixoProximosMeses(id) {
    try {
        await api.delete(`/fixos/proximos_meses/${id}`)
    } catch (err) {
        showError(err)
    }
}
async function deletarCustoFixoTodosMeses(id) {
    try {
        await api.delete(`/fixos/todos_meses/${id}`)
    } catch (err) {
        showError(err)
    }
}

export {
    buscarCustosFixoDoMes,
    cadastrarCustoFixo,
    editarCustoFixo,
    deletarCustoFixoMesAtual,
    deletarCustoFixoProximosMeses,
    deletarCustoFixoTodosMeses
}