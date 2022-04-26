import React from 'react';
import { Link } from 'react-router-dom'

import error404Image from "../../assets/error.svg"

import * as S from "./styles";

export default function NotFound() {
    return (
        <>
            <S.ContainerMain>
                <img src={error404Image}/>
                <p>
                    Desculpe, mas a página que você está procurando não existe.
                </p>
            </S.ContainerMain>

            <S.TitleProducts>
                <h1>Talvez você se interesse pelos seguintes produtos.</h1>
            </S.TitleProducts>

            <S.ButtonSeeAllProducts>
                <Link to="/">ACESSE O INÍCIO</Link>
            </S.ButtonSeeAllProducts>
        </>
    )
}