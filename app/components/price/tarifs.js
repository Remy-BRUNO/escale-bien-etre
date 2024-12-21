import { pricesData } from "@/app/data/data"
import styles from "./tarifs.module.css"
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
                    <h5 className={styles.subtitle}>{massage.name}</h5>
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
    </div>
  )
}