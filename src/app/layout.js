import { Chelsea_Market, Roboto } from "next/font/google";

import Header from "../components/header";
import Footer from "../components/footer";

import "./globals.css";

const chelsea_market = Chelsea_Market({
 subsets: ["latin"],
 variable: "--font-chelsea-market",
 display: "swap",
 weight: "400",
});

const roboto = Roboto({
 subsets: ["latin"],
 style: ["normal", "italic"],
 variable: "--font-roboto",
 display: "swap",
 weight: ["100", "300", "400", "500", "700", "900"],
});

export const viewport = {
 themeColor: "black",
 width: "device-width",
 initialScale: 1,
 maximumScale: 1,
};

export const metadata = {
 title: "CineShorts",
 description: "Experience the cinema of by-gone era.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en" className={`${chelsea_market.variable} ${roboto.variable}`}>
   <body>
    <div className="app">
     <Header />
     <main>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
