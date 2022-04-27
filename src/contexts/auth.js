import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebase';

import { useHistory } from "react-router-dom";

import { toast } from 'react-toastify'

export const AuthContext = createContext({})

function AuthProvider ({ children }) {

    const history = useHistory();

    const [user, setUser] = useState(null); 
    const [loadingAuth, setLoadingAuth] = useState(false)

    useEffect(()=> {

        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');
            // se tem algo no storage, entra aqui...
            if(storageUser){
                setUser(JSON.parse(storageUser)) 
            }
        }

        loadStorage()

    }, []) 

    //function para cadastro
    async function signUp(email, name, password){
        setLoadingAuth(true)
        // função espera os dados chegarem, então...
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;
            let email = value.user.email
            
            await firebase.firestore().collection('users')
            .doc(uid).set({
                name: name,
                email: email
            })
            .then( () => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);
                toast.success('Cadastro efetuado com sucesso!')
                setLoadingAuth(false);
                history.push('/')
            } )
            .catch( error => {
                setLoadingAuth(false);

            })
        })
        .catch( error => {
            if(error.code ===  'auth/email-already-in-use') {
                toast.error('Já foi criada uma conta com esse email.')
                return
            }
            toast.error('Ops, algo deu errado.')
        })

    }

    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data))
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    async function logIn(email, password) {
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async (value)=>{
            let uid = value.user.uid
            
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();

            let data = {
                uid: uid,
                name: userProfile.data().name,
                email: userProfile.data().email
            }
            setUser(data)
            storageUser(data)
            toast.success(`Bem vindo de volta!`)
            setLoadingAuth(false)
        })
        .catch((error)=>{
            setLoadingAuth(false)
            toast.error('Ops, algo deu errado!')
        })
    }

    return (
        <AuthContext.Provider 
        value={{
            signed: !!user, 
            user, 
            signUp,
            signOut, 
            logIn,
            loadingAuth,
            setUser,
            storageUser
            }} >
        {children}
        </AuthContext.Provider>
    )



}

export default AuthProvider