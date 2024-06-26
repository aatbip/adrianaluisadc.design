import type { Metadata } from "next";
import "./globals.css";
import { neueRegrade, uncutSans } from "@/fonts/index";
import ThemeRegistry from "./ThemeRegistry";
import { AppBackground } from "@/hoc/AppBackground";
import { AppMargin } from "@/hoc/AppMargin";
import { Header } from "@/components/Layouts/Header";
import { AppContextProvider } from "@/context";
import { CursorExtension } from "@/hoc/CursorExtension";

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
      <AppContextProvider>
        <body className={`${neueRegrade.className} ${uncutSans.className}`}>
          <CursorExtension>
            <ThemeRegistry options={{ key: "mui" }}>
              <AppBackground>
                <AppMargin>
                  <Header />
                  {children}
                </AppMargin>
              </AppBackground>
            </ThemeRegistry>
          </CursorExtension>
        </body>
      </AppContextProvider>
    </html>
  );
}
