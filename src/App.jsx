import { useState } from "react";
import {
  Code,
  Link2,
  Mail,
  ArrowUpRight,
  MapPin,
  Copy,
  Check,
  FileText,
  Briefcase,
} from "lucide-react";

//DATOS PERSONALES
const datos = {
  nombre: "Daniel Caravaca Garcia",
  rol: "Consultor ERP · Desarrollador de software",
  pitch:
    "Consultor ERP junior en O&S Consultores (Grupo Deister), con base de desarrollador: experiencia profesional en frontend (Vue.js, Cypress) y proyectos propios en Java/Spring Boot y Python.",
  ubicacion: "Barcelona, España",
  // Puesto actual: se muestra como etiqueta en la cabecera. Déjalo vacío ("") para ocultarla.
  puestoActual: "Consultor ERP Junior en O&S Consultores",
  email: "daniel.caravacagarcia@gmail.com",

  enlaces: {
    github: "https://github.com/dacaga-hub",
    linkedin: "https://linkedin.com/in/danielcaravaca-dev/",
    cv: "https://drive.google.com/file/d/1eEhkxSIAysYJSzEYbg5pTeCepSyPFxMM/view?usp=drive_link",
  },

  proyectos: [
    {
      titulo: "CiMS",
      descripcion:
        "Aplicación multiplataforma para la gestión y seguimiento de cumbres de montaña de Cataluña. Trabajo en equipo de final de curso, con el que conseguimos el reconocimiento al mejor proyecto por la excelencia demostrada durante su desarrollo.",
      tecnologias: ["Flutter", "API REST", "Node.js", "Express", "SQL"],
      repo: "https://github.com/cims-cat/CiMS",
    },
    {
      titulo: "MyMnga",
      descripcion:
        "Lector de manga de escritorio para gestionar tu biblioteca personal. Importa carpetas locales, escanea capítulos y guarda tu progreso. Maneja estado con Pinia y persiste en SQLite local.",
      tecnologias: ["Tauri", "Vue 3", "TypeScript", "SQLite"],
      repo: "https://github.com/dacaga-hub/MyMnga",
    },
    {
      titulo: "LRU Cache en Java",
      descripcion:
        "Implementación de una caché LRU desde cero, optimizada de O(n) a O(1) con una lista doblemente enlazada (escrita a mano) y un HashMap. Thread-safe mediante synchronized, con suite de tests JUnit que incluye pruebas de concurrencia. Desarrollada con TDD.",
      tecnologias: ["Java", "Maven", "JUnit"],
      repo: "https://github.com/dacaga-hub/LRU-Cache-Java",
    },
    {
      titulo: "URL Shortener en Java",
      descripcion:
        "Acorta URLs largas a un código corto y redirige de vuelta al visitar ese código. Proyecto de aprendizaje de Spring Boot con foco en TDD y decisiones de diseño explícitas.",
      tecnologias: ["Java", "Spring Boot", "Maven", "JUnit"],
      repo: "https://github.com/dacaga-hub/URL-Shortener",
    },
    {
      titulo: "MCP Job Tracker en Python",
      descripcion:
        "Un pequeño servidor Model Context Protocol (MCP), junto con un agente impulsado por Claude que lo utiliza, para realizar consultas en lenguaje natural a una herramienta de seguimiento de búsqueda de empleo.",
      tecnologias: ["Python", "MCP", "Claude API"],
      repo: "https://github.com/dacaga-hub/mcp-job-tracker",
    },
    {
      titulo: "iDevice Photo Rescue",
      descripcion:
        "Herramienta en Python para recuperar la fototeca sincronizada de un iPod Touch antiguo vía el protocolo AFC, sin software de pago ni jailbreak. Nacido de un caso real: el rescate de más de 2800 fotos que Windows no mostraba.",
      tecnologias: ["Python", "pymobiledevice3", "AFC", "iOS"],
      repo: "https://github.com/dacaga-hub/idevice-photo-rescue",
    },
  ],

  // CERTIFICACIONES
  certificaciones: [
    {
      titulo: "Claude Code in Action",
      emisor: "Claude Academy (Anthropic)",
      fecha: "Junio 2026",
      tecnologias: ["Claude Code", "AI Workflows"],
      credencial: "https://academy.claude.com/verify/8e21504bb6e6f6991a10e012716cbd40",
    },
    {
      titulo: "Introduction to Agent Skills",
      emisor: "Claude Academy (Anthropic)",
      fecha: "Junio 2026",
      tecnologias: ["Agent Skills", "Claude Code"],
      credencial: "https://academy.claude.com/verify/dfffcd06281eb741db91da9df6eed8a0",
    },
    {
      titulo: "Introduction to Subagents",
      emisor: "Claude Academy (Anthropic)",
      fecha: "Junio 2026",
      tecnologias: ["Subagents", "Claude Code"],
      credencial: "https://academy.claude.com/verify/2f408bd1bb890f89a3c2dbfadbf4418f",
    },
    {
      titulo: "Introduction to Model Context Protocol",
      emisor: "Claude Academy (Anthropic)",
      fecha: "Septiembre 2026",
      tecnologias: ["MCP", "Python"],
      credencial: "https://academy.claude.com/verify/e6d8b06b1e82a6ad39023d332431520c",
    },
    {
      titulo: "Model Context Protocol: Advanced topics",
      emisor: "Claude Academy (Anthropic)",
      fecha: "Septiembre 2026",
      tecnologias: ["MCP", "Python"],
      credencial: "https://academy.claude.com/verify/5a292b5d5da903bce114a1ab36d72810",
    },
  ],

  // TECNOLOGIAS
  stack: [
    "Vue",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Cypress",
    "Java",
    "Spring Boot",
    "Python",
    "Flutter",
    "React",
    "SQL",
    "API REST",
    "Git & GitHub",
    "Claude AI",
  ],

  sobreMi:
    "Vengo del desarrollo de software y hoy trabajo como consultor ERP: entender cómo funciona cada negocio y convertirlo en soluciones que de verdad le ayuden. Antes fui fisioterapeuta durante cinco años, y de esa etapa me llevo la costumbre de escuchar antes de proponer. Me formo de manera autónoma y constante, sobre todo en IA generativa.",
};

//PALETA
const c = {
  fondo: "#FBFAF8",
  tinta: "#1A1A1E",
  suave: "#6E6E76",
  acento: "#5B4FE6",
  acentoSuave: "#EEECFB",
  borde: "#E8E6E1",
  blanco: "#FFFFFF",
  verde: "#22C55E",
};

const fuente =
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

//COMPONENTES

function Tag({ texto }) {
  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-full"
      style={{ backgroundColor: c.acentoSuave, color: c.acento }}
    >
      {texto}
    </span>
  );
}

function ProyectoCard({ proyecto }) {
  return (
    <article
      className="rounded-2xl p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
    >
      <h3
        className="text-lg font-semibold leading-snug"
        style={{ color: c.tinta }}
      >
        {proyecto.titulo}
      </h3>

      <p className="mt-2 text-sm leading-relaxed" style={{ color: c.suave }}>
        {proyecto.descripcion}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {proyecto.tecnologias.map((tec) => (
          <Tag key={tec} texto={tec} />
        ))}
      </div>

      <div
        className="mt-5 pt-4 flex items-center gap-4 text-sm font-medium"
        style={{ borderTop: `1px solid ${c.borde}` }}
      >
        {proyecto.demo && (
          <a
            href={proyecto.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
            style={{ color: c.acento }}
          >
            Ver demo <ArrowUpRight size={15} />
          </a>
        )}
        <a
          href={proyecto.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: proyecto.demo ? c.suave : c.acento }}
        >
          <Code size={15} /> Código
        </a>
      </div>
    </article>
  );
}

function CertificacionCard({ certificacion }) {
  return (
    <article
      className="rounded-2xl p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
    >
      <h3
        className="text-lg font-semibold leading-snug"
        style={{ color: c.tinta }}
      >
        {certificacion.titulo}
      </h3>

      <p className="mt-2 text-sm leading-relaxed" style={{ color: c.suave }}>
        {certificacion.emisor} · {certificacion.fecha}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {certificacion.tecnologias.map((tec) => (
          <Tag key={tec} texto={tec} />
        ))}
      </div>

      <div
        className="mt-5 pt-4 flex items-center gap-4 text-sm font-medium"
        style={{ borderTop: `1px solid ${c.borde}` }}
      >
        <a
          href={certificacion.credencial}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: c.acento }}
        >
          Ver credencial <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

//PRINCIPAL

export default function Portfolio() {
  const [copiado, setCopiado] = useState(false);

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(datos.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      // si el navegador bloquea el portapapeles, no pasa nada
    }
  }

  return (
    <div
      style={{ backgroundColor: c.fondo, color: c.tinta, fontFamily: fuente }}
      className="min-h-screen w-full"
    >
      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-16">
        {/* ---------- NAVEGACIÓN ---------- */}
        <nav className="flex items-center justify-between">
          <span className="font-semibold tracking-tight">{datos.nombre}</span>
          <div className="flex items-center gap-4">
            <a
              href={datos.enlaces.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:opacity-60 transition-opacity"
            >
              <Code size={20} />
            </a>
            <a
              href={datos.enlaces.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-60 transition-opacity"
            >
              <Link2 size={20} />
            </a>
            <a
              href={datos.enlaces.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ backgroundColor: c.tinta, color: c.fondo }}
            >
              <FileText size={15} /> CV
            </a>
          </div>
        </nav>

        {/* ---------- HERO ---------- */}
        <header className="mt-16 sm:mt-24">
          {datos.puestoActual && (
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
            >
              <Briefcase size={13} style={{ color: c.acento }} />
              {datos.puestoActual}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            {datos.nombre}
          </h1>
          <p
            className="mt-3 text-xl sm:text-2xl font-medium"
            style={{ color: c.acento }}
          >
            {datos.rol}
          </p>

          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: c.suave }}
          >
            {datos.pitch}
          </p>

          <div
            className="mt-6 flex items-center gap-2 text-sm"
            style={{ color: c.suave }}
          >
            <MapPin size={16} /> {datos.ubicacion}
          </div>
        </header>

        {/* ---------- PROYECTOS ---------- */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: c.suave }}>
            Proyectos
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {datos.proyectos.map((p) => (
              <ProyectoCard key={p.titulo} proyecto={p} />
            ))}
          </div>
        </section>

        {/* ---------- STACK ---------- */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: c.suave }}>
            Tecnologías
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {datos.stack.map((t) => (
              <span
                key={t}
                className="text-sm px-3.5 py-1.5 rounded-lg"
                style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- CERTIFICACIONES ---------- */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: c.suave }}>
            Certificaciones
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {datos.certificaciones.map((cert) => (
              <CertificacionCard key={cert.credencial} certificacion={cert} />
            ))}
          </div>
        </section>

        {/* ---------- SOBRE MÍ ---------- */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: c.suave }}>
            Sobre mí
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl">
            {datos.sobreMi}
          </p>
        </section>

        {/* ---------- CONTACTO ---------- */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: c.suave }}>
            Contacto
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: c.suave }}>
            ¿Quieres hablar o comentar algún proyecto? Escríbeme.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${datos.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: c.acento, color: c.blanco }}
            >
              <Mail size={16} /> {datos.email}
            </a>
            <button
              onClick={copiarEmail}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
            >
              {copiado ? (
                <>
                  <Check size={16} style={{ color: c.verde }} /> Copiado
                </>
              ) : (
                <>
                  <Copy size={16} /> Copiar
                </>
              )}
            </button>
          </div>
        </section>

        {/* ---------- PIE ---------- */}
        <footer
          className="mt-24 pt-8 text-sm flex items-center justify-between"
          style={{ borderTop: `1px solid ${c.borde}`, color: c.suave }}
        >
          <span>
            © {new Date().getFullYear()} {datos.nombre}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={datos.enlaces.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:opacity-60"
            >
              <Code size={18} />
            </a>
            <a
              href={datos.enlaces.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-60"
            >
              <Link2 size={18} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}