import Image from "next/image"
import styles from "./ambiances.module.css"
import Buttons from "@/app/ui/buttons"

export default function Ambiances({ ambiances }) {
  const { title, ambianceData } = ambiances
  return (
    <div className={styles.benefits}>
      <h3>{title}</h3>
      {ambianceData.map((ambiance) => {
        const { title, intro, picture, id, description } = ambiance
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
              <p>
                <strong>{intro}</strong>
              </p>
              <p>{description}</p>
              <Buttons text={"Voir cette ambiance"} href={`/service/${id}`} />
              <div className="bar"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
