import Ambiances from "../components/service/ambiances"
import Intro from "../components/service/intro"
import { benefitsData } from "../data/data"
import styles from "./page.module.css"

export default function Services() {
  const { presentation, ambiances, massages } = benefitsData
  return (
    <main className={styles.main}>
      <Intro presentation={presentation} />
      <div className="bar"></div>
      <Ambiances ambiances={ambiances} />
    </main>
  )
}
