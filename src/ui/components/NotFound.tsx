import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

interface Props {
  message: string
}

export const NotFound: React.FC<Props> = ({ message }) => {

  const navigate = useNavigate()

  return (

    <div className='notFoundContainer'>
      <h3 className='title'>Parece que esta pagina no existe</h3>
      <p className='message'>{message}</p>
      <div>
        <button className='button' onClick={() => navigate(-1)}>Volver atrás</button>
      </div>
    </div>
  )
}
