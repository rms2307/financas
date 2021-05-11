import api from './api'
import showError from '../common/showError'

async function buscarFaturaDoMes(mes) {
    return api.get(`/creditos?MesAtual=${mes}`)
        .then((response) => response.data)
        .catch((err) => showError(err))
}

export {
    buscarFaturaDoMes,
}