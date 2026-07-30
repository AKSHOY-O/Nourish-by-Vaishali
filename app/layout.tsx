import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish by Vaishali | Registered Dietitian & Nutritionist",
  description: "Warm, science-informed nutrition guidance that respects your body, your culture and the life you actually live.",
  metadataBase: new URL("https://akshoy-o.github.io/Nourish-by-Vaishali/"),
  openGraph: {
    title: "Eat well. Live fully. | Nourish by Vaishali",
    description: "Personal nutrition guidance for real life, built around Indian food and everyday routines.",
    images: [{ url: "og-fresh.png", width: 1734, height: 907, alt: "Eat well. Live fully. — Nourish by Vaishali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eat well. Live fully. | Nourish by Vaishali",
    description: "Personal nutrition guidance for real life, built around Indian food and everyday routines.",
    images: ["og-fresh.png"],
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
