import { useContext } from 'react'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'
import ProductosContext from '../context/ProductosContext'

const Inicio = () => {
  
  const {productos} = useContext(ProductosContext)

  useTitulo('Inicio')
  
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>¡Mira nuestros productos!</h1>
          <p>Se encontraron estos productos</p>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map((producto) =>(
              
              <Card key={producto.id} producto={producto}/>

            ))
          }


          
        </div>

      </section> 
    </main>
  )
}

export default Inicio