import { homeData } from "@/app/data/data"
import Image from "next/image"
import styles from "./introp.module.css"

export default function Intro() {
  const { presentation } = homeData
  const { description, picture, subTitle, title } = presentation

  return (
    <div className={styles.intro}>
      <div className={styles.homePict}>
        <Image
          src={picture.src}
          alt="fleurs par freepik"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.homeText}>
        <h2 className={styles.title}>{title}</h2>
        <h4>{subTitle} </h4>
        <p>{description} </p>
      </div>
    </div>
  )
}
