import React from 'react'

export default function Form(props) {
    return (
        <form autoComplete='off' onSubmit={(event) => { event.preventDefault(); props.onSubmit() }}>          
            {props.children}
        </form>
    )
}
