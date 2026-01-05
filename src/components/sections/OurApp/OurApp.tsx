"use client";

import styles from "./OurApp.module.scss";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWindowSize } from "../../../hooks/useWindowSize";
import FadeUp from "../../animations/FadeUp";

export default function OurApp() {
  const hashtags = [
    "#CleanEnergy",
    "#SustainableFuture",
    "#GreenPlanet",
    "#ClimateAction",
    "#GoGreen",
    "#EcoFriendly",
    "#NetZero",
    "#CarbonNeutral",
    "#SaveOurPlanet",
    "#CleanAir",
    "#EarthCare",
    "#TogetherForEarth",
    "#ClimateAwareness",
  ];
  const { width } = useWindowSize();
  if (!width) return null;

  const slidesToShow = width < 768 ? 3 : width < 1024 ? 4 : 8;

  const settings = {
    loop: true,
    speed: 6000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: false,
    draggable: false,
  };
  return (
    <section className={styles.ourAppSection} id="">
      <div className={styles.ourAppWrap}>
        <div className={styles.ourAppBgWrap}>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet="/images/ourappdesk.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/ourappdesk.jpg"
            />
            <img src="/images/ourappmobi.jpg" alt="mobile app" />
          </picture>
        </div>

        <div className={styles.ourAppWorldWideWrap}>
          <div className={styles.ourAppWorldWideInner}>
            <FadeUp>
              {" "}
              <h3 className={styles.ourAppWorldTitle}>
                1 Million trees wordwide
              </h3>
            </FadeUp>

            <FadeUp>
              {" "}
              <p className={styles.ourAppWorldDec}>
                Be part of a worldwide movement to plant one million trees and
                transform the environment. This initiative aims to fight
                deforestation, support biodiversity, and provide cleaner air and
                water for communities everywhere.
              </p>
            </FadeUp>
          </div>
        </div>
        <div className={styles.ourAppDonwLoadWrap}>
          <FadeUp>
            <p className={styles.ourDonwLoadDec}>
              Join our global initiative to plant one million trees and restore
              ecosystems across the planet. By participating, you’ll help combat
              climate change, improve air quality, preserve wildlife habitats,
              and create greener communities for future generations.
            </p>
          </FadeUp>

          <FadeUp>
            <div className={styles.ourAppStoreWrap}>
              <a href="#">
                <Image
                  src="/images/playstore.png"
                  alt="GreenEco icons"
                  width={120}
                  height={120}
                  priority
                />
              </a>
              <a href="#">
                <Image
                  src="/images/applestore.png"
                  alt="GreenEco icons"
                  width={120}
                  height={120}
                  priority
                />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
      <FadeUp>
        <div className={styles.hashTagsWrap}>
          <Slider {...settings} className={styles.hashTagsSlider}>
            {hashtags.map((tag, index) => (
              <div key={index} className={styles.hashTag}>
                {tag}
              </div>
            ))}
          </Slider>
        </div>
      </FadeUp>
    </section>
  );
}
