import Image from "next/image"
import styles from "./footer.module.css"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave1}>
        <div className={styles.contact}>
          <h4>Laurent Sarah</h4>
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
          <p>
            <Image
              src={"/pictoGps.png"}
              width={16}
              height={16}
              alt="picto gps"
            />{" "}
            53 rue Simone Veil 73000 Bassens
          </p>
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
