import React, {useState, useEffect, useCallback} from 'react';
import * as S from "./styles";

export default function Search( {match} ) {
    const campoBusca = match.params.busca


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

                <S.Results>
                    <p>{campoBusca} </p>
                </S.Results>

            </S.ContainerMain>
        </>
    )
}