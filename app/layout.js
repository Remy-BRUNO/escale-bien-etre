import { Ephesis, Pacifico, Comic_Neue } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const ephesis = Ephesis({
  variable: "--font-ephesis",
  subsets: ["latin"],
  weight: "400",
})

const pacifico = Pacifico({
  variable: '--font-pacifico',
  subsets: ["latin"],
  weight: "400",
})
const comic = Comic_Neue({
  variable: '--font-comic',
  subsets: ["latin"],
  weight: "300",
})

export const metadata = {
  title: "Escale Bien-être",
  description:
    "Une bulle de bien être, un bonheur intense, un moment à soi de relaxation profonde et de lâcher prise venez découvrir les bienfaits du massages entre mes mains douces et bienveillantes",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${ephesis.variable}${pacifico.variable}${comic.variable}`}
      >
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  )
}
