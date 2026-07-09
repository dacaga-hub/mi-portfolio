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
} from "lucide-react";

//DATOS PERSONALES
const datos = {
  nombre: "Daniel Caravaca Garcia",
  rol: "Desarrollador de Aplicaciones Multiplataforma",
  pitch:
    "Construyo interfaces web limpias y accesibles. Con experiencia real en Vue.js y buscando mi primera oportunidad como desarrollador.",
  ubicacion: "Barcelona, España",
  disponible: true,
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
      demo: "#", //Sin actualizar
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
  ],

  // CERTIFICACIONES
  certificaciones: [
    {
      titulo: "Claude Code in Action",
      emisor: "Anthropic",
      fecha: "2026",
      tecnologias: ["Claude Code", "AI Workflows"],
      credencial: "https://verify.skilljar.com/c/284kb6fisq5n",
    },
    {
      titulo: "Introduction to Agent Skills",
      emisor: "Anthropic",
      fecha: "2026",
      tecnologias: ["Agent Skills", "Claude Code"],
      credencial: "https://verify.skilljar.com/c/cnc7p94cj9n3",
    },
    {
      titulo: "Introduction to Subagents",
      emisor: "Anthropic",
      fecha: "2026",
      tecnologias: ["Subagents", "Claude Code"],
      credencial: "https://verify.skilljar.com/c/8w5n5fzs8ysm",
    },
  ],

  // TECNOLOGIAS
  stack: [
    "Vue",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Flutter",
    "React",
    "SQL",
    "API REST",
    "Git & GitHub",
    "Responsive design",
    "Claude AI"
  ],

  sobreMi:
    "Soy desarrollador junior de aplicaciones multiplataforma. Disfruto convirtiendo diseños en interfaces que funcionan bien en cualquier dispositivo. Me formo de manera autónoma y busco un equipo donde seguir creciendo, integrando herramientas de IA para desarrollar de forma más eficiente.",
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
      className="group rounded-2xl p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold leading-snug"
          style={{ color: c.tinta }}
        >
          {proyecto.titulo}
        </h3>
        <ArrowUpRight
          size={20}
          className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: c.acento }}
        />
      </div>

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
        <a
          href={proyecto.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: c.acento }}
        >
          Ver demo <ArrowUpRight size={15} />
        </a>
        <a
          href={proyecto.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:underline"
          style={{ color: c.suave }}
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
      className="group rounded-2xl p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold leading-snug"
          style={{ color: c.tinta }}
        >
          {certificacion.titulo}
        </h3>
        <ArrowUpRight
          size={20}
          className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: c.acento }}
        />
      </div>

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
          {datos.disponible && (
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: c.blanco, border: `1px solid ${c.borde}` }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                  style={{ backgroundColor: c.verde }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: c.verde }}
                />
              </span>
              Disponible para trabajar
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
            {datos.certificaciones.map((cert, i) => (
              <CertificacionCard key={i} certificacion={cert} />
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
            ¿Tienes un puesto o quieres hablar? Escríbeme.
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
            <a href={datos.enlaces.github} target="_blank" rel="noreferrer" className="hover:opacity-60">
              <Code size={18} />
            </a>
            <a href={datos.enlaces.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-60">
              <Link2 size={18} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
