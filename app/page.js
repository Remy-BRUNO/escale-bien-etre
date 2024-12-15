import Image from "next/image"
import styles from "./page.module.css"
import Intro from "./components/home/intro";

export default function Home() {
  return <main className={styles.main}>
    <Intro />
  </main>
}
