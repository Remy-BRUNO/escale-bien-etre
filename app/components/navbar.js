"use client"
import Image from "next/image"
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
                  Accueil
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
              <Link href="/about">
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
          <div className={styles.socialLinks}>
            <Link
              href="https://www.facebook.com/profile.php?id=61570861049468"
              target="_blank"
            >
              <Image
                width={32}
                height={32}
                alt="icon social"
                src={"/social-fb.png"}
              />
            </Link>
            <Link
              href="https://www.instagram.com/escale_bienetre_massage/profilecard/?igsh=YmJqcGl0dndzNnNv"
              target="_blank"
            >
              <Image
                width={32}
                height={32}
                alt="icon social"
                src={"/social-insta.png"}
              />
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </>
  )
}
