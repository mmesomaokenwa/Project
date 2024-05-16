import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux-store/StoreProvider";
import Menubar from "@/components/Menubar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StoreProvider>
          <Menubar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}