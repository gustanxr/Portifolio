import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { PageLoader } from "@/components/layout/page-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg` },
};

export const viewport: Viewport = { themeColor: "#101016" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative isolate">
        <AnimatedBackground />
        <PageLoader />
        <a href="#conteudo" className="fixed -top-24 left-5 z-50 rounded bg-accent px-5 py-3 text-background focus:top-4">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
