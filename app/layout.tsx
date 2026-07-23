import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish by Vaishali | Registered Dietitian & Nutritionist",
  description: "Personalised, science-backed nutrition programmes for lasting health, energy and confidence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
