import React, { useEffect, useState, createContext } from 'react';
import api from '../services/api'

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])
    const [menProducts, setMenProducts] = useState([])
    const [jeweleryProducts, setJeweleryProducts] = useState([])
    const [electronicsProducts, setElectronicsProducts] = useState([])
    const [womenProducts, setWomenProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        api
        .get('/products')
        .then( (response) => {
            setAllProducts([... response.data])
            setLoading(false)
        })
        .catch((err) => {
            alert('false')
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        api
        .get(`/products/category/${encodeURIComponent("men's clothing")}`)
        .then( (response) => {
            setMenProducts([... response.data])
        })
        .catch((err) => {
            alert('false')
        })
    }, []) 

    useEffect(() => {
        api
        .get(`/products/category/women's%20clothing`)
        .then( (response) => {
            setWomenProducts([... response.data])
        })
        .catch((err) => {
            console.log(err)
            alert('false')
        })
    }, []) 

    useEffect(() => {
        api
        .get(`/products/category/jewelery`)
        .then( (response) => {
            setJeweleryProducts([... response.data])
        })
        .catch((err) => {
            console.log(err)
            alert('false')
        })
    }, [])
    
    useEffect(() => {
        api
        .get(`/products/category/electronics`)
        .then( (response) => {
            setElectronicsProducts([... response.data])
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
                jeweleryProducts,
                electronicsProducts,
                womenProducts,
                loading
            }} >
            {children}
        </ApiContext.Provider>
    )
}

