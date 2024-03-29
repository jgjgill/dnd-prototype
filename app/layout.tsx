import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@stackflow/plugin-basic-ui/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DND Prototype",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} flex flex-col items-center min-h-screen`}
      >
        <div className="max-w-[360px] w-full min-h-screen bg-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
}
