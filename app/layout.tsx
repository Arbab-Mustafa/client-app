// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/auth-context";
import { CustomerProvider } from "@/context/customer-context"; // Add CustomerProvider
import { ServiceProvider } from "@/context/service-context"; // Add ServiceProvider
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GemnEyes Hair and Beauty EPOS",
  description: "EPOS system for GemnEyes Hair and Beauty Salon",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <ServiceProvider>
              <CustomerProvider>
                {children}
                <Toaster position="top-right" />
              </CustomerProvider>
            </ServiceProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
