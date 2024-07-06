import React from 'react'

const Input = () => {
  return (
    <>
        <P>Nombre(s)</P>
        <Input type='text' placeholder='Peso' {...register('peso', {required: true, pattern: /^[0-9.\s]+$/})} onChange={validarPeso}></Input>
    </>
  )
}

export default Input