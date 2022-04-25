import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/apiContext'

import CardProduct from '../../components/CardProduct'

import * as S from "./styles";

export default function Eletronics() {
    
    const { electronicsProducts } = useContext(ApiContext)

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Eletronics</p>
            </S.Breadcrumb>

            <S.SomeProducts>
                <ul>
                    {electronicsProducts.map((item) => (
                        <>
                            <CardProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                            />
                        </>
                    ))}
                </ul>
            </S.SomeProducts>
        </>
    )
}