import styles from "./page.module.css"

import Image from "next/image"
import Tarifs from "../components/price/tarifs"
import GiftCard from "../components/price/giftCard"

export default function Prices() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div className={styles.fleur}>
          <Image src={"/fleur.png"} fill alt="fleur deco" />
        </div>
        <h2> Tarifs</h2>
        <div className={styles.fleur}>
          <Image src={"/fleur.png"} fill alt="fleur deco" />
        </div>
      </div>
      <Tarifs />
      <h2>Offrir</h2>
      <GiftCard />
    </main>
  )
}
