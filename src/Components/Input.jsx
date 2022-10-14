import React, { useRef, useState } from 'react'
export default function Input(props) {
  const [color,setColor] = useState('')
  let input = useRef()
  function click() {
    if (props.placeholder === input.current.value) {
      input.current.value = ''
      input.current.id ='input-active'
    }
  }
  return (
    <input autoComplete='off' autoCorrect='off' className='input' onClick={click} ref={input} type={props.type} value={props.value} onChange={(e) => { props.onChange(e.target.value) }} />
  )
}
