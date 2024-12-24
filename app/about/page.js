import Image from "next/image"
import { aboutData } from "../data/data"
import styles from "./page.module.css"

export default function About() {
  const { title, description, info, picture } = aboutData
  return (
    <main className={styles.main}>
      <h2>{title}</h2>
      <div className={styles.aboutMe}>
        <p className={styles.intro}>{description}</p>
        <div className={styles.portrait}>
          <Image
            alt="Sarah Laurent"
            src={picture}
            fill
            sizes="(max-width: 500px) 100vw"
          />
        </div>
      </div>
      <h3>Me Contacter</h3>
      <p>{info}</p>
    </main>
  )
}
