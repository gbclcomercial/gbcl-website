
import Image from 'next/image'
export default function Home(){
  return (
    <>
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
            <p style={{maxWidth:720,marginTop:12}}>Más de 23 años brindando confianza, transparencia y soluciones contables innovadoras.</p>
            <p style={{marginTop:20}}><a className="btn-primary" href="#contacto">Contáctenos</a></p>
          </div>
        </section>

        <section id="quienes" className="container" style={{padding:'48px 0',textAlign:'left'}}>
          <h2>Quiénes somos</h2>
          <p>Somos un equipo multidisciplinario con amplia experiencia en revisoría fiscal, auditorías, contabilidad, impuestos y asesoría financiera y administrativa. Nos destacamos por nuestra confidencialidad, formación continua y compromiso con los intereses de nuestros clientes.</p>
        </section>

        <section id="servicios" className="container" style={{padding:'0 0 48px 0'}}>
          <h2>Servicios</h2>
          <div className="services">
            <div className="card"><h3>Revisoría Fiscal Integral</h3><p>Auditoría financiera, control interno, gestión y cumplimiento.</p></div>
            <div className="card"><h3>Área Tributaria</h3><p>Planificación tributaria y trámites ante la administración.</p></div>
            <div className="card"><h3>Área de Auditoría</h3><p>Auditorías internas y externas por ciclos.</p></div>
            <div className="card"><h3>Área de Costos</h3><p>Implementación y dirección de sistemas de costos.</p></div>
            <div className="card"><h3>Área Contable</h3><p>Registro y control contable, en sitio o remoto.</p></div>
            <div className="card"><h3>Asesoría Financiera y Administrativa</h3><p>Diagnóstico, diseño de procedimientos y capacitación.</p></div>
          </div>
        </section>

        <section id="experiencia" className="container" style={{padding:'48px 0',textAlign:'left'}}>
          <h2>Experiencia</h2>
          <p>Hemos servido a empresas en construcción, educación, comercio y servicios. Contacte para más referencias.</p>
        </section>

        <section id="clientes" className="container" style={{padding:'48px 0'}}>
          <h2>Nuestros Clientes</h2>
          <p>Ejemplo: A Y S Constructores Ltda, Grupo Anses, Colegios, SFILER S.A, Pécora Ltda.</p>
        </section>

        <section id="equipo" className="container" style={{padding:'48px 0'}}>
          <h2>Equipo</h2>
          <p>Dirección por profesionales con más de 40 años de experiencia.</p>
        </section>

        <section id="certificaciones" className="container" style={{padding:'48px 0'}}>
          <h2>Certificaciones</h2>
          <p>Cumplimos con los más altos estándares de calidad profesional y ética.</p>
        </section>

        <section id="blog" className="container" style={{padding:'48px 0'}}>
          <h2>Blog</h2>
          <p>Próximamente: artículos sobre auditoría, impuestos y finanzas.</p>
        </section>

        <section id="contacto" className="contact-section">
          <div className="container">
            <h2>Contáctenos</h2>
            <p>Tel: 4831158 Bogotá / Cel: 313-3487537</p>
            <p>Email: gbcl.sas@gmail.com</p>
          </div>
        </section>
      </main>

      <a className="whatsapp" href="https://wa.me/573133487537" target="_blank" rel="noreferrer">WhatsApp</a>
    </>
  )
}
