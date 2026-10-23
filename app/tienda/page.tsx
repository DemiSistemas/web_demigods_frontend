"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const PRODUCTOS = [
  { id: 1, nombre: "Remera Oficial Camp Demigods", precio: "$15.000", categoria: "Indumentaria", imagen: "👕" },
  { id: 2, nombre: "Pin Metalico de Cabaña", precio: "$4.500", categoria: "Accesorios", imagen: "🛡️" },
  { id: 3, nombre: "Pase Presencial Próximo Evento", precio: "$6.000", categoria: "Entradas", imagen: "🎟️" },
  { id: 4, nombre: "Collar con Cuentas del Campamento", precio: "$8.000", categoria: "Accesorios", imagen: "📿" }
];

export default function TiendaPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2C1A14", padding: "40px 16px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "900px", width: "100%", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Encabezado */}
        <div style={{ textAlign: "center", borderBottom: "2px solid #7A5230", paddingBottom: "24px" }}>
          <span style={{ color: "#D1B280", fontFamily: "serif", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", border: "1px solid #7A5230", padding: "6px 16px", borderRadius: "20px", backgroundColor: "#1A0F0B" }}>
            Mercado Mestizo
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "38px", color: "#E06D1A", fontWeight: "bold", marginTop: "16px", letterSpacing: "2px" }}>
            TIENDA DEL CAMPAMENTO
          </h1>
        </div>

        {/* Productos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {PRODUCTOS.map((prod) => (
            <div 
              key={prod.id}
              style={{
                backgroundColor: "#E2D4B7",
                color: "#2C1A14",
                borderRadius: "8px",
                border: "3px solid #7A5230",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)"
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>{prod.imagen}</div>
              <div>
                <span style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: "bold", color: "#B8520A" }}>
                  {prod.categoria}
                </span>
                <h3 style={{ fontFamily: "serif", fontSize: "18px", fontWeight: "bold", margin: "6px 0", color: "#2C1A14" }}>
                  {prod.nombre}
                </h3>
                <p style={{ fontFamily: "serif", fontSize: "20px", fontWeight: "bold", color: "#E06D1A", margin: "8px 0" }}>
                  {prod.precio}
                </p>
              </div>
              <button 
                style={{ backgroundColor: "#2C1A14", color: "#E8DAA0", border: "none", padding: "10px 16px", borderRadius: "6px", fontFamily: "serif", fontWeight: "bold", fontSize: "13px", cursor: "pointer", marginTop: "12px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
              >
                <ShoppingBag style={{ width: "16px", height: "16px" }} /> Comprar
              </button>
            </div>
          ))}
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