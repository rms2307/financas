import numeroToMoeda from './numeroToMoeda'

export default calcularTotal = (items) => {
    const soma = (t, v) => t + v
    const total = items
        ? items.map(g => +g.valor || +g.valorParcela || 0).reduce(soma)
        : 0
    return numeroToMoeda(total)
}