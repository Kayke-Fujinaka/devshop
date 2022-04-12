import React, { useEffect, useState, createContext } from 'react';
import api from '../services/api'

export const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        api 
        .get('/products')
        .then((response) => {
            setAllProducts([... response.data])
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
            }} >
            {children}
        </ApiContext.Provider>
    )
}

