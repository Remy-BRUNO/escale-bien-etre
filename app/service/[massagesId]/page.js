import styles from "./page.module.css"
import { benefitsData } from "../../data/data"
import Image from "next/image"
import Buttons from "@/app/ui/buttons"
import Link from "next/link"

export default async function Massages({ params }) {
  const { massagesId } = await params
  const { massages, ambiances } = benefitsData
  const { ambianceData } = ambiances
  const ambiancesFiltered = ambianceData.filter(
    (ambiance) => ambiance.id == massagesId
  )
  const massagesFiltered = massages.filter(
    (massage) => massage.massageId == massagesId
  )

  return (
    <div className={styles.main}>
      {ambiancesFiltered.map((ambiance) => {
        const { title, description, id } = ambiance
        return (
          <div key={id} className={styles.presentation}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )
      })}
      <div className={styles.benefits}>
        {massagesFiltered.map((massageById) => {
          const { title, intro, description, picture, massageId } = massageById
          return (
            <div key={title} className={styles.ambiance}>
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
                <p>{description}</p>

                <Link className={styles.buttons} href={`/prices`}>
                  <p>Tarifs</p>
                  <p>Réserver/Offrir</p>
                </Link>

                <div className="bar"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
