import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import api from '../../services/api'

import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'

export default function Search({ match }) {
    
    const campoBusca = match.params.busca

    const [allProducts, setAllProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])
    const [loading, setLoading] = useState(false)

    function returnSearch(value) {
        setProductsFilter([])
        let array = []
        value.forEach((item) => {
            if (
                String(item.title)
                    .toLowerCase()
                    .includes(campoBusca.toLowerCase())
                ||
                String(item.description)
                    .toLowerCase()
                    .includes(campoBusca
                    .toLowerCase())
            ) {
                array.push(item)
                setProductsFilter(array)
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
                    <Loading />
                )}

                <S.Results>
                    {productsFilter.map(item => (
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
                </S.Results>

            </S.ContainerMain>
        </>
    )
}