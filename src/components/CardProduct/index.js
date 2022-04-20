import React, { useState, useEffect, useCallback, useHistory } from 'react';
import * as S from "./styles"

import { Link, NavLink } from 'react-router-dom'

import { FiMaximize2 } from 'react-icons/fi'

import Stars from '../../components/Stars'

export default function CardProduct({ id, title, price, description, category, image, rating }) {
    const [rate, setRate] = useState('oi')
    const rateConverted = parseInt(rating.rate)

    useEffect(() => {
        if (rating.rate <= 1) {
            setRate('péssimo')
            return
        } else if (1.1 <= rating.rate && rating.rate <= 1.9) {
            setRate('ruim')
            return
        } else if (2 <= rating.rate && rating.rate <= 2.9) {
            setRate('medio')
            return
        } else if (3 <= rating.rate && rating.rate <= 3.9) {
            setRate('bom')
            return
        }
        else if (3.9 <= rating.rate && rating.rate <= 4.5) {
            setRate('mtbom')
            return
        } else if (4.6 <= rating.rate && rating.rate <= 5) {
            setRate('perfeito')
            return
        }
    }, [])


    return (
        <S.CardProduct>
            <li key={id}>
                <img src={image} alt={`Imagem ${title}`} />
                <div className="contentInfo">
                    <h2>{title}</h2>
                    <strong>R${price}</strong>
                    <span>{rating.count} unidades</span>
                    <div className="rateAndButton">
                        <Stars rate={rate} /> 
                        {rating.rate} 
                        <Link to={`/products/${id}`} > <FiMaximize2 /> Ver</Link>
                    </div>
                </div>
            </li>
        </S.CardProduct>
    )
}