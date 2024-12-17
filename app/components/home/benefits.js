import { homeData, benefitsData } from "@/app/data/data"
import Image from "next/image"
import styles from "./benefits.module.css"
import Buttons from "@/app/ui/buttons"

export default function Benefits() {
  const { benefits } = homeData
  const { ambiences } = benefitsData
  const ambianceArray = ambiences.ambienceData
  return (
    <section className={styles.benefits}>
      <h3>{benefits.title}</h3>
      <div className={styles.ambiences}>
        {ambianceArray.map((ambience) => {
          const { title, intro, picture, id } = ambience
          return (
            <div key={id} className={styles.ambience}>
              <div className={styles.ambiencePicture}>
                <Image
                  src={picture.src}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4>{title} </h4>
              <p>{intro}</p>
              <Buttons text={"En savoir plus"} href={"/"} />
              <div className="bar"></div>
            </div>
          )
        })}
      </div>
      <div className={styles.outro}>
        <p>{benefits.outro}</p>
        <Buttons href={"/"} text={"Me Contacter"} />
        <div className="bar"></div>
      </div>
    </section>
  )
}
