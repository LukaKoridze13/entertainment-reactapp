import React, {useEffect, useState} from 'react'
import Input from './Input'
import Button from './Button'
export default function Form(props) {
    const [type,setType] = useState('text')
    useEffect(() => {
        props.password !== 'Password' && (setType('password'))

    })
    return (
        <form autoComplete='off' onSubmit={(event) => { event.preventDefault(); props.onSubmit() }}>
            <h1>{props.type}</h1>
            <Input type='email' value={props.email} placeholder='Email address' onChange={props.setEmail} />
            <Input type={type} value={props.password} placeholder='Password' onChange={props.setPassword} />
            <Button disabled={props.disabled} text='Login to your account'/>
            {props.children}
        </form>
    )
}
