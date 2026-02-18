import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehdi Ennaciri — Software Engineer | Full-Stack & AI",
  description:
    "Portfolio de Mehdi Ennaciri, ingénieur logiciel spécialisé en développement full-stack, IA et data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
