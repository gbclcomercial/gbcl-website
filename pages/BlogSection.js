export default function BlogSection() {
  const posts = [
    { title: "Boletín No. 25 - Enero 2020", file: "/blog/No 25 Definitivo enero 2020.pdf" },
    { title: "Boletín No. 26 - Enero 2021", file: "/blog/No 26 Definitivo enero 2021.pdf" },
    { title: "Boletín No. 27 - Enero 2022", file: "/blog/No 27 Definitivo enero 2022.pdf" },
    { title: "Boletín No. 28 - Enero 2023", file: "/blog/No 28 Definitivo enero 2023.docx.pdf" },
    { title: "Boletín No. 29 - Enero 2024", file: "/blog/No 29 Definitivo enero 2024.docx.pdf" },
    { title: "Boletín No. 30 - Enero 2025", file: "/blog/No 30 Definitivo enero 2025.pdf" },
  ];

  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <h2>Blog</h2>
      <p style={{ marginBottom: 30 }}>Publicaciones anuales de GBC Auditores.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "linear-gradient(135deg, #1d3b6c, #2a4b85)",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{post.title}</h3>
            <p style={{ fontSize: "0.9rem" }}>Ver publicación ⤴️</p>
          </a>
        ))}
      </div>
    </section>
  );
}
