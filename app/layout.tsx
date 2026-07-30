import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish by Vaishali | Registered Dietitian & Nutritionist",
  description: "Evidence-informed nutrition guidance translated into a practical strategy for your health, preferences and everyday routine.",
  metadataBase: new URL("https://akshoy-o.github.io/Nourish-by-Vaishali/"),
  openGraph: {
    title: "Clear nutrition. Confident choices. | Nourish by Vaishali",
    description: "Professional, personalised nutrition guidance for better health and sustainable progress.",
    images: [{ url: "og-professional.png", width: 1731, height: 909, alt: "Clear nutrition. Confident choices. — Nourish by Vaishali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear nutrition. Confident choices. | Nourish by Vaishali",
    description: "Professional, personalised nutrition guidance for better health and sustainable progress.",
    images: ["og-professional.png"],
  },
  icons: {
    icon: "https://akshoy-o.github.io/Nourish-by-Vaishali/favicon.svg",
    shortcut: "https://akshoy-o.github.io/Nourish-by-Vaishali/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{history.scrollRestoration="manual";var entry=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var reloaded=entry?entry.type==="reload":performance.navigation&&performance.navigation.type===1;if(reloaded){if(location.hash)history.replaceState(null,"",location.pathname+location.search);var top=function(){window.scrollTo(0,0)};top();document.addEventListener("DOMContentLoaded",top,{once:true});window.addEventListener("load",function(){top();requestAnimationFrame(top);setTimeout(top,0)},{once:true})}}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
