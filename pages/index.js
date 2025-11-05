
import Head from 'next/head'
import BlogSection from '../components/BlogSection';
export default function Home(){
  return (
    <>
      <Head>
        <title>GBCL Auditores - Revisoría Fiscal y Auditoría</title>
        <meta name="description" content="GBCL Auditores - Revisoría Fiscal, auditorías, contabilidad y asesoría financiera en Bogotá, Colombia." />
      </Head>

      <header className="nav">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <img src="/logo.png" alt="GBC Auditores" className="logo" />
          </div>
          <nav style={{display:'flex',gap:18}}>
            <a href="#inicio">Inicio</a>
            <a href="#quienes">Quiénes</a>
            <a href="#servicios">Servicios</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#clientes">Clientes</a>
            <a href="#equipo">Equipo</a>
            <a href="#certificaciones">Certificaciones</a>
            <a href="#blog">Blog</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container">
            <h1 style={{fontSize:36,margin:0}}>Cuidamos la salud financiera de su empresa</h1>
            <p style={{maxWidth:720,marginTop:12}}>Tu aliado en revisoría fiscal, auditoría y asesoría financiera. Más de 23 años de experiencia al servicio de empresas en Bogotá y Colombia.</p>
            <p style={{marginTop:20}}><a className="btn-primary" href="#contacto">Contáctenos</a></p>
          </div>
        </section>

        <section id="quienes" className="container" style={{padding:'48px 0',textAlign:'left'}}>
          <h2>Quiénes somos</h2>
          <p><strong>GBCL Auditores S.A.S</strong> es un equipo de profesionales especializados en la salud empresarial. Con más de 23 años de constitución y más de 40 años de experiencia combinada, ofrecemos servicios integrales en revisoría fiscal, auditoría, contabilidad, costos, impuestos y asesoría financiera y administrativa.</p>
          <p>Nuestro trabajo se rige por la confidencialidad, la formación continua y el compromiso con los intereses institucionales de nuestros clientes.</p>
        </section>

        <section id="servicios" className="container" style={{padding:'0 0 48px 0'}}>
          <h2>Servicios</h2>
          <div className="services">
            <div className="card"><h3>Revisoría Fiscal Integral</h3><p>Estructurada con el ánimo de dar seguridad a los propietarios socios y/o accionistas de empresas, acreedores, trabajadores y al estado sobre el sometimiento de la administración de las empresas a las normas legales y estatutarias.</p></div>
            <div className="card"><h3>Área Tributaria</h3><p>Planeación tributaria, trámites y asesoría en requerimientos de la administración.</p></div>
            <div className="card"><h3>Área de Auditoría</h3><p>Auditorías internas y externas aplicando métodos por ciclos y análisis de riesgos.</p></div>
            <div className="card"><h3>Área de Costos</h3><p>Implementación y dirección de sistemas de costos, informes y controles.</p></div>
            <div className="card"><h3>Área Contable</h3><p>Servicios contables en sitio o remotos, con información oportuna para la toma de decisiones.</p></div>
            <div className="card"><h3>Asesoría Financiera y Administrativa</h3><p>Diagnóstico financiero, diseño de procedimientos y capacitación del personal.</p></div>
          </div>
        </section>

        <section id="experiencia" className="container" style={{padding:'48px 0',textAlign:'left'}}>
          <h2>Experiencia</h2>
          <p>Hemos trabajado con empresas de diversos sectores: construcción, educación, comercio y servicios. Nuestro equipo aporta experiencia en empresas nacionales.</p>
        </section>

        <section id="clientes" className="container" style={{padding:'48px 0'}}>
          <h2>Nuestros Clientes</h2>
          <p>Algunos clientes: A Y S Constructores Ltda, Grupo Anses, Colegio Colombo Americano, SFILER S.A, Pécora Ltda.</p>
        </section>

        <section id="equipo" className="container" style={{padding:'48px 0'}}>
          <h2>Equipo</h2>
          <p>Dirección: William Néstor Bolívar G. — Gerente General; Margarita Triana A. — Gerente Comercial. Profesionalismo y experiencia al servicio de su empresa.</p>
        </section>

        <section id="certificaciones" className="container py-16">
  <h2 className="text-3xl font-bold text-blue-900 mb-6">Certificaciones y Actualizaciones Profesionales</h2>
  <ul className="space-y-2 text-gray-700 text-lg">
    <li>• Taller Renta 2017 – Reforma Tributaria</li>
    <li>• Certificado Asistencia Impuesto Diferido – 2017</li>
    <li>• Certificado Conciliación Fiscal – 2018</li>
    <li>• Certificado Planeación Fiscal – 2018</li>
    <li>• Certificado Renta Personas Naturales – 2018</li>
    <li>• Certificado Actualización Tributaria – 2019</li>
    <li>• Certificado Renta Personas Jurídicas – 2019</li>
    <li>• Certificado Siigo Medios Magnéticos – 2016</li>
    <li>• Certificado Siigo NIIF – 2016</li>
  </ul>
</section>

        <BlogSection />

        <section id="contacto" className="contact-section">
          <div className="container" style={{maxWidth:720}}>
            <h2>Contáctenos</h2>
            <p> Cel: 313-3487537 - 3112656736</p>
            <p>Email:gbcl.sas@gmail.com - gbcl.comercial.sas@gmail.com</p>

            <form action="REPLACE_FORM_ENDPOINT" method="POST" style={{marginTop:20,textAlign:'left'}}>
              <input className="form-input" name="name" placeholder="Nombre" required />
              <input className="form-input" name="email" type="email" placeholder="Correo electrónico" required />
              <input className="form-input" name="company" placeholder="Empresa (opcional)" />
              <textarea className="form-input" name="message" placeholder="Mensaje" rows="5" required></textarea>
              <button className="btn-primary" type="submit">Enviar mensaje</button>
            </form>

            <p style={{marginTop:12,fontSize:13}}>También puede escribirnos por WhatsApp: <a href="https://wa.me/573133487537" style={{color:'#fff',fontWeight:700}}>313-3487537</a></p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
          <div>
            <strong>GBCL Auditores</strong><br/>
            Bogotá, Colombia — William Néstor Bolívar G.<br/>
            © GBCL Auditores 2025. Todos los derechos reservados.
          </div>
          <div style={{textAlign:'right'}}>
            <div> Cel: 313-3487537 - 3112656736</div>
            <div style={{marginTop:6}}>Email:gbcl.sas@gmail.com -gbcl.comercial.sas@gmail.com</div>
          </div>
        </div>
      </footer>

      <a className="whatsapp" href="https://wa.me/573133487537" target="_blank" rel="noreferrer">WhatsApp</a>
    </>
  )
}
