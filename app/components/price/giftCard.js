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

      <div className={styles.cards}>
        {/* <h4>Les Cartes Cadeaux</h4> */}
        <div className={styles.card}>
          <div>
            <h5>Carte cadeau</h5>
            <h5>Cocooning</h5>
          </div>
          <ul className={styles.liste}>
            <li>Californien</li>
            <li>Ayurvédique</li>
            <li>Polynésien (Lomi Lomi)</li>
            <li>Aux Tampons herbeux</li>
            <li>A la bougie</li>
            <li>A l'huile chaude</li>
          </ul>
          <p>
            <strong>(durée 1h) 70€</strong>
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <h5>Carte cadeau</h5>
            <h5>Chaleureuse</h5>
          </div>
          <ul className={styles.liste}>
            <li>Au Pierres chaudes</li>
            <li>Ayurvédique + Bols Kansu</li>
          </ul>
          <p>
            <strong>(durée 1h) 85€</strong>
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <h5>Carte cadeau</h5>
            <h5>Bien-être</h5>
          </div>
          <ul className={styles.liste}>
            <li>Instant pour soi</li>
            <li>Liftant visage & buste</li>
            <li>Réfléxologie plantaire</li>
            <li>Réfléxologie palmaire</li>
            <li>Shiatsu</li>
          </ul>
          <p>
            <strong>(durée 1h) 60€</strong>
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <h5>Carte cadeau</h5>
            <h5>Découverte</h5>
          </div>
          <ul className={styles.liste}>
            <li>Aux Bols Kansu</li>
            <li>Instant pour soi</li>
            <li>Liftant visage & buste</li>
          </ul>
          <p>
            <strong>(durée 30min) 40€</strong>
          </p>
        </div>
      </div>

      <div className={styles.paypal}>
        <form
          className={styles.form}
          action="https://www.paypal.com/ncp/payment/XQ73U4LDZFLML"
          method="post"
          target="_blank"
        >
          <input className={styles.pp} type="submit" value="Choisir/Offrir" />
          <Image
            src={"https://www.paypalobjects.com/images/Debit_Credit_APM.svg"}
            alt="card"
            width={140}
            height={20}
          />
          <div className={styles.opimise}>
            Optimisé par
            <Image
              src={
                "https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg"
              }
              alt="paypal"
              width={80}
              height={16}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
