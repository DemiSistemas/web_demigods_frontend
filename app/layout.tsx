import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Demigods | Campamento",
  description: "Encuentra tu cabaña y tu destino.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${montserrat.variable} bg-madera-oscura text-pergamino min-h-screen flex flex-col m-0 p-0`}>
        <main className="flex-grow">{children}</main>
        <footer style={{ backgroundColor: "#1A0F0B", borderTop: "2px solid #7A5230", textAlign: "center", padding: "20px", fontSize: "13px", color: "#C0AC97", fontFamily: "serif" }}>
          © 2026 Demigods. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}