import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: 'https://res.cloudinary.com/mindset/image/upload/v1711528987/Frame_125_nb5bsg.png',
  title: "The capacity Connect",
  description: "Enhancing Capacity and Fostering Connections for Sustainable Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
