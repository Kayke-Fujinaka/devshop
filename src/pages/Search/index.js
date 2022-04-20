import React, { useState, useEffect, useCallback } from 'react';
import * as S from "./styles";
import api from '../../services/api'
import { FaLaptopHouse } from 'react-icons/fa';

import CardProduct from '../../components/CardProduct'

export default function Search({ match }) {
    const campoBusca = match.params.busca

    const [allProducts, setAllProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])
    const [loading, setLoading] = useState(false)

    function returnSearch(value) {
        // const filterRepo = value.filter( (item) => item.title == campoBusca)
        setProductsFilter([])
        let array = []
        value.forEach((item) => {
            console.log(item.title)
            if (String(item.title).includes(campoBusca) || String(item.description).includes(campoBusca)) {
                array.push(item)
                setProductsFilter(array)
                console.log('aqui')
                return
            }
        })
    }

    useEffect(() => {
        setLoading(true)
        api
            .get('/products')
            .then((response) => {
                setAllProducts([...response.data])
                returnSearch([...response.data])
                setLoading(false)
                return
            })
            .catch((err) => {
                console.log(err)
                alert('Deu erro')
                setLoading(false)
            })
    }, [campoBusca])

    return (
        <>

            <S.ContainerMain>

                <S.Breadcrumb>
                    <a href='/'>Home</a>
                    <span>/</span>
                    <a href='#'>My account</a>
                    <span>/</span>
                    <p>Results</p>
                </S.Breadcrumb>

                {loading && (
                    <h1>Carregando.........</h1>
                )}

                <S.Results>
                    {productsFilter.map(item => (
                        <>
                            <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                        </>
                    ))}
                </S.Results>

            </S.ContainerMain>
        </>
    )
}