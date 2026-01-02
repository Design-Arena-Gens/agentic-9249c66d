import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Voyage Oran → Vietnam | Itinéraire complet 14 jours",
  description:
    "Plan de voyage détaillé au départ d'Oran (Algérie) vers le Vietnam : vols, itinéraire jour par jour, budget, formalités et conseils pratiques.",
  authors: [{ name: "Agentic Travel Planner" }],
  keywords: [
    "Oran",
    "Algérie",
    "Vietnam",
    "Itinéraire 14 jours",
    "Voyage Asie",
    "Planificateur de voyage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
