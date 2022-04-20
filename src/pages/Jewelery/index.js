import React, { useContext } from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

import CardProduct from '../../components/CardProduct'

import { Link } from 'react-router-dom'

export default function Jewelery() {
    const { jeweleryProducts } = useContext(ApiContext)

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Jewelery</p>
            </S.Breadcrumb>


            <S.SomeProducts>
                <ul>
                    {jeweleryProducts.map((item) => (
                        <>
                            <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                        </>
                    ))}
                </ul>
            </S.SomeProducts>
        </>
    )
}