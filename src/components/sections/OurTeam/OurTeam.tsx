"use client";

import styles from "./OurTeam.module.scss";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWindowSize } from "../../../hooks/useWindowSize";
import FadeUp from "../../animations/FadeUp";

export default function OurTeam() {
  const ourTeam = [
    "m1.png",
    "m2.png",
    "m3.png",
    "m4.png",
    "m5.png",
    "m6.png",
    "m7.png",
    "m8.png",
    "m4.png",
    "m5.png",
    "m6.png",
    "m7.png",
    "m8.png",
  ];
  const { width } = useWindowSize();
  if (!width) return null;
  const slidesToShow = width < 768 ? 2 : width < 1024 ? 4 : 6;

  const settingsLTR = {
    loop: true,
    speed: 6000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    cssEase: "linear",
  };
  const settingsRTL = {
    ...settingsLTR,
    rtl: true, // makes slider go right-to-left
  };
  return (
    <section className={styles.ourTeamSection}>
      <div className={styles.ourTeamWrap}>
        <div className={styles.ourTeamTitleWrap}>
          <FadeUp>
            <h3 className={styles.ourTeamTitle}>
              Meet Our Trusted Team of <br /> Supervisory Authorities
            </h3>
          </FadeUp>
        </div>
      </div>
      <FadeUp>
        {" "}
        <div className={styles.ourTeamSliderWrap}>
          <Slider {...settingsLTR} className={styles.ourTeamSlider}>
            {ourTeam.map((tag, index) => (
              <div key={index} className={styles.ourTeamItem}>
                <Image
                  src={`/images/${tag}`}
                  alt="Team Member"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </FadeUp>
      <FadeUp>
        <div className={styles.ourTeamSliderWrap}>
          <Slider {...settingsRTL} className={styles.ourTeamSlider}>
            {ourTeam.map((tag, index) => (
              <div key={index} className={styles.ourTeamItem}>
                <Image
                  src={`/images/${tag}`}
                  alt="Team Member"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </FadeUp>
    </section>
  );
}
