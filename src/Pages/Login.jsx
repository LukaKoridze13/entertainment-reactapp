import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../Components/Form'
import FormMessage from '../Components/FormMessage'
import Logo from '../Components/Logo'
import { checkLogin, getUsers, logIn } from '../LocalStorage'
import Swal from 'sweetalert2'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function Login() {
  const [email, setEmail] = useState('Email address')
  const [password, setPassword] = useState('Password')
  const [users, setUsers] = useState('Storage')
  const [disabled, setDisabled] = useState(true)
  let navigate = useNavigate()
  const [type, setType] = useState('text')
  useEffect(() => {
    password !== 'Password' && (setType('password'))

  },[password])
  function submit() {
    let logged = false;
    let wrongPassword = true;
    if (users.length===0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Account isn't registered",
      })
    } else {
      users.forEach((user) => {
        console.log(user.email, email,user.password, password)
        if (email === user.email && password === user.password) {
          logged = true;
          wrongPassword = false;
          return false;
        }
        if (email === user.email && password !== user.password) {
          wrongPassword = true;
          return false;
        }
        
      })
      if (logged) {
        logIn();
        navigate('/entertainment-reactapp/home')
      } else if (wrongPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Wrong Password",
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Account isn't registered",
        })
      }
    }
  }
  useEffect(() => {
    if (checkLogin()) {
      navigate('/entertainment-reactapp/home')
    }
  })
  useEffect(() => {
    setUsers(getUsers());
  }, [email,password])
  useEffect(() => {
    if ((email === '' || email === 'Email address') || (password === '' || password === 'Password')) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [email, password])
  return (
    <>
      <Logo />
      <Form  onSubmit={submit}>
        <h1>Login</h1>
        <Input type='email' value={email} placeholder='Email address' onChange={setEmail} />
        <Input type={type} value={password} placeholder='Password' onChange={setPassword} />
        <Button disabled={disabled} text='Login to your account' />
        <FormMessage type='Login' />
      </Form>
    </>
  )
}
