import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Spotlight } from "@/components/ui/Spotlight";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maitrise ton stresse",
  description: "Develop by laLanding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative w-full overflow-x-hidden`}
      >
        {/*<div className="">*/}
        {/*  <Spotlight />*/}
        {/*</div>*/}

        <Nav />
        {children}
      </body>
    </html>
  );
}
