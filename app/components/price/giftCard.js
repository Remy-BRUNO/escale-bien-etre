import { giftCarddata } from "@/app/data/data"
import Image from "next/image"
import styles from "./giftCard.module.css"
export default function GiftCard() {
  const { title, intro, picture, description } = giftCarddata
  return (
    <div className={styles.giftCard}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.giftCardPicture}>
        <Image src={picture.src} alt="carte cadeau" fill />
      </div>
      <button type="button">paypal</button>
    </div>
  )
}
