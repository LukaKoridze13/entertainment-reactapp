import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormMessage(props) {
    let navigate = useNavigate()
    if (props.type === 'Login') {
        return <p onClick={() => { navigate('/entertainment-reactapp/register') }} className='formMessage'>Don’t have an account? <span >Sign Up</span></p>
    } else {
        return <p onClick={() => { navigate('/entertainment-reactapp/') }} className='formMessage'>Don’t have an account? <span >Login</span></p>
    }
}
