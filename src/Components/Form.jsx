import React from 'react'

export default function Form(props) {
    return (
        <form className='reglog' autoComplete='off' onSubmit={(event) => { event.preventDefault(); props.onSubmit() }}>          
            {props.children}
        </form>
    )
}
