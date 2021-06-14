import React from 'react'

import CartaoCredito from '../screens/CartaoCredito/CartaoCreditoList'

const CreditCard = (props) => {
    return (
        <CartaoCredito mesAtual={props.mesAtual} />
    )
}

export default CreditCard