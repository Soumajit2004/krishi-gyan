export const dynamic = 'force-dynamic'

import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "600"]});

export const metadata: Metadata = {
    title: "Krishi Gyan",
    description: "next-gen data collection tools for farmers",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
