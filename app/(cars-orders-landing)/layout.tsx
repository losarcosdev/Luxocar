import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { SessionProvider, PaypalProvider } from "../providers";

const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Luxocars",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000002] fadeIn`}>
        <SessionProvider>
          <PaypalProvider>
            <Navbar />
            {children}
          </PaypalProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
