import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  Rocket,
  Mail,
  Instagram,
  Github,
  Linkedin,
  Send,
  Quote,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const navItems = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

function NeonBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.07] animate-grid"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.85 0.19 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.19 195) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-neon-cyan/30 blur-[120px] animate-orb-1" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-neon-magenta/25 blur-[140px] animate-orb-2" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-neon-violet/25 blur-[130px] animate-orb-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className={`mx-auto flex w-full items-center justify-between rounded-full border border-white/10 px-5 py-3 backdrop-blur-xl transition-all sm:px-8 ${
          scrolled ? "bg-background/70 shadow-neon" : "bg-white/5"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-[Space_Grotesk] text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">Agustina<span className="text-gradient-neon">.Panasiuk</span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:bg-neon-cyan hover:shadow-neon sm:text-sm"
        >
          Hablemos
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          Disponible para nuevos proyectos · 2026
        </div>
        <h1 className="font-[Space_Grotesk] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          Tiendas Web que
          <br />
          <span className="text-gradient-neon">Venden de verdad.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Soy Agustina Panasiuk, Creo y Diseño Tiendas Web. Creo sitios que representan negocios,
          modernos y con alma para marcas que no quieren pasar desapercibidas.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta px-6 py-3 text-sm font-medium text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]"
          >
            Ver proyectos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Servicios
          </a>
        </div>
        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
          {[
            { k: "+10", v: "proyectos entregados" },
            { k: "5★", v: "valoración media" },
            { k: "+1 años", v: "creando en la web" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-[Space_Grotesk] text-3xl font-semibold text-gradient-neon sm:text-4xl">{s.k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-neon-cyan">{eyebrow}</span>
      <h2 className="mt-3 font-[Space_Grotesk] text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-magenta/30 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-md">
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-[Space_Grotesk] text-[10rem] font-bold leading-none text-gradient-neon opacity-90">AP</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur-xl">
              <p className="text-xs text-muted-foreground">Actualmente en</p>
              <p className="text-sm font-medium">Buenos Aires · Remoto worldwide</p>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="Sobre mí" title="Estrategia + diseño + código en una sola persona." />
          <p className="text-muted-foreground">
            Llevo más de un año diseñando y programando sitios para marcas independientes,
            negocios creativos y emprendedoras. Me obsesiona la tipografía, los detalles que se
            sienten y crear webs rápidas, accesibles y con personalidad.
          </p>
          <p className="mt-4 text-muted-foreground">
            Trabajo directamente contigo, sin intermediarios. Cada proyecto es un traje a medida,
            no una plantilla más.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Tienda Nube", "Empretienda", "Tienda Negocio", "Integraciones", "Data Entry", "SEO"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "FZSHOP DETAILING",
    tag: "Comercio de Venta de Productos de Detailing",
    desc: "Tienda web creada con Tienda nube, adaptada a la marca y sus consumidores.Integraciones varias.",
    hue: "from-neon-cyan/40 to-neon-violet/40",
    url: "https://fzshop.com.ar/",
  },
  {
    title: "SR Refrigeracion",
    tag: "Comercio de Insumos de Refrigeracion",
    desc: "Tienda web + integracion con Sistema de Gestion + Tabala mayorista ",
    hue: "from-neon-magenta/40 to-neon-cyan/30",
    url: "https://tiendadelorenasanchez.mitiendanube.com/"
  },
  /*{
    title: "Índigo Yoga",
    tag: "Wellness",
    desc: "Plataforma de clases online con suscripción.",
    hue: "from-neon-violet/40 to-neon-magenta/40",
  },
  {
    title: "Kōra Ceramics",
    tag: "E-commerce",
    desc: "Tienda artesanal con checkout personalizado.",
    hue: "from-neon-cyan/30 to-neon-magenta/30",
  },*/
];

function Proyectos() {
  return (
    <section id="proyectos" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Proyectos"
          title="Trabajos recientes."
          subtitle="Una selección de sitios y marcas en los que he colaborado durante los últimos meses."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url ?? "#contacto"}
              target={p.url ? "_blank" : undefined}
              rel={p.url ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div
                className={`aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.hue} relative`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.15),transparent_50%)]" />
                <div className="absolute bottom-4 left-4 font-[Space_Grotesk] text-4xl font-semibold">
                  0{i + 1}
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neon-cyan">{p.tag}</p>
                  <h3 className="mt-2 font-[Space_Grotesk] text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium transition-all group-hover:bg-neon-cyan group-hover:text-primary-foreground group-hover:shadow-neon">
                  {p.url ? "Ver proyecto" : "Contactame"}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
const testimonials = [
  {
    quote:
      "Agus logro transmitir con orden y armonia el tremendo mundo de nicho que es el Detailing.",
    name: "Leandro Fernandez",
    role: "Dueño, Fzshop",
  },
 /*{
   quote:
    "Rápida, meticulosa y con un gusto brutal. Volvería a trabajar con ella sin pensarlo.",
    name: "Pablo Herrera",
    role: "Director creativo, Nébula",
  }
  {
    quote:
      "Mi web pasó a convertir el triple. Además, es una gozada trabajar con ella.",
    name: "Sofía Vidal",
    role: "CEO, Índigo Yoga",
  },*/
];

function Testimonios() {
  return (
    <section id="testimonios" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle eyebrow="Testimonios" title="Clientes que se ya dieron el paso." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors hover:border-neon-cyan/40"
            >
              <Quote className="h-6 w-6 text-neon-cyan" />
              <blockquote className="mt-6 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Palette,
    title: "Tienda web Basica",
    desc: "Identidad digital, carga de productos hasta 100 undiades o integracion con sistema directo, carga de hasta 100 imagenes, descripciones, hasta 7 banners principales, carga de branding y mensaje de marca, pagina de sobre nosotros, y politicas de privacidad.",
    price: "desde $200.000",
    features: ["Creacion de web", "Contextualizacion de la web", "Carga de productos"],
  },
  {
    icon: Code2,
    title: "Web cargada",
    desc: "Tienda web basica + Seo Completo + Carga 200 productos.",
    price: "desde $500.000", 
    features: ["Creacion de web + Seo completo", "Integraciones", "Carga de Productos"],
  },
  {
    icon: Rocket,
    title: "Landing con Wordpress",
    desc: "Página única lista en 10 días para lanzar tu producto o servicio.",
    price: "desde $650.000",
    features: ["Creacion de landing", "Formulario + email", "Integracion"],
  },
];

function Servicios() {
  return (
    <section id="servicios" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Servicios"
          title="Cómo puedo ayudarte."
          subtitle="Tres formatos claros. Si necesitas algo distinto, escríbeme y lo hablamos."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-neon"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 text-neon-cyan">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-[Space_Grotesk] text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-neon-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-gradient-neon font-medium">{s.price}</span>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  Reservar <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mzdnwgan", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md sm:p-16">
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-neon-cyan/25 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-neon-magenta/25 blur-3xl animate-pulse-glow" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neon-cyan">Contacto</span>
              <h2 className="mt-3 font-[Space_Grotesk] text-4xl font-semibold tracking-tight sm:text-5xl">
                ¿Empezamos tu <span className="text-gradient-neon">próxima web</span>?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cuéntame sobre tu proyecto en un email o agenda una llamada gratuita de 20 min.
                Suelo responder en menos de 24 horas.
              </p>
              <div className="mt-8 space-y-3">
                <a href="mailto:agustinapanasiukasesora@gmail.com" className="flex items-center gap-3 text-sm hover:text-neon-cyan">
                  <Mail className="h-4 w-4" /> agustinapanasiukasesora@gmail.com
                </a>
                <a href="https://www.instagram.com/panasiukagus/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-neon-cyan">
                  <Instagram className="h-4 w-4" /> @panasiukagus
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-xl"
            >
              <div>
                <label className="text-xs text-muted-foreground">Nombre</label>
                <input
                  name="nombre"
                  required
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-neon-cyan"
                  placeholder="Cómo te llamas"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-neon-cyan"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Cuéntame</label>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-neon-cyan"
                  placeholder="Sobre tu proyecto, plazos, referencias…"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta py-3 text-sm font-medium text-primary-foreground shadow-neon transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              {status === "sent" && (
                <p className="text-sm text-neon-cyan">¡Gracias! Te voy a responder a la brevedad.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Hubo un error al enviar. Probá de nuevo o escribime directo por mail.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16 sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2 font-[Space_Grotesk] text-xl font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Agustina<span className="text-gradient-neon">.Panasiuk</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Diseño y desarrollo web para marcas que quieren brillar en la red. Buenos Aires, trabajando remoto para todo el mundo.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-neon-cyan">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-neon-cyan">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:agustinapanasiukasesora@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-3.5 w-3.5" /> agustinapanasiukasesora@gmail.com</a></li>
            <li><a href="https://www.instagram.com/panasiukagus/" className="inline-flex items-center gap-2 hover:text-foreground"><Instagram className="h-3.5 w-3.5" /> Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/agus-panasiuk-4834402b6/" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a></li>
            <li><a href="https://github.com/PanasiukAgus" className="inline-flex items-center gap-2 hover:text-foreground"><Github className="h-3.5 w-3.5" /> GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Agustina Panasiuk. Todos los derechos reservados.</p>
        <p>Diseñado y programado con cariño ✦</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <NeonBackground />
      <Nav />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Testimonios />
      <Servicios />
      <Contacto />
      <Footer />
    </main>
  );
}
