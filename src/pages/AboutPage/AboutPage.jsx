import { Link } from 'react-router-dom';
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div className='about-container'>
      <h2 className='section-heading'>Acerca de Nuestra Tienda</h2>
      <h3 className='sub-heading'>Bienvenidos</h3>
      <div className='flex-container'>
        <div className='left-column'>
          <div className='introduction'>
            <p>Bienvenidos a Nuestra Tienda en Línea: Tu Destino para la Excelencia en Compras</p>
            <p>En Nuestra Tienda, la calidad y la satisfacción del cliente son nuestra razón de ser. Fundada en 2023 por Thiago Vignettes, hemos crecido desde humildes comienzos para convertirnos en un referente en la industria del comercio electrónico.</p>
          </div>
          <div className='history'>
            <h3 className='sub-heading'>Nuestra Historia</h3>
            <p>Fundada en 2023 por Thiago Vignettes, Nuestra Tienda comenzó como un pequeño negocio en línea que vendía productos artesanales. Con el tiempo, nuestra dedicación a la calidad y la satisfacción del cliente nos permitió crecer y expandirnos en nuevos mercados.</p>
          </div>
        </div>
        <div className='right-column'>
          <div className='team'>
            <h3 className='sub-heading'>Nuestro Equipo</h3>
            <p>Nuestro equipo está compuesto por expertos apasionados en sus respectivas áreas, listos para brindarte la mejor experiencia de compra. Estamos aquí para responder a tus preguntas, ofrecer recomendaciones y garantizar que tu experiencia de compra sea inolvidable.</p>
          </div>
          <div className='values'>
            <h3 className='sub-heading'>Nuestros Valores</h3>
            <ul>
              <li>Compromiso con la calidad</li>
              <li>Servicio al cliente excepcional</li>
              <li>Respeto por el medio ambiente</li>
              <li>Innovación constante</li>
            </ul>
          </div>
          <div className='achievements'>
            <h3 className='sub-heading'>Nuestros Logros</h3>
            <p>Hemos sido honrados con varios premios de la industria que respaldan nuestro compromiso con la calidad y la satisfacción del cliente. Nuestro éxito se basa en el apoyo y la confianza de nuestros clientes.</p>
          </div>
        </div>
      </div>
      <div className='cta'>
        <p>¿Listo para Descubrir Más?</p>
        <p>¡Explora nuestra tienda ahora y descubre la diferencia que ofrece Nuestra Tienda! Estamos aquí para ayudarte a encontrar los productos ideales que se adaptan a tu estilo de vida y necesidades. ¡Bienvenidos a una experiencia de compra en línea sin igual!</p>
        <Link to={'/'}> <button className='btn-explore'>Explorar Tienda</button></Link>
      </div>
    </div>
  );
}
