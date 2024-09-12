import React from 'react'
import './Alta.scss'
import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'

const Alta = () => {

  useTitulo('Alta')
  
  return (
    <>
    <h1>Formulario de alta de producto</h1>
    <h2>Agregar productos</h2>
    <Formulario />
    <hr />
    <Tabla />
    </>
  )
}

export default Alta