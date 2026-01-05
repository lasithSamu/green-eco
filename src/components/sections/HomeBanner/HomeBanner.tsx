import Button from "../../ui/Button/Button";
import styles from "./HomeBanner.module.scss";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className={styles.homeBannerSection} id="home">
      <div className={styles.homeBannerWrap}>
        <div className={styles.homeBannerContent}>
          <div className={styles.homeBannerImgWrap}>
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/images/home-banner-d.webp"
              />
              <source
                 media="(min-width: 768px)"
                srcSet="/images/home-banner-d.webp"
              />
              <img
                src="/images/home-banner-m.webp"
                alt="GreenEco home banner"
              />
            </picture>
          </div>

          <h1 className={styles.hmMainTitle}>
            Planting Trees for a Better Future
          </h1>
          <div className={styles.homeBannerActWrap}>
            <p className={styles.hmActPara}>
              GreenEco helps communities and businesses move towards sustainable
              and eco-friendly solutions.
            </p>
            <Button variant="primary" href="#">Contribute Now</Button>
          </div>

          <div className={styles.homeBannerConWrap}>
            <div className={styles.hmConImg}>
              <Image
                src="/images/hm-icons.png"
                alt="GreenEco icons"
                width={120}
                height={120}
                priority
              />
            </div>
            <div className={styles.hmConContent}>
              <h3 className={styles.hmConTitle}>Ready to make a Difference</h3>
              <p className={styles.hmConPara}>
                We provide innovative green solutions to reduce environmental
                impact.
              </p>
              <div className={styles.hmConAction}>
                <Button variant="secondary" href="#">Take Action</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
