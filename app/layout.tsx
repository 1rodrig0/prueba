// app/layout.tsx

import "./globals.css";
import "./style.css";
import "./styleguide.css";

export const metadata = {
  title: "PostMe",
  description: "Una red universitaria 🔥",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
