import { aboutData } from "../data/data"
import styles from "./page.module.css"

export default function About() {
  const { title, description, info } = aboutData
  return (
    <main className={styles.main}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.portrait}>Photo</div>
      <h3>Me Contacter</h3>
      <p>{info}</p>
    </main>
  )
}
