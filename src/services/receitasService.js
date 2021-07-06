import api from "./api"
import showError from "../common/showError"

async function buscarReceitasDoMes(mes) {
    return api.get(`/receitas?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function buscarReceita(id) {
    return api.get(`/receitas/${id}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function cadastrarReceita(receita) {
    return api.post(`/receitas`, receita)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function editarReceita(receita) {
    try {
        await api.put(`/receitas`, receita)
    } catch (err) {
        showError(err)
    }
}

async function deletarReceita(id) {
    try {
        await api.delete(`/receitas/${id}`)
    } catch (err) {
        showError(err)
    }
}

export { buscarReceitasDoMes, buscarReceita, cadastrarReceita, editarReceita, deletarReceita }