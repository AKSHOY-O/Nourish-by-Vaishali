import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food that fits your real life. | Nourish by Vaishali",
  description: "Balanced Indian food, evidence-informed guidance and a practical nutrition plan designed around your body, goals and everyday routine.",
  metadataBase: new URL("https://akshoy-o.github.io/Nourish-by-Vaishali/"),
  openGraph: {
    title: "Food that fits your real life. | Nourish by Vaishali",
    description: "Balanced Indian food and practical, personalised nutrition guidance for sustainable progress.",
    images: [{ url: "og-food-film.png", width: 1731, height: 908, alt: "A balanced Indian thali with the words Food that fits your real life — Nourish by Vaishali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food that fits your real life. | Nourish by Vaishali",
    description: "Balanced Indian food and practical, personalised nutrition guidance for sustainable progress.",
    images: ["og-food-film.png"],
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
