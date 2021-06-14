export default getMesAtual = () => {
    let mes = new Date()
    switch (mes.getMonth()) {
        case 0: return { num: 1, mes: 'Janeiro' }
        case 1: return { num: 2, mes: 'Fevereiro' }
        case 2: return { num: 3, mes: 'Março' }
        case 3: return { num: 4, mes: 'Abril' }
        case 4: return { num: 5, mes: 'Maio' }
        case 5: return { num: 6, mes: 'Junho' }
        case 6: return { num: 7, mes: 'Julho' }
        case 7: return { num: 8, mes: 'Agosto' }
        case 8: return { num: 9, mes: 'Setembro' }
        case 9: return { num: 10, mes: 'Outubro' }
        case 10: return { num: 11, mes: 'Novembro' }
        case 11: return { num: 12, mes: 'Dezembro' }
    }
}