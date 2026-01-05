"use client";

import styles from "./CountDown.module.scss";
import Image from "next/image";
import FadeUp from "../../animations/FadeUp"; 


export default function CountDown() {
  return (
    <section className={styles.countDownSection}>
      <div className={styles.countDownWrap}>
        <div className={styles.countDownBgWrap}>
          <Image
            src="/images/countdownbg.png"
            alt="Countdown"
            width={120}
            height={120}
            priority
          />
        </div>

        <div className={styles.countDownContentWrap}>
          <div className={styles.cDownWrap}>
            <FadeUp className={styles.countDownItemWrap}>
              <h3 className={styles.cDTitle}>997 million+</h3>
              <p className={styles.cDText}>
                Trees Produced, planted, and protected
              </p>
            </FadeUp>

            <FadeUp className={styles.countDownItemWrap}>
              <h3 className={styles.cDTitle}>280</h3>
              <p className={styles.cDText}>Project Sites in 10 countries</p>
            </FadeUp>

            <FadeUp className={styles.countDownItemWrap}>
              <h3 className={styles.cDTitle}>14,800+</h3>
              <p className={styles.cDText}>Project Active</p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
