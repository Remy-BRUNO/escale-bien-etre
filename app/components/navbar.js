"use client"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <h1 className={styles.navlogo}>
              <span className={styles.span1}>Escale Bien-être</span>{" "}
              <span className={styles.span2}>Massage</span>
            </h1>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Home
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href="/service">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Prestations
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href="/prices">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Tarifs/Offrir
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href="/contact">
                <p
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Info/Contact
                </p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
    </>
  )
}
