"use client";

import Button from "../../ui/Button/Button";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerWrap}>
        <div className={styles.headerWrapMobi}>
          <div className={styles.headerlogo}>
            <Link href="/">
              <Image
                src="/images/greenecologo.png"
                alt="GreenEcoLogo"
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div
            className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#join" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
          </ul>

          <Button href="#contact" variant="primary">
            Make A Difference
          </Button>
          <div className={styles.socialLink}>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/f-facebook.png"
                alt="Facebook"
                width={120}
                height={120}
                priority
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/f-insta.png"
                alt="Instagram"
                width={120}
                height={120}
                priority
              />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/f-linkein.png"
                alt="LinkedIn"
                width={120}
                height={120}
                priority
              />
            </Link>
          </div>
        </nav>
        <div className={styles.headerWrapDesk}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <Image
                src="/images/greenecologo.png"
                alt="GreenEcoLogo"
                width={120}
                height={120}
                priority
              />
            </Link>
          </div>
          <nav className={styles.navBar}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#join">Features</Link>
              </li>
              <li></li>
            </ul>
          </nav>
          <div className={styles.headerContact}>
            <div className={styles.headerContactSign}>
              <Link href="#features">Sign in</Link>
            </div>

            <Button href="#contact" variant="primary">
              Make A Difference
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
