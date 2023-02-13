import './globals.css'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Lora } from '@next/font/google';

const lora = Lora({
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary05" style={{
          fontFamily: lora.style.fontFamily
      }}>
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
