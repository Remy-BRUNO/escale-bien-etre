import Link from "next/link"
import styles from "./buttons.module.css"

export default function Buttons({ href, text }) {
  return (
    <Link className={styles.buttons} href={href}>
      {text}
    </Link>
  )
}
