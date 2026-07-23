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
