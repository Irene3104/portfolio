import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seoyoon Kim",
  description:
    "Full-stack engineer with production experience in enterprise finance, medical imaging, and workforce systems. Based in Sydney, Australia.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Seoyoon Kim" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Seoyoon Kim",
    description:
      "Full-stack engineer shipping production systems across enterprise finance, medical imaging, and workforce management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
