import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../Components/Form'
import FormMessage from '../Components/FormMessage'
import Logo from '../Components/Logo'
import { getUsers } from '../LocalStorage'
import Swal from 'sweetalert2'
export default function Login() {
  const [email, setEmail] = useState('Email address')
  const [password, setPassword] = useState('Password')
  const [users, setUsers] = useState('Storage')
  const [disabled, setDisabled] = useState(true)
  let navigate = useNavigate()
  function submit() {
    let logged = false;
    let notRegistered = true;
    let wrongPassword = true;
    if (typeof (users) == 'object') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Account isn't registered",
      })
    } else {
      users.forEach((user) => {
        if (email === user.email && password === user.password) {
          logged = true;
          notRegistered = false;
          wrongPassword = false;
          return false;
        }
        if (email === user.email && password !== user.password) {
          wrongPassword = true;
          notRegistered = false;
          return false;
        }
        if (logged) {
          navigate('/entertainment-reactapp/home')
        }else if(wrongPassword){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Wrong Password",
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Account isn't registered",
          })
        }
      })
    }
  }
  useEffect(() => {
    setUsers(getUsers());
    console.log(users)

  }, [email,password])
  useEffect(() => {
    if ((email === '' || email === 'Email address') || (password === '' || password === 'Password')) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  })
  return (
    <>
      <Logo />
      <Form disabled={disabled} onSubmit={submit} type='Login' email={email} setEmail={setEmail} password={password} setPassword={setPassword}>
        <FormMessage type='Login' />
      </Form>
    </>
  )
}
