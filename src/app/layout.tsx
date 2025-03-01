import type { Metadata } from "next";
import "./globals.css";
import { josefin_Sans } from "./lib/fonts";
import { Providers } from "./lib/provider";
export const metadata: Metadata = {
  title: " <>Bruno</>",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin_Sans.className} antialiased bg-background dark:bg-dbackground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
