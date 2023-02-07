import './globals.css'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import contactheader from"@/components/contactheader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary05">
        <contactheader />
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
