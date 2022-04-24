import React, { useState, useEffect, useContext } from 'react';

import * as S from "./styles";

import { AuthContext } from '../../contexts/auth'

export default function Profile() {
    const { signOut, loadingAuth } = useContext(AuthContext)

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Login</p>
                <span>/</span>
                <p>Profile</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <button type="button" onClick={signOut}>Sign Out</button>
            </S.ContainerMain>
        </>

    )
}