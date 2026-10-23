"use client";
import Link from "next/link";
import { Flame } from "lucide-react";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#2C1A14", borderBottom: "3px solid #7A5230", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "serif", fontSize: "20px", fontWeight: "bold", color: "#D1B280", textDecoration: "none" }}>
          <Flame style={{ color: "#E06D1A" }} /> DEMIGODS
        </Link>

        {/* Enlaces del sitio */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontFamily: "serif", fontSize: "15px" }}>
          <Link href="/" style={{ color: "#E8DAA0", textDecoration: "none", fontWeight: "600" }}>Inicio</Link>
          <Link href="/conocenos" style={{ color: "#E8DAA0", textDecoration: "none", fontWeight: "600" }}>Conócenos</Link>
          <Link href="/campamento" style={{ color: "#E8DAA0", textDecoration: "none", fontWeight: "600" }}>Campamento</Link>
          <Link href="/galeria" style={{ color: "#E8DAA0", textDecoration: "none", fontWeight: "600" }}>Galería</Link>
          <Link href="/tienda" style={{ color: "#E8DAA0", textDecoration: "none", fontWeight: "600" }}>Tienda</Link>
          <Link href="/test-parentesco" style={{ color: "#E06D1A", textDecoration: "none", fontWeight: "bold", border: "1px solid #E06D1A", padding: "4px 12px", borderRadius: "16px" }}>Test Divino</Link>
        </div>
      </div>
    </nav>
  );
}