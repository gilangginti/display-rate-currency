import React from 'react'
import { Tr, Th} from './DisplayCurrencyElements'

const CoinCurrency = (props) => {
    return (
            <Tr>
                <Th>{props.Name}</Th>
                <Th>{props.Buy}</Th>
                <Th>{props.Exchange}</Th>
                <Th>{props.Sell}</Th>
            </Tr>
     
    )
}

export default CoinCurrency
