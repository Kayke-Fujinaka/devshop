import React, { useContext } from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

export default function Women() {
    const { womenProducts } = useContext(ApiContext)

    return (
        <>

            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Women</p>
            </S.Breadcrumb>

            <S.SomeProducts>
                <ul>
                    {womenProducts.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={`Imagem ${item.title}`} />
                            <div>
                                <p className='title'>{item.title}</p>
                                <span>R${item.price}</span>
                                <p><strong>10</strong>x de <strong>R${(item.price / 10).toFixed(2)}</strong></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </S.SomeProducts>

        </>
    )
}