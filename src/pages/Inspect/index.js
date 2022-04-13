import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styles";

import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import { ApiContext } from '../../contexts/apiContext'

export default function Inspect(props) {
    const history = useHistory();
    const { allProducts } = useContext(ApiContext);
    const id = props.match.params.id
    const idToNumber = parseInt(id) 

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        async function loadProduct() {
            setLoading(true)
            const response = await api.get(`products/${idToNumber}`)

            if(response.data === null) {
                history.replace('/')
                return
            }

            setProduct(response.data)
            setLoading(false)
        }

        loadProduct();
    }, [])

    return (
        <>
            <S.Breadcrumb>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to="/products">Products</Link>
                <span>/</span>
                <p>{product.title}</p>
            </S.Breadcrumb>

            {loading && (
                <h1>Carregando...</h1>
            )}

            {loading === false && (
            <S.InspectItem>
                <S.BoxLeft>
                    <img src={product.image} />
                </S.BoxLeft>
                <S.BoxRight>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <span>R${product.price}</span>
                </S.BoxRight>
            </S.InspectItem>)}
        </>
    )
}