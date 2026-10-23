"use client";

import Link from "next/link";
import { ScrollText, ArrowLeft } from "lucide-react";

export default function ConocenosPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2C1A14", padding: "40px 16px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "850px", width: "100%", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #7A5230", paddingBottom: "24px" }}>
          <span style={{ color: "#D1B280", fontFamily: "serif", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #7A5230", padding: "6px 16px", borderRadius: "20px", backgroundColor: "#1A0F0B" }}>
            Bitácora de Historia
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "38px", color: "#E06D1A", fontWeight: "bold", marginTop: "16px", letterSpacing: "2px" }}>
            CONÓCENOS
          </h1>
        </div>

        {/* Pergamino con "¿Cómo empezó todo?" */}
        <div style={{ backgroundColor: "#E2D4B7", color: "#2C1A14", padding: "36px 28px", borderRadius: "12px", border: "6px solid #1D110D", boxShadow: "0 15px 35px rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px", borderLeft: "4px solid #E06D1A", paddingLeft: "12px" }}>
            <ScrollText style={{ width: "28px", height: "28px", color: "#E06D1A" }} />
            <h2 style={{ fontFamily: "serif", fontSize: "28px", fontWeight: "bold", margin: 0 }}>
              ¿Cómo empezó todo?
            </h2>
          </div>

          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#3B2A20", margin: 0 }}>
            Antes de tener cabañas, legiones y un campamento, Demigods era simplemente un grupo de fans con muchas ideas.
          </p>

          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#3B2A20", margin: 0 }}>
            Quienes hoy forman parte del staff nos conocimos años atrás en distintos eventos literarios. Entre charlas y reuniones en un café empezamos a imaginar qué pasaría si pudiéramos llevar las aventuras y los juegos del universo de Riordan al mundo real.
          </p>

          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#3B2A20", margin: 0 }}>
            Nuestra primera oportunidad llegó en Fantasticon, un evento que reunía a fanáticos de la literatura fantástica. Ahí descubrimos que no éramos los únicos que querían un lugar así. Desde entonces, Demigods no dejó de crecer.
          </p>

          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#3B2A20", margin: 0 }}>
            Durante varios años realizamos nuestras actividades al aire libre, hasta que en 2020 tuvimos que encontrar una nueva forma de mantenernos conectados. Así nació nuestro campamento virtual en Discord. Con el regreso de las actividades presenciales, volvimos a reunirnos en persona y continuamos construyendo el campamento que tenemos hoy. Y ahora estás acá.
          </p>
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
    </div>
  );
}