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
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
})
const comic = Comic_Neue({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: "300",
})

export const metadata = {
  title: "Escale Bien-être Massage",
  description:
    "Sarah Laurent, praticienne certifiée en massage bien-être, vous accueille chaleureusement sur son site. Avec plus de 20 ans d'expérience dans le domaine de la santé, elle propose des massages relaxants, apaisants et dynamisants à domicile et en institut à Chambéry 73000 et Bassens 73000, en Savoie. Découvrez son espace cocooning et profitez de son savoir-faire et de son écoute bienveillante pour une véritable escale bien-être.Sarah Laurent, praticienne certifiée en massage bien-être, vous accueille chaleureusement sur son site. Avec plus de 20 ans d'expérience dans le domaine de la santé, elle propose des massages relaxants, apaisants et dynamisants à son domicile à Bassens et en institut à Chambéry, en Savoie. Découvrez son espace cocooning et profitez de son savoir-faire et de son écoute bienveillante pour une véritable escale bien-être.",
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
