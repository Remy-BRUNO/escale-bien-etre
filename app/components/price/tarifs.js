import { pricesData } from "@/app/data/data"
import styles from "./tarifs.module.css"
import Link from "next/link"
import Buttons from "@/app/ui/buttons"
export default function Tarifs() {
  return (
    <div className={styles.tarifs}>
      {pricesData.map((priceData) => {
        return (
          <div key={priceData.title} className={styles.articles}>
            <h4>{priceData.title}</h4>
            <div className={styles.article}>
              {priceData.massages.map((massage) => {
                return (
                  <div key={massage.name} className={styles.prices}>
                    <Link href={`/service/${massage.massageId}`}>
                      <h5 className={styles.subtitle}>{massage.name}</h5>
                    </Link>
                    {massage.price.map((price) => {
                      return <p key={price}>{price}</p>
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <Buttons href={"/about"} text={"Me contacter Réserver"} />
    </div>
  )
}
