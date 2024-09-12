import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <div className="contacto-formulario">
    <h2>Contacto</h2>
    <form action="#" method="POST">
      <label htmlFor="nombre">Nombres:</label>
      <input type="text" id="nombre" name="nombre" required />

      <label htmlFor="apellidos">Apellidos:</label>
      <input type="text" id="apellidos" name="apellidos" required />

      <label htmlFor="celular">Número de celular:</label>
      <input type="text" id="celular" name="celular" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="mensaje">¿En qué te podemos ayudar?</label>
      <textarea id="mensaje" name="mensaje" required></textarea>

      <label htmlFor="condiciones">He leído y acepto los términos y condiciones</label>
      <br />
      <input type="radio" id="condiciones" name="condiciones" required />
      <br />

      <br />
      <button type="submit" className="boton-enviar">Enviar</button>
    </form>
  </div>
  )
}

export default Contacto