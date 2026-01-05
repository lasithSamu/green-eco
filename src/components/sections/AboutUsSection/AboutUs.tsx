import Button from "../../ui/Button/Button";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import FadeUp from "../../animations/FadeUp"; 


export default function AboutUs() {
  return (
    <section className={styles.aboutUsSection} id="about">
      <div className={styles.aboutUsWrap}>
        <div className={styles.aboutUsTitlesWrap}>
          <FadeUp>
            <h3 className={styles.abTopTitle}>What do we do</h3>
          </FadeUp>
          <FadeUp>
            <h3 className={styles.abTopTitle}>
              Learn about our story and mission
            </h3>
          </FadeUp>
        </div>

        <div className={styles.aboutUsContentWrap}>
          <FadeUp className={styles.aboutUsItemWrap}>
            <h2 className={styles.abItemText}>We are Growing a</h2>
            <div className={styles.abouTabImgWrap}>
              <Image
                src="/images/tubeimage1.png"
                alt="trees"
                width={120}
                height={120}
                priority
              />
            </div>
            <h2 className={styles.abItemText}>Greener Future</h2>
          </FadeUp>

          <FadeUp className={styles.aboutUsItemWrap}>
            <h2 className={styles.abItemText}>
              Our Mission to Plant Trees and Reduce
            </h2>
          </FadeUp>

          <FadeUp className={styles.aboutUsItemWrap}>
            <div className={styles.abouArrowImgWrap}>
              <Image
                src="/images/twoarrows.png"
                alt="two arrows"
                width={120}
                height={120}
                priority
              />
            </div>

            <h2 className={styles.abItemText}>Carbon Footprint</h2>

            <div className={styles.abouTabImgWrap}>
              <Image
                src="/images/tubeimage2.png"
                alt="trees"
                width={120}
                height={120}
                priority
              />
            </div>

            <Button variant="quaternary">
              About Us
              <Image
                src="/images/arrowangle.png"
                alt="arrow"
                width={120}
                height={120}
                priority
              />
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
