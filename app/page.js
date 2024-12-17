import Image from "next/image"
import styles from "./page.module.css"
import Intro from "./components/home/intro"
import Benefits from "./components/home/benefits"
import GiftCard from "./components/home/giftCard"

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Benefits />
      <GiftCard />
    </main>
  )
}
