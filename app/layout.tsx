import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metro Mansion - Luxury Real Estate Listings & Property Services",
  description:
    "Discover your dream home with MetroMansion - your premier destination for luxury real estate. Browse our extensive listings of properties in prime locations, featuring detailed descriptions, high-quality photos, and virtual tours. Whether you're buying or selling, MetroMansion offers personalized services to help you navigate the real estate market with ease and confidence. Start your journey to finding the perfect home today with MetroMansion.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />

          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
