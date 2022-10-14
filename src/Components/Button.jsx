import React from 'react'

export default function Button(props) {
  if (props.disabled) {
    return <button disabled type='submit' onClick={props.onClick} className='login-button button-disabled'>{props.text}</button>
  } else {
    return <button type='submit' onClick={props.onClick} className='login-button button-active'>{props.text}</button>
  }
}
