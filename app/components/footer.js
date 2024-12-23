import Image from "next/image"
import styles from "./footer.module.css"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave1}>
        <div className={styles.contact}>
          <h4>Sarah Laurent</h4>
          <a href="mailto:laurentsarahpro14@gmail.com">
            📩 laurentsarahpro14@gmail.com
          </a>
          <a href="tel:+33628770421">📞 06.28.77.04.21</a>
        </div>
        <div className={styles.logo}>
          <Image
            alt="logo escale bien être massage"
            src={"/logo.png"}
            fill
            sizes="(max-with:620px) 100vw"
          />
        </div>
        <div>
          <p>Du Lundi au Samedi de 9h à 18h</p>
          <address>
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/53+Rue+Simone+Veil,+73000+Bassens/@45.5749231,5.9364268,17z/data=!3m1!4b1!4m6!3m5!1s0x478ba8ea3268d50f:0x3abeb2cb1c1eb9d1!8m2!3d45.5749231!4d5.9390071!16s%2Fg%2F11srrn0_jk?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                src={"/pictoGps.png"}
                width={16}
                height={16}
                alt="picto gps"
              />{" "}
              53 rue Simone Veil 73000 Bassens
            </a>
          </address>
          <address>
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/Institut+de+beaut%C3%A9,+4+Rue+des+3+Dauphins,+73000+Chamb%C3%A9ry/@45.5656687,5.9048869,17z/data=!3m1!4b1!4m6!3m5!1s0x478ba8520e305529:0x6f9aeb00cc98c1bb!8m2!3d45.5656687!4d5.9074618!16s%2Fg%2F11c23j0p7v?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                src={"/pictoGps.png"}
                width={16}
                height={16}
                alt="picto gps"
              />{" "}
              4 Rue des Trois Dauphins, 73000 Chambéry
            </a>
          </address>
        </div>
        <div className={styles.socialsLogo}>
          <Link href="mailto:laurentsarahpro14@gmail.com">
            <Image
              width={64}
              height={64}
              alt="icon social"
              src={"/social-email.png"}
            />
          </Link>
          <Link href="tel:+33628770421">
            <Image
              width={64}
              height={64}
              alt="icon social"
              src={"/social-phone.png"}
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61570861049468"
            target="_blank"
          >
            <Image
              width={64}
              height={64}
              alt="icon social"
              src={"/social-fb.png"}
            />
          </Link>
          <Link
            href="https://www.instagram.com/escale_bienetre_massage/profilecard/?igsh=YmJqcGl0dndzNnNv"
            target="_blank"
          >
            <Image
              width={64}
              height={64}
              alt="icon social"
              src={"/social-insta.png"}
            />
          </Link>
        </div>
        <div className={styles.endPoint}>
          <div>
            <Link href="/mention">Mentions legal/CGS</Link>
          </div>

          <p className={styles.freepik}>
            Pictures Designed by
            <a href={"http://www.freepik.com/"}> Freepik</a>
          </p>
        </div>
      </div>
      <div className={styles.wave2}></div>
    </footer>
  )
}
