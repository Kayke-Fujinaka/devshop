import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth'

import { useHistory } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as S from "./styles";

const schema = yup
    .object({
        name: yup
            .string()
            .required("O nome é obrigatório"),
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
        password: yup
            .string()
            .min(6, "A senha deve ter pelo menos 6 dígitos")
            .required("A senha é obrigatória"),
        confirmPassword: yup
            .string()
            .required("A Confirmação de Senha é obrigatória")
            .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    })
    .required();

export default function Register() {
    const history = useHistory();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth } = useContext(AuthContext)

    function formSubmit(e) {
        e.preventDefault();

        if (name !== '' && email !== '' && password !== '') {
            signUp(email, name, password).then( () => {
                setName('')
                setEmail('')
                setPassword('')
                history.push('/')
            }) 
        }
    }

    const {
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <>

            <S.ContainerMain>

                <S.Breadcrumb>
                    <a href='/'>Início</a>
                    <span>/</span>
                    <a href='#'>Minha conta</a>
                    <span>/</span>
                    <p>Register</p>
                </S.Breadcrumb>

                <S.ContainerForm>
                    <form onSubmit={formSubmit}>
                        <div className='divLabelInput'>

                            <label>
                                Nome completo
                                <input
                                    className={`input ${errors.name ? "error" : ""}`}
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name", { required: true })}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <span>{errors.name?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Endereço de Email
                                <input
                                    className={`input ${errors.email ? "error" : ""}`}
                                    type="email"
                                    placeholder='youremail@email.com'
                                    {...register("email", { required: true })}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Senha
                                <input
                                    className={`input ${errors.password ? "error" : ""}`}
                                    type="password"
                                    {...register("password", { required: true })}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span>{errors.password?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Confirmação de senha
                                <input
                                    className={`input ${errors.confirmPassword ? "error" : ""}`}
                                    type="password"
                                    {...register("confirmPassword", { required: true })}
                                />
                                {errors.confirmPassword && (<span>{errors.confirmPassword?.message}</span>)}
                            </label>

                        </div>
                        <S.ButtonRegister>
                            <button type="submit">Registrar</button>
                        </S.ButtonRegister>
                        <p>Você já possui uma conta? <a href='/login'>Entrar</a></p>
                    </form>

                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}