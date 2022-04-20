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
        password: yup
            .string()
            .required("A senha é obrigatória"),
    })
    .required();

export default function Login() {

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
                    <p>Login</p>
                </S.Breadcrumb>

                <S.ContainerForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
                                <input
                                    type="email"
                                    placeholder='youremail@email.com'
                                    {...register("name", { required: true })}
                                />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Password
                                <input
                                    type="password"
                                    {...register("email", { required: true })}
                                />
                                {errors.password && <span>{errors.password?.message}</span>}
                            </label>
                        </div>
                        <S.ForgotPassword>
                            <a href='/reset'>Forgot password?</a>
                        </S.ForgotPassword>
                        <S.DivButton>
                            <button type="submit">Sing in</button>
                        </S.DivButton>
                        <p>Don't have an account? <a href='/register'>Register</a></p>
                    </form>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}