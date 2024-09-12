import useTitulo from "../hooks/useTitulo";
import './Nosotros.scss'
const Nosotros = () => {
  // Configura el título de la página usando el hook personalizado
  useTitulo('Nosotros');

  return (
    <>
      <section className="nosotros-seccion">
        <div className="contenedor">
          <h2>Nuestra Empresa</h2>
          <div className="contenido">
            <div className="imagen">
              <img src="/img/empresa.png" alt="Nuestra Empresa" />
            </div>
            <div className="texto">
              <p>
                En Infinitoo creemos en el potencial de las empresas colombianas. Por eso, promovemos la creación de alianzas
                significativas a través de servicios especializados en venta tecnológica.
              </p>
              <p>
                Nuestro servicio se basa en la confianza y en la generación de valor y productividad para nuestros clientes. Por eso,
                nuestro portafolio de productos tecnológicos cuenta con expertos informáticos, a nivel nacional, capacitados con los más
                altos estándares profesionales para atender de forma personalizada las necesidades de cada organización.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
