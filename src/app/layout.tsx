import type { Metadata } from "next";
import "./globals.css";
import { neueRegrade, uncutSans } from "@/fonts/index";
import ThemeRegistry from "./ThemeRegistry";
import { AppCursor } from "@/components/CustomCursor";
import { AppBackground } from "@/hoc/AppBackground";
import { AppMargin } from "@/hoc/AppMargin";
import { Header } from "@/components/Layouts/Header";
import { SecondaryHeader } from "@/components/Layouts/SecondaryHeader";
import { SmoothScroll } from "@/hoc/SmoothScroll";

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
        <AppCursor>
          <SmoothScroll>
            <ThemeRegistry options={{ key: 'mui' }}>
              <AppBackground>
                <AppMargin>
                  <Header />
                  <SecondaryHeader />
                  {children}
                </AppMargin>
              </AppBackground>
            </ThemeRegistry>
          </SmoothScroll>
        </AppCursor>
      </body>
    </html>
  );
}
