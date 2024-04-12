import type { Metadata } from "next";
import "./globals.css";
import { neueRegrade, uncutSans } from "@/fonts/index";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "adrianaluisadc.design",
  description: "Portfolio of Adriana Luisa DC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueRegrade.className} ${uncutSans.className}`}>
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
