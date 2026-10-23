"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

const PRESENCIALES_DATA = [
  {
    id: "presencial-octubre-2026",
    titulo: "Presencial Octubre 2026",
    fecha: "18 de Octubre, 2026",
    lugar: "Parque Central - Demigods",
    descripcion: "Jornada de combate en la zona Flota, torneo de trivia mitológica y ceremonia de reclamo.",
    fotos: [
      { id: 1, url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80", titulo: "Entrenamiento de combate" },
      { id: 2, url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80", titulo: "Reunión alrededor del fogón" },
      { id: 3, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80", titulo: "Bandera de la Cabaña 7" },
      { id: 4, url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", titulo: "Campistas reunidos" }
    ]
  },
  {
    id: "presencial-septiembre-2026",
    titulo: "Presencial Septiembre 2026",
    fecha: "20 de Septiembre, 2026",
    lugar: "Zona Ogigia & Ítaca",
    descripcion: "Taller de pintura de escudos, partidas de rol en Ogigia y asamblea general de la Legión.",
    fotos: [
      { id: 5, url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80", titulo: "Grupo de semidioses" },
      { id: 6, url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", titulo: "Taller de manualidades" }
    ]
  }
];

export default function GaleriaPage() {
  const [presencialSeleccionado, setPresencialSeleccionado] = useState(PRESENCIALES_DATA[0].id);
  const [fotoModal, setFotoModal] = useState<string | null>(null);

  const presencialActual = PRESENCIALES_DATA.find(p => p.id === presencialSeleccionado) || PRESENCIALES_DATA[0];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2C1A14", padding: "40px 16px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1000px", width: "100%", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #7A5230", paddingBottom: "24px" }}>
          <span style={{ color: "#D1B280", fontFamily: "serif", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #7A5230", padding: "6px 16px", borderRadius: "20px", backgroundColor: "#1A0F0B" }}>
            Bitácora Visual
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "38px", color: "#E06D1A", fontWeight: "bold", marginTop: "16px", letterSpacing: "2px" }}>
            GALERÍA DE FOTOS
          </h1>
        </div>

        {/* Pestañas de Selección */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {PRESENCIALES_DATA.map((pres) => {
            const activo = pres.id === presencialSeleccionado;
            return (
              <button
                key={pres.id}
                onClick={() => setPresencialSeleccionado(pres.id)}
                style={{
                  backgroundColor: activo ? "#E06D1A" : "#1A0F0B",
                  color: activo ? "#FFF8EA" : "#D1B280",
                  border: `2px solid ${activo ? "#E06D1A" : "#7A5230"}`,
                  padding: "10px 18px",
                  borderRadius: "20px",
                  fontFamily: "serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {pres.titulo}
              </button>
            );
          })}
        </div>

        {/* Fotos */}
        <div style={{ backgroundColor: "#E2D4B7", color: "#2C1A14", borderRadius: "10px", padding: "24px", border: "4px solid #7A5230", boxShadow: "0 10px 25px rgba(0,0,0,0.6)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", borderBottom: "2px solid #C4B18F", paddingBottom: "12px", marginBottom: "16px" }}>
            <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              {presencialActual.titulo}
            </h2>
            <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#B8520A", fontWeight: "bold" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar style={{ width: "16px", height: "16px" }} /> {presencialActual.fecha}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin style={{ width: "16px", height: "16px" }} /> {presencialActual.lugar}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "15px", color: "#3B2A20", margin: "0 0 20px 0" }}>
            {presencialActual.descripcion}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {presencialActual.fotos.map((foto) => (
              <div 
                key={foto.id}
                onClick={() => setFotoModal(foto.url)}
                style={{
                  position: "relative",
                  height: "180px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "3px solid #2C1A14",
                  cursor: "pointer",
                  backgroundColor: "#2C1A14"
                }}
              >
                <img src={foto.url} alt={foto.titulo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* BOTÓN VOLVER AL INICIO */}
        <div style={{ textAlign: "center", paddingTop: "10px" }}>
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

      {/* Modal Foto */}
      {fotoModal && (
        <div onClick={() => setFotoModal(null)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.9)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <img src={fotoModal} alt="Foto ampliada" style={{ maxWidth: "800px", maxHeight: "80vh", objectFit: "contain", borderRadius: "8px", border: "4px solid #D1B280" }} />
        </div>
      )}
    </div>
  );
}