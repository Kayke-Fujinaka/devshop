import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom'
import { PayPalButtons } from '@paypal/react-paypal-js'

import donateSvg from '../../assets/creditcard.svg'

import * as S from "./styles";

export default function Donate() {

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Donate</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <img src={donateSvg} />
                <h1>O DevShop não possui fins lucrativos, o projeto  foi desenvolvidoapenas ppara estudo e futuras aplicações.</h1>
                <PayPalButtons />
            </S.ContainerMain>
        </> 
    )
}
