import React from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as S from "./styles";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const schema = yup
    .object({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
    })
    .required();

export default function Forgot() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(watch("name"));

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <>

            <S.ContainerMain>

                <S.Breadcrumb>
                    <a href='/'>Home</a>
                    <span>/</span>
                    <a href='#'>My account</a>
                    <span>/</span>
                    <p>Forgot Password</p>
                </S.Breadcrumb>

                <S.Information>
                    <p>We will send you an email so you can change your password.</p>
                </S.Information>

                <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
                                <input
                                    type="email"
                                    placeholder='youremail@email.com'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span> {errors.email?.message}</span>}
                            </label>
                        </div>
                        <S.DivButton>
                            <button type="submit">Send email</button>
                        </S.DivButton>
                        <p>Back to <a href='/login'>Login</a></p>
                    </div>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}