import numeroToMoeda from './numeroToMoeda'

export default calcularTotal = (custos) => {
    const soma = (t, v) => t + v
    const total = custos
        ? custos.map(g => +g.valor || +g.valorParcela || 0).reduce(soma)
        : 0
    return numeroToMoeda(total)
}