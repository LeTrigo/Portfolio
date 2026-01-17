import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Lautaro Trigo | Full Stack Developer",
  description:
    "Portfolio moderno mostrando mis proyectos y habilidades como desarrollador full stack.",
  icons: {
    icon: "/logo-web.svg",
    shortcut: "/logo-web.svg",
    apple: "/logo-web.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased transition-colors duration-300 min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
