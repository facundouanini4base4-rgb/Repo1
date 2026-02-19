import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowRight, CheckCircle } from "lucide-react";

function App() {
  const [dark, setDark] = useState(false);

  // Persistencia tema
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Router>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        {/* NAVBAR */}
        <header className="fixed top-0 w-full h-16 backdrop-blur bg-white/70 dark:bg-black/70 flex items-center justify-between px-8 z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="font-bold text-lg">DesignStudio</div>
          <div className="flex items-center gap-6">
            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="bg-teal-600 px-4 py-2 rounded-full text-white hover:bg-teal-500 transition"
            >
              Agendar llamada
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
          >
            Diseño estratégico que convierte visitantes en clientes
          </motion.h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mt-6">
            Branding, diseño web y UI/UX enfocados en resultados medibles.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#work"
              className="bg-teal-600 px-6 py-3 rounded-full text-white hover:bg-teal-500 transition"
            >
              Ver casos reales
            </a>
            <a
              href="#contact"
              className="border px-6 py-3 rounded-full border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Solicitar presupuesto
            </a>
          </div>
        </section>

        {/* PROOF SECTION */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-neutral-900 text-center">
          <h2 className="text-3xl font-bold mb-10">Confían en mi trabajo</h2>
          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            <div>StartupTech</div>
            <div>DigitalCorp</div>
            <div>UrbanWear</div>
            <div>FinGrowth</div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Servicios</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Branding estratégico",
                desc: "Construcción de identidad sólida que diferencia y posiciona.",
              },
              {
                title: "Diseño Web",
                desc: "Sitios optimizados para conversión y performance.",
              },
              {
                title: "UI/UX",
                desc: "Experiencias intuitivas centradas en el usuario.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-800 p-8 rounded-2xl hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-gray-50 dark:bg-neutral-900 px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Proceso</h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            {["Diagnóstico", "Estrategia", "Ejecución"].map((step, i) => (
              <div key={i} className="text-center">
                <CheckCircle className="mx-auto mb-4 text-teal-600" />
                <h3 className="font-semibold text-lg">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Casos de éxito
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="border rounded-2xl overflow-hidden hover:shadow-2xl transition"
              >
                <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Proyecto #{i}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Rediseño completo con incremento del 35% en conversiones.
                  </p>
                  <div className="flex items-center text-teal-600 gap-2">
                    Ver caso completo <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-gray-50 dark:bg-neutral-900 px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">Testimonios</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 italic">
            “Trabajar con DesignStudio transformó nuestra marca y triplicó
            nuestras consultas en 3 meses.”
          </p>
        </section>

        {/* CTA */}
        <section id="contact" className="py-24 px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para escalar tu marca?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Agenda una llamada estratégica gratuita de 20 minutos.
          </p>
          <a
            href="#"
            className="bg-teal-600 px-8 py-4 rounded-full text-white hover:bg-teal-500 transition"
          >
            Agendar ahora
          </a>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500">
          © 2026 DesignStudio — Diseño que genera resultados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
