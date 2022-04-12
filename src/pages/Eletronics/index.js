import React, { useContext } from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

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
                        <li key={item.id}>
                            <img src={item.image} alt={`Imagem ${item.title}`} />
                            <div>
                                <p className='title'>{item.title}</p>
                                <span>R${item.price}</span>
                                <p><strong>24</strong>x de <strong>R${(item.price / 24).toFixed(2)}</strong></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </S.SomeProducts>
        </>
    )
}