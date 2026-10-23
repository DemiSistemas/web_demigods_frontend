"use client";

import Link from "next/link";
import { Compass, Anchor, Castle, Swords, ArrowLeft } from "lucide-react";

const ZONAS_CAMPAMENTO = [
  {
    id: "ogigia",
    nombre: "Ogigia",
    subtitulo: "El Refugio de Paz y Creatividad",
    icono: Compass,
    colorBorde: "#D1B280",
    descripcion: "Inspirada en la mítica isla del descanso, Ogigia es el espacio pensado para la camaradería, el esparcimiento tranquilo y el desarrollo de habilidades artesanales e intelectuales.",
    actividades: [
      "Juegos de mesa estratégicos y rol mitológico.",
      "Talleres de manualidades, pintura de escudos y creación de utilería.",
      "Espacio de charla, lectura y descanso entre batallas."
    ]
  },
  {
    id: "flota",
    nombre: "Flota",
    subtitulo: "El Frente de Combate y Estrategia",
    icono: Anchor,
    colorBorde: "#E06D1A",
    descripcion: "El epicentro de la acción y el entrenamiento físico. Aquí los semidioses ponen a prueba sus reflejos, su puntería y la cohesión de su cabaña en el campo de batalla.",
    actividades: [
      "Entrenamientos y torneos de Softcombat con espadas y escudos.",
      "Juegos de campo masivos (Captura la Bandera, Misiones de Cabañas).",
      "Demostraciones tácticas y pruebas de agilidad para guerreros."
    ]
  },
  {
    id: "itaca",
    nombre: "Ítaca",
    subtitulo: "Aventuras en miniatura",
    icono: Castle,
    colorBorde: "#B8520A",
    descripcion: "El punto de encuentro sagrado donde se enbarcaran en aventuras, con la posibilidad de lograr grandes cosas, o caer en el intento.",
    actividades: [
      "Partidas de rol para jugar en el momento."
    ]
  }
];

export default function CampamentoPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2C1A14", padding: "40px 16px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1000px", width: "100%", display: "flex", flexDirection: "column", gap: "36px" }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #7A5230", paddingBottom: "24px" }}>
          <span style={{ color: "#D1B280", fontFamily: "serif", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #7A5230", padding: "6px 16px", borderRadius: "20px", backgroundColor: "#1A0F0B" }}>
            Mapeo del Campamento
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "38px", color: "#E06D1A", fontWeight: "bold", marginTop: "16px", letterSpacing: "2px" }}>
            EL CAMPAMENTO
          </h1>
        </div>

        {/* SECCIÓN SUPERIOR: ¿Qué hacemos en el campamento? */}
        <div style={{ backgroundColor: "#E2D4B7", color: "#2C1A14", borderRadius: "10px", padding: "28px", border: "4px solid #7A5230", boxShadow: "0 10px 25px rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderLeft: "4px solid #E06D1A", paddingLeft: "12px" }}>
            <Swords style={{ width: "26px", height: "26px", color: "#E06D1A" }} />
            <h2 style={{ fontFamily: "serif", fontSize: "26px", fontWeight: "bold", margin: 0 }}>
              ¿Qué hacemos en el campamento?
            </h2>
          </div>

          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
            No hay una única forma de ser semidiós. Algunos prefieren empuñar una espada y enfrentarse en un combate de softcombat. Otros disfrutan de una partida de estrategia, un juego de mesa, una aventura de rol o un taller. En nuestras reuniones vas a encontrar actividades pensadas para distintos gustos y edades.
          </p>

          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "16px", borderRadius: "8px", border: "1px solid #C4B18F", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
            <p style={{ margin: 0 }}>✨ No necesitás ser experto.</p>
            <p style={{ margin: 0 }}>✨ No necesitás conocer todos los libros.</p>
            <p style={{ margin: 0 }}>✨ Tampoco necesitás llegar con un grupo de amigos.</p>
            <p style={{ fontWeight: "bold", color: "#E06D1A", marginTop: "4px", margin: 0 }}>
              Solo tenés que venir.
            </p>
          </div>

          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
            Demigods está pensado para campistas de distintas edades. Los más chicos pueden venir acompañados por su padre, madre o adulto responsable. Y si querés seguir conectado cuando termine la reunión, tenemos nuestro servidor de Discord (para mayores de 13 años), donde el campamento continúa durante todo el mes.
          </p>
        </div>

        {/* SECCIÓN INFERIOR: Las 3 Zonas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "28px", color: "#D1B280", textAlign: "center", margin: 0 }}>
            ZONAS DEL CAMPAMENTO
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {ZONAS_CAMPAMENTO.map((zona) => {
              const Icono = zona.icono;
              return (
                <div 
                  key={zona.id}
                  style={{
                    backgroundColor: "#E2D4B7",
                    color: "#2C1A14",
                    borderRadius: "10px",
                    border: `4px solid ${zona.colorBorde}`,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.6)"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <div style={{ backgroundColor: "#2C1A14", padding: "10px", borderRadius: "8px", color: zona.colorBorde }}>
                        <Icono style={{ width: "28px", height: "28px" }} />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold", margin: 0, color: "#2C1A14" }}>
                          {zona.nombre}
                        </h3>
                        <p style={{ fontSize: "12px", color: "#B8520A", fontWeight: "bold", margin: 0, textTransform: "uppercase" }}>
                          {zona.subtitulo}
                        </p>
                      </div>
                    </div>

                    <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#3B2A20", marginTop: "12px" }}>
                      {zona.descripcion}
                    </p>

                    <div style={{ marginTop: "16px", backgroundColor: "rgba(74, 46, 32, 0.08)", padding: "14px", borderRadius: "6px" }}>
                      <p style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "14px", color: "#2C1A14", marginBottom: "8px" }}>
                        ⚔️ ¿Qué se hace en {zona.nombre}?
                      </p>
                      <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#3B2A20", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {zona.actividades.map((act, idx) => (
                          <li key={idx}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTÓN VOLVER AL INICIO */}
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1A0F0B",
              color: "#D1B280",
              border: "2px solid #7A5230",
              padding: "12px 28px",
              borderRadius: "8px",
              fontFamily: "serif",
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(0,0,0,0.5)"
            }}
          >
            <ArrowLeft style={{ width: "18px", height: "18px" }} /> Volver al Inicio
          </Link>
        </div>

      </div>
    </div>
  );
}