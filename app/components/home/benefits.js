import { homeData, benefitsData } from "@/app/data/data"
import Image from "next/image"
import styles from "./benefits.module.css"
import Buttons from "@/app/ui/buttons"

export default function Benefits() {
  const { benefits } = homeData
  const { ambiances } = benefitsData
  const ambianceArray = ambiances.ambianceData
  return (
    <section className={styles.benefits}>
      <h3>{benefits.title}</h3>
      <div className={styles.ambiances}>
        {ambianceArray.map((ambiance) => {
          const { title, intro, picture, id } = ambiance
          return (
            <div key={id} className={styles.ambiance}>
              <div className={styles.ambiancePicture}>
                <Image
                  src={picture.src}
                  alt={title}
                  fill
                  sizes="(max-width: 500px) 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.info}>
                <h4>{title} </h4>
                <p>{intro}</p>
                <Buttons text={"En savoir plus"} href={"/service"} />
                <div className="bar"></div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.outro}>
        <p>{benefits.outro}</p>
        <Buttons href={"/about"} text={"Me Contacter"} />
        <div className="bar"></div>
      </div>
    </section>
  )
}
