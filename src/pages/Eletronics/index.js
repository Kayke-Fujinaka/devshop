import React from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

export default function Eletronics() {
    return (
        <S.Breadcrumb>
            <a href='/'>Home</a>
            <span>/</span>
            <p>Eletronics</p>
        </S.Breadcrumb>
    )
}