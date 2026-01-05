import Button from "../../ui/Button/Button";
import styles from "./KeepUp.module.scss";
import Image from "next/image";
import FadeUp from "../../animations/FadeUp";

export default function KeepUp() {
  return (
    <section className={styles.keepUpSection} id="join">
      <div className={styles.keepUpWrap}>
        <div className={styles.keepUpLeftWrap}>
          <FadeUp>
            <h2 className={styles.keepUpTitle}>Keep up with latest news</h2>
          </FadeUp>

            <div className={styles.keepUpleftImg}>
              <Image
                src={"/images/keepup.png"}
                alt="Team Member"
                width={100}
                height={100}
                priority
              />
            </div>
        </div>
        <div className={styles.keepUpRightWrap}>
          <div className={styles.keepUpRightItem}>
            <FadeUp>
              <div className={styles.kRImg}>
                <Image
                  src={"/images/kforest.webp"}
                  alt="Team Member"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className={styles.kRTitle}>
                Introducing Our Newest Climate Neutral Certified Brands
              </h2>
            </FadeUp>

            <FadeUp>
              <div className={styles.kRDec}>
                Discover our latest Climate Neutral Certified brands that are
                committed to reducing carbon emissions and operating
                responsibly. Each brand meets strict sustainability standards,
                ensuring measurable climate action and a positive impact on the
                planet.
              </div>
            </FadeUp>

            <FadeUp>
              <Button variant="quaternary" href="#">Learn More</Button>
            </FadeUp>
          </div>
          <div className={styles.keepUpRightItem}>
            <FadeUp>
              <div className={styles.kRImg}>
                <Image
                  src={"/images/cuttrees.webp"}
                  alt="Team Member"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className={styles.kRTitle}>
                Introducing Our Newest Climate Neutral Certified Brands
              </h2>
            </FadeUp>

            <FadeUp>
              <div className={styles.kRDec}>
                We’re proud to welcome our newest Climate Neutral Certified
                brands, leading the way in sustainability and environmental
                responsibility. These brands actively measure, reduce, and
                offset their carbon footprint to help build a cleaner, greener
                future.
              </div>
            </FadeUp>

            <FadeUp>
            <Button variant="quaternary" href="#">Learn More</Button>

            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
