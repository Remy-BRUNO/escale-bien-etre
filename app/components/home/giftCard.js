import { giftCarddata } from "@/app/data/data"
import Image from "next/image"
import styles from "./giftCard.module.css"
import Buttons from "@/app/ui/buttons"

export default function GiftCard() {
  const { title, intro, picture } = giftCarddata
  return (
    <div className={styles.giftCard}>
      <h3>{title} </h3>
      <p>{intro} </p>
      <div className={styles.giftCardPicture}>
        <Image
          alt={title}
          src={picture.src}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 500px) 100vw"
        />
      </div>
      <Buttons href={"/prices"} text={"Offrir"} />
    </div>
  )
}
