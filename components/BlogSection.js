import Link from 'next/link'

const boletines = [
  { year: 2020, title: 'Boletín Informativo GBC Auditores – Enero 2020', file: '/blog/No 25 Definitivo enero 2020.pdf', img: '/blog/boletin_2020.png' },
  { year: 2021, title: 'Boletín Informativo GBC Auditores – Enero 2021', file: '/blog/No 26 Definitivo enero 2021.pdf', img: '/blog/boletin_2021.png' },
  { year: 2022, title: 'Boletín Informativo GBC Auditores – Enero 2022', file: '/blog/No 27 Definitivo enero 2022.pdf', img: '/blog/boletin_2022.png' },
  { year: 2023, title: 'Boletín Informativo GBC Auditores – Enero 2023', file: '/blog/No 28 Definitivo enero 2023.docx.pdf', img: '/blog/boletin_2023.png' },
  { year: 2024, title: 'Boletín Informativo GBC Auditores – Enero 2024', file: '/blog/No 29 Definitivo enero 2024.docx.pdf', img: '/blog/boletin_2024.png' },
  { year: 2025, title: 'Boletín Informativo GBC Auditores – Enero 2025', file: '/blog/No 30 Definitivo enero 2025.pdf', img: '/blog/boletin_2025.png' },
]

export default function BlogSection(){
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Boletines Informativos GBCL Auditores</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">En esta sección encontrará nuestros boletines informativos anuales con novedades contables, tributarias y de auditoría, elaborados por el equipo de GBCL Auditores.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boletines.map(b => (
            <article key={b.year} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105">
           <img
  src={b.img}
  alt={b.title}
  className="w-24 h-32 object-cover rounded-lg border-2 border-[#d4af37] mx-auto shadow-lg"
/>

              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">{b.title}</h3>
                  <p className="text-gray-600">Actualización tributaria y contable</p>
                </div>
                <div>
                  <a href={b.file} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded">
                    Abrir Boletín
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700">Para recibir nuestros boletines directamente en su correo, contáctenos en <strong>gbcl.comercial.sas@gmail.com</strong> o escríbanos por WhatsApp al <strong>+57 313 348 7537</strong>.</p>
        </div>
      </div>
    </section>
  )
}
