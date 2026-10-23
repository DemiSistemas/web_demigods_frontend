"use client";

import { useState } from "react";
import { Compass, Camera, ShoppingBag, BookOpen, Flame, Heart, ScrollText } from "lucide-react";

export default function Home() {
  const [abierto, setAbierto] = useState(false);

  const irA = (ruta: string) => {
    window.location.href = ruta;
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 16px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#2C1A14", color: "#E8DAA0" }}>
      
      {/* Encabezado Principal */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <span style={{ color: "#D1B280", fontFamily: "serif", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #7A5230", padding: "6px 18px", borderRadius: "20px", backgroundColor: "#1A0F0B" }}>
          Temporada de Entrenamiento
        </span>
        <h1 style={{ fontFamily: "serif", fontSize: "48px", color: "#E06D1A", fontWeight: "bold", marginTop: "12px", textShadow: "2px 2px 4px rgba(0,0,0,0.8)", letterSpacing: "4px" }}>
          DEMIGODS
        </h1>
      </div>

      {/* VENTANA GRANDE DE BIENVENIDO */}
      <div 
        onClick={() => setAbierto(!abierto)}
        style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "800px", 
          height: "520px", 
          borderRadius: "10px", 
          border: "14px solid #1D110D", 
          backgroundColor: "#E2D4B7", 
          perspective: "1200px",
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px rgba(0,0,0,0.9)",
          cursor: "pointer",
          marginBottom: "48px",
          overflow: "hidden"
        }}
      >
        {/* REVELADO INTERIOR DE LA VENTANA (¿Qué es? y ¿Por qué?) */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            backgroundColor: "#E2D4B7", 
            padding: "32px 28px", 
            overflowY: "auto", 
            color: "#2C1A14", 
            zIndex: 1, 
            display: "flex", 
            flexDirection: "column", 
            gap: "24px" 
          }}
        >
          <div style={{ textAlign: "center", borderBottom: "2px solid #C4B18F", paddingBottom: "16px" }}>
            <Flame style={{ width: "44px", height: "44px", color: "#E06D1A", margin: "0 auto 8px" }} />
            <h2 style={{ fontFamily: "serif", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase", margin: 0 }}>
              ¡BIENVENIDO A DEMIGODS!
            </h2>
          </div>

          {/* Sección 1: ¿Qué es Demigods Arg? */}
          <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderLeft: "4px solid #E06D1A", paddingLeft: "12px" }}>
              <Compass style={{ width: "22px", height: "22px", color: "#E06D1A" }} />
              <h3 style={{ fontFamily: "serif", fontSize: "22px", fontWeight: "bold", margin: 0 }}>
                ¿Qué es Demigods Arg?
              </h3>
            </div>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
              Somos un grupo de fans de las obras de Rick Riordan que, por un rato, trae la mitología y las aventuras de sus héroes a nuestro mundo. Un lugar donde podés dejar atrás la vida entre mortales y encontrarte con otros semidioses como vos.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
              Nos reunimos una vez al mes para jugar, entrenar y vivir nuestras propias aventuras. Juegos de estrategia, rol, softcombat, juegos de mesa, talleres y actividades físicas son algunas de las cosas que vas a encontrar en nuestras reuniones.
            </p>
          </section>

          {/* Sección 2: ¿Por qué hacemos todo esto? */}
          <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderLeft: "4px solid #E06D1A", paddingLeft: "12px" }}>
              <Heart style={{ width: "22px", height: "22px", color: "#E06D1A" }} />
              <h3 style={{ fontFamily: "serif", fontSize: "22px", fontWeight: "bold", margin: 0 }}>
                ¿Por qué hacemos todo esto?
              </h3>
            </div>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
              Porque las historias de Rick Riordan siempre tuvieron algo más que monstruos, dioses y aventuras. Sus personajes son chicos que muchas veces sienten que no encajan en el mundo que los rodea. Chicos que descubren que aquello que los hace diferentes también puede ser aquello que los hace especiales.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3B2A20", margin: 0 }}>
              El Campamento Mestizo nació como un refugio para esos personajes: un lugar donde podían aprender, entrenar y, sobre todo, encontrarse con otros que los entendieran. Eso es lo que queremos construir también nosotros.
            </p>
          </section>
        </div>

        {/* POSTIGO IZQUIERDO DE MADERA */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
            boxSizing: "border-box",
            backgroundColor: "#4A2E20",
            backgroundImage: "repeating-linear-gradient(90deg, #4A2E20 0px, #4A2E20 45px, #2A170E 46px, #2A170E 48px)",
            borderRight: "2px solid #1D110D",
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            transform: abierto ? "rotateY(-125deg)" : "rotateY(0deg)",
            transition: "transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: abierto ? "none" : "6px 0 18px rgba(0,0,0,0.7)",
            pointerEvents: "none"
          }}
        />

        {/* POSTIGO DERECHO DE MADERA */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
            boxSizing: "border-box",
            backgroundColor: "#4A2E20",
            backgroundImage: "repeating-linear-gradient(90deg, #4A2E20 0px, #4A2E20 45px, #2A170E 46px, #2A170E 48px)",
            borderLeft: "2px solid #1D110D",
            transformOrigin: "right center",
            transformStyle: "preserve-3d",
            transform: abierto ? "rotateY(125deg)" : "rotateY(0deg)",
            transition: "transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: abierto ? "none" : "-6px 0 18px rgba(0,0,0,0.7)",
            pointerEvents: "none"
          }}
        />

        {/* CARTEL CENTRADO "BIENVENIDO" */}
        {!abierto && (
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              width: "75%",
              maxWidth: "280px",
              pointerEvents: "none"
            }}
          >
            <div style={{ backgroundColor: "#2C1A14", border: "3px solid #7A5230", color: "#E8DAA0", padding: "18px 24px", borderRadius: "8px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.9)" }}>
              <p style={{ fontFamily: "serif", fontSize: "22px", color: "#D1B280", fontWeight: "bold", letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>
                BIENVENIDO
              </p>
            </div>
          </div>
        )}
      </div>

      {/* LOS 4 BOTONES 3D GRANDES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "900px", width: "100%" }}>
        
        {/* 1. CAMPAMENTO */}
        <div 
          onClick={() => irA("/campamento")}
          style={{
            backgroundColor: "#1A0F0B",
            border: "4px solid #7A5230",
            borderBottom: "8px solid #4A2E20",
            borderRadius: "12px",
            padding: "28px 20px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#E06D1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#7A5230";
          }}
        >
          <Compass style={{ width: "40px", height: "40px", color: "#E06D1A" }} />
          <h3 style={{ fontFamily: "serif", fontSize: "20px", color: "#D1B280", margin: 0, letterSpacing: "1px", fontWeight: "bold" }}>
            CAMPAMENTO
          </h3>
          <p style={{ fontSize: "13px", color: "#C0AC97", margin: 0 }}>
            Ogigia, Flota e Ítaca
          </p>
        </div>

        {/* 2. TIENDA */}
        <div 
          onClick={() => irA("/tienda")}
          style={{
            backgroundColor: "#1A0F0B",
            border: "4px solid #7A5230",
            borderBottom: "8px solid #4A2E20",
            borderRadius: "12px",
            padding: "28px 20px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#E06D1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#7A5230";
          }}
        >
          <ShoppingBag style={{ width: "40px", height: "40px", color: "#E06D1A" }} />
          <h3 style={{ fontFamily: "serif", fontSize: "20px", color: "#D1B280", margin: 0, letterSpacing: "1px", fontWeight: "bold" }}>
            TIENDA
          </h3>
          <p style={{ fontSize: "13px", color: "#C0AC97", margin: 0 }}>
            Mercado y Entradas
          </p>
        </div>

        {/* 3. GALERÍA */}
        <div 
          onClick={() => irA("/galeria")}
          style={{
            backgroundColor: "#1A0F0B",
            border: "4px solid #7A5230",
            borderBottom: "8px solid #4A2E20",
            borderRadius: "12px",
            padding: "28px 20px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#E06D1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#7A5230";
          }}
        >
          <Camera style={{ width: "40px", height: "40px", color: "#E06D1A" }} />
          <h3 style={{ fontFamily: "serif", fontSize: "20px", color: "#D1B280", margin: 0, letterSpacing: "1px", fontWeight: "bold" }}>
            GALERÍA DE FOTOS
          </h3>
          <p style={{ fontSize: "13px", color: "#C0AC97", margin: 0 }}>
            Recuerdos por Presencial
          </p>
        </div>

        {/* 4. CONÓCENOS */}
        <div 
          onClick={() => irA("/conocenos")}
          style={{
            backgroundColor: "#1A0F0B",
            border: "4px solid #7A5230",
            borderBottom: "8px solid #4A2E20",
            borderRadius: "12px",
            padding: "28px 20px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,0,0,0.7)",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#E06D1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#7A5230";
          }}
        >
          <BookOpen style={{ width: "40px", height: "40px", color: "#E06D1A" }} />
          <h3 style={{ fontFamily: "serif", fontSize: "20px", color: "#D1B280", margin: 0, letterSpacing: "1px", fontWeight: "bold" }}>
            CONÓCENOS
          </h3>
          <p style={{ fontSize: "13px", color: "#C0AC97", margin: 0 }}>
            Cómo empezó todo
          </p>
        </div>

      </div>

    </div>
  );
}