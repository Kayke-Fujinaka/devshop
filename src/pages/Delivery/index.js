import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import * as S from "./styles";

export default function Delivery() {
    
    const [productsOnCart, setProductsOnCart] = useState([])
    const [total, setTotal] = useState(0)
    const [qtdItems, setQtdItems] = useState(0)

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [productsOnCart])

    useEffect(() => {
        let totalPrice = 0;
        let qtd = 0;

        productsOnCart.forEach((item, index) => {
            totalPrice += item.price * item.quantity
            qtd += item.quantity
        })
        setTotal(totalPrice.toFixed(2))
        setQtdItems(qtd)
    })

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Entrega</p>
            </S.Breadcrumb>

            <S.ContainerMain>

                <S.ContainerLeft>
                    <div>
                        <S.Form>
                            <h3>DADOS DE CONTATO</h3>
                            <label>
                                <input
                                    className='inputEmail'
                                    type="email"
                                    placeholder="Email"
                                />

                            </label>
                            <input
                                id='check'
                                type="checkbox"
                            />
                            <label for='check' className='labelCheck'>
                                Quero receber ofertas e novidades por email
                            </label>
                        </S.Form>
                    </div>

                    <S.DivMid>
                        <h3>ENTREGA</h3>
                        <select disabled>
                            <option>Brasil</option>
                        </select>
                        <input
                            type="text"
                            placeholder="CEP"
                        />
                        <a target="blank" href='https://buscacepinter.correios.com.br/app/endereco/index.php'>
                            <span>Não sei meu CEP</span>
                        </a>
                    </S.DivMid>

                    <S.DivButton>
                        <Link to="/payment">
                            <button>Continuar</button>
                        </Link>
                    </S.DivButton>
                </S.ContainerLeft>

                <S.ContainerRight>
                    {productsOnCart.map(item => (
                        <S.Product>
                            <img src={item.image} alt={item.title} />
                            <p><span>{item.quantity}</span> x {item.title}</p>
                            <span>R${item.price * item.quantity}</span>
                        </S.Product>
                    ))}
                    <S.Total>
                        {productsOnCart.length === 0 ? (
                            <p>Sem produtos no carrinho.</p>
                        ) : (
                            <>
                                <span>Total:</span>
                                <span>R$ {total}</span>
                            </>)}
                    </S.Total>
                </S.ContainerRight>

            </S.ContainerMain>

        </>)
}