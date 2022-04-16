import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styles";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { ApiContext } from '../../contexts/apiContext'

import { FiShoppingCart } from 'react-icons/fi'

export default function Inspect(props) {
    const history = useHistory();
    const { allProducts } = useContext(ApiContext);

    const id = props.match.params.id
    const index = parseInt(id) 

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        async function loadProduct() {
            setLoading(true)
            const response = await api.get(`products/${index}`)

            if (response.data === null) {
                history.replace('/')
                return
            }

            let p = {
                category: response.data.category,
                description: response.data.description,
                id: response.data.id,
                image: response.data.image,
                price: response.data.price,
                rating: response.data.rating,
                title: response.data.title,
                quantity: 1
            }

            setProduct(p)
            setLoading(false)
        }

        loadProduct();
    }, [])

    function addItemOnCart() {

        console.log(product)

        const myList = localStorage.getItem('products');

        let savedProducts = JSON.parse(myList) || [];
        // Se tiver algum produto salvo com esse mesmo id precisa ignorar
        const hasProduct = savedProducts.some((savedProduct) => savedProduct.id === product.id)

        if (hasProduct) {
            alert('Esse produto já está no carrinho.')
            return
            //Execução do código finaliza aqui.
        }

        savedProducts.push(product)
        localStorage.setItem('products', JSON.stringify(savedProducts));
        toast.success(`${product.title} adicionado em 'Carrinho'!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function removeQuantity() {
        product.quantity -= 1
        setQuantity(quantity - 1)
    }

    function addQuantity() {
        product.quantity += 1
        setQuantity(quantity + 1)
    }

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
                <Box sx={{ width: '100%' }} >
                    <LinearProgress />
                </Box>
            )}

            {loading === false && (
                <S.InspectItem>
                    <S.BoxLeft>
                        <img src={product.image} />
                    </S.BoxLeft>
                    <S.BoxRight>
                        <S.TitleCompany>Dev Company</S.TitleCompany>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <span>R${product.price}</span>
                        <S.Purchase>
                            <div className="quantity">
                                <button type="button" onClick={removeQuantity}>-</button>
                                <input type="text" value={quantity} />
                                <button type="button" onClick={addQuantity} >+</button>
                            </div>
                            <button className="buttonPurchase" onClick={addItemOnCart}><FiShoppingCart /> Add to cart</button>
                        </S.Purchase>
                    </S.BoxRight>
                </S.InspectItem>)}
        </>
    )
}