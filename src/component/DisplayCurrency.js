import '../App.css'
import React, {useState, useEffect}from 'react'
import axios from 'axios'

import { Container, Table, Td, Th, Tr, Date } from './DisplayCurrencyElements'

import CoinCurrency from './CoinCurrency'

const DisplayCurrency = () => {
    //coins
    const [coins, setCoins] = useState([])
    //date
    const [date, setDate] = useState ([])
    
    //dataArray
    const data = [
        {
            name: 'CAD',
            buy : coins.CAD - coins.CAD * 2/100, 
            exchange : coins.CAD,
            sell: coins.CAD + coins.CAD *2/100
        },
        {
            name: 'IDR',
            buy : coins.IDR - coins.IDR * 2/100,
            exchange : coins.IDR,
            sell: coins.IDR + coins.IDR * 2/100
        },
        {
            name: 'JPY',
            buy : coins.JPY - coins.JPY * 2/100,
            exchange : coins.JPY,
            sell: coins.JPY + coins.JPY * 2/100
        },
        {
            name: 'CHF',
            buy : coins.CHF - coins.CHF * 2/100,
            exchange : coins.CHF,
            sell: coins.CHF + coins.CHF * 2/100
        },
        {
            name: 'EUR',
            buy : coins.EUR - coins.EUR * 2/100,
            exchange : coins.EUR,
            sell: coins.EUR + coins.EUR * 2/100
        },
        {
            name: 'USD',
            buy : coins.USD - coins.USD * 2/100,
            exchange : coins.USD,
            sell: coins.USD + coins.USD * 2/100
        },
    ]
    useEffect(() => {
        axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=ef068ce41225dcacc497245287c654d2&base=EUR&symbols=CAD,IDR,JPY,CHF,EUR,USD')
        .then(res =>{
        setCoins(res.data.rates)
        setDate(res.data.date)
        }).catch(error => console.log(error))
    },[])

    return (
        <>
        <Date>Date {date}</Date>
        <Container>
            <Table>
            <Tr>
                <Td></Td>
                <Td>We Buy</Td>
                <Td>Exchange <br></br> Rate</Td>
                <Td>We Sell</Td>
            </Tr>
            
            {data.map((datas, index)=>{
                let weBuy = datas.buy;
                let exchangeRate = datas.exchange;
                let weSell = datas.sell;
                return <CoinCurrency key={index} 
                                     Name={datas.name} 
                                     Buy={weBuy.toLocaleString()} 
                                     Exchange={exchangeRate.toLocaleString()}
                                     Sell={weSell.toLocaleString()}></CoinCurrency>;
            })}

            </Table>
        </Container>
    </>
    )
}

export default DisplayCurrency;
