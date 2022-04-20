import React, { useContext } from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

import CardProduct from '../../components/CardProduct'

import { Link } from 'react-router-dom'

export default function Men() {
    const { menProducts } = useContext(ApiContext)

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Men</p>
            </S.Breadcrumb>

            <S.SomeProducts>
                <ul>
                    {menProducts.map((item) => (
                        <>
                            <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                        </>
                    ))}
                </ul>
            </S.SomeProducts>
        </>
    )
}