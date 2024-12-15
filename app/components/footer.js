import Image from "next/image"
import styles from "./footer.module.css"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Laurent Sarah</p>
        <a href="mailto:laurentsarahpro14@gmail.com">
          📩 laurentsarahpro14@gmail.com
        </a>
        <a href="tel:+33628770421">📞 06.28.77.04.21</a>
      </div>
      <div className={styles.logo}>
        <Image alt="logo escale bien être massage" src={"/logo.png"} fill sizes="(max-with:620px) 100vw"/>
      </div>
      <div>
        <p>Du Lundi au Samedi de 9h à 18h</p>
        <p>53 rue Simone Veil 73000 Bassens</p>
      </div>
      <div>
        <Image
          width={64}
          height={64}
          alt="icon social"
          src={"/social-email.png"}
        />
        <Image
          width={64}
          height={64}
          alt="icon social"
          src={"/social-phone.png"}
        />
        <Image
          width={64}
          height={64}
          alt="icon social"
          src={"/social-fb.png"}
        />
        <Image
          width={64}
          height={64}
          alt="icon social"
          src={"/social-insta.png"}
        />
      </div>
      <div>
        <Link href="/legal">Mentions legal/CGS</Link>
      </div>
    </footer>
  )
}
