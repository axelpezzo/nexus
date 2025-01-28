import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import ThemeProviders from "@/components/providers/theme-providers";
import AppShell from "@/components/layout/app-shell";
import { UiStoreProvider } from "@/components/providers/ui-store-providers";
import "@mantine/core/styles.css";
import "@/assets/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviders>
          <UiStoreProvider>
            <AppShell>{children}</AppShell>
          </UiStoreProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
