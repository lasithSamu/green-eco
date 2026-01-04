import Button from "../../ui/Button/Button";
import styles from "./AboutUs.module.scss";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles.aboutUsSection} id="about">
      <div className={styles.aboutUsWrap}>
        <div className={styles.aboutUsTitlesWrap}>
          <h3 className={styles.abTopTitle}>What do we do</h3>
          <h3 className={styles.abTopTitle}>
            Learn about our story and mission
          </h3>
        </div>
        <div className={styles.aboutUsContentWrap}>
          <div className={styles.aboutUsItemWrap}>
            <h2 className={styles.abItemText}>We are Growing a </h2>
            <div className={styles.abouTabImgWrap}>
              <Image
                src="/images/tubeimage1.png"
                alt="tress"
                width={120}
                height={120}
                priority
              />
            </div>

            <h2 className={styles.abItemText}>Greener Future </h2>
          </div>
          <div className={styles.aboutUsItemWrap}>
            <h2 className={styles.abItemText}>
              Our Mission to Plant Trees and Reduce
            </h2>
          </div>
          <div className={styles.aboutUsItemWrap}>
            <div className={styles.abouArrowImgWrap}>
              <Image
                src="/images/twoarrows.png"
                alt="twoarrows"
                width={120}
                height={120}
                priority
              />
            </div>

            <h2 className={styles.abItemText}>Carbon Footprint </h2>
            <div className={styles.abouTabImgWrap}>
              <Image
                src="/images/tubeimage2.png"
                alt="tress"
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
          </div>
        </div>
      </div>
    </section>
  );
}
