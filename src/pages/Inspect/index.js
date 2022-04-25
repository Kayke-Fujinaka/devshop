import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'
import api from '../../services/api'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { FiShoppingCart } from 'react-icons/fi'

import Loading from '../../components/Loading'

import * as S from "./styles";

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

        const myList = localStorage.getItem('products');
        let savedProducts = JSON.parse(myList) || [];
        const hasProduct = savedProducts.some((savedProduct) => savedProduct.id === product.id)

        if (hasProduct) {
            toast.info('Esse produto já está no carrinho!', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return
        }

        savedProducts.push(product)
        localStorage.setItem('products', JSON.stringify(savedProducts));
        toast.success('Produto adicionado ao carrinho!', {
            position: "top-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    function removeQuantity() {
        if(product.quantity === 0) {
            return
        }
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
                <Loading />
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