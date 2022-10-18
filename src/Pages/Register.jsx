import React, { useState, useEffect } from 'react'
import Form from '../Components/Form'
import Logo from '../Components/Logo'
import FormMessage from '../Components/FormMessage'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { checkLogin, checkUser, createUser, logIn } from '../LocalStorage'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Register() {
    const [email, setEmail] = useState('Email address')
    const [password, setPassword] = useState('Password')
    const [repeatPassword, setRepeatPassword] = useState('Repeat password')
    const [disabled, setDisabled] = useState(true)
    const [type, setType] = useState('text')
    const [typeRep, setTypeRep] = useState('text')
    let navigate = useNavigate()
    function submit() {
        if (checkUser(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Email already registered",
            })
        } else {
            createUser(email, password)
            logIn(email)
            navigate('/entertainment-reactapp/home')
        }
    }
    useEffect(() => {
        if (checkLogin()) {
            navigate('/entertainment-reactapp/home')
        }
    })
    useEffect(() => {
        password !== 'Password' && (setType('password'))
        repeatPassword !== 'Repeat password' && (setTypeRep('password'))

    }, [password, repeatPassword])
    useEffect(() => {
        if ((email === '' || email === 'Email address') || (password === '' || password === 'Password') || (password !== repeatPassword)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [email, password, repeatPassword])
    return (
        <>
            <Logo />
            <Form onSubmit={submit} >
                <h1>Sign Up</h1>
                <Input type='email' value={email} placeholder='Email address' onChange={setEmail} />
                <Input type={type} value={password} placeholder='Password' onChange={setPassword} />
                <Input type={typeRep} value={repeatPassword} placeholder='Repeat password' onChange={setRepeatPassword} />
                <Button disabled={disabled} text='Create an account' />
                <FormMessage type='Sign Up' />
            </Form>
        </>
    )
}
