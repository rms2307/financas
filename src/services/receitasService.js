import api from "./api"
import showError from "../common/showError"

async function buscarReceitasDoMes(mes) {
    return api.get(`/receitas?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

async function deletarReceita(id) {
    try {
        await api.delete(`/receitas/${id}`)
    } catch (err) {
        showError(err)
    }
}

export { buscarReceitasDoMes, deletarReceita }