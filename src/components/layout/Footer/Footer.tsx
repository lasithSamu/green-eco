"use client";

import Button from "../../ui/Button/Button";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrap}>
        <div className={styles.socialLinkWrap}>
          <div className={styles.socialLinkNaviWrap}>
            <div className={styles.socialLinkTitle}>
              <h3 className={styles.socialTitle}>Connected on Social</h3>
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
            </div>
            <div className={styles.footerNaviLanguageWrap}>
              <nav className={styles.footerNavBar}>
                <ul>
                  <li>
                    <Button href="#home" variant="tertiary">
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button href="#about" variant="tertiary">
                      About
                    </Button>
                  </li>
                  <li>
                    <Button href="#features" variant="tertiary">
                      Features
                    </Button>
                  </li>
                  <li>
                    <Button href="#contact" variant="tertiary">
                      Contact Us
                    </Button>
                  </li>
                </ul>
              </nav>
              <div className={styles.languageDropdownWrap}>
                <select className={styles.languageDropdown} defaultValue="en">
                  <option value="en">English</option>
                  <option value="si">සිංහල</option>
                  <option value="ta">தமிழ்</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.footerLogoCopyrightWrap}>
            <div className={styles.footerLogo}>
              <Link href="/">
                <Image
                  src="/images/greenecologowhite.png"
                  alt="GreenEcoLogo"
                  width={120}
                  height={120}
                  priority
                />
              </Link>
            </div>
            <p className={styles.footerLogoCopyright}>
              © 2025 GreenEco. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
