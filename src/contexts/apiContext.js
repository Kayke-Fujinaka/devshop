import React, { useEffect, useState, createContext } from 'react';
import api from '../services/api'

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])
    const [menProducts, setMenProducts] = useState([])

    useEffect(() => {
        api
        .get('/products')
        .then( (response) => {
            setAllProducts([... response.data])
            console.log(allProducts)
        })
        .catch((err) => {
            console.log(err)
            alert('false')
        })
    }, [])

    useEffect(() => {
        api
        .get(`/products/category/${encodeURIComponent("men's clothing")}`)
        .then( (response) => {
            setMenProducts([... response.data])
            console.log(allProducts)
        })
        .catch((err) => {
            console.log(err)
            alert('false')
        })
    }, []) 

    return (
        <ApiContext.Provider
            value={{
                allProducts,
                menProducts,
            }} >
            {children}
        </ApiContext.Provider>
    )
}

