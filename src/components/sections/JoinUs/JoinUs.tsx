import Button from "../../ui/Button/Button";
import styles from "./JoinUs.module.scss";
import Image from "next/image";
import FadeUp from "../../animations/FadeUp";

const joinUsItems = [
  {
    id: 1,
    image: "/images/j1.jpg",
    title: "Plant More Trees",
    description:
      "Support reforestation projects and help us create a healthier, greener planet for future generations.",
  },
  {
    id: 2,
    image: "/images/j2.jpg",
    title: "Protect Wildlife",
    description:
      "Join our efforts to protect endangered species and preserve natural ecosystems around the world.",
  },
  {
    id: 3,
    image: "/images/j3.jpg",
    title: "Live Sustainably",
    description:
      "Take action to lower your carbon emissions and support initiatives that fight climate change effectively.",
  },
  {
    id: 4,
    image: "/images/j4.jpg",
    title: "Clean Our Oceans",
    description:
      "Join our mission to remove plastic waste from oceans and protect marine life for a cleaner, healthier planet.",
  },
];

export default function JoinUs() {
  return (
    <section className={styles.joinUsSection} id="join">
      <div className={styles.joinUsWrap}>
        <div className={styles.joinUsBgWrap}>
          <Image
            src="/images/joinusbg.png"
            alt="Countdown"
            width={120}
            height={120}
            priority
          />
        </div>

        <div className={styles.joinUsTitlesWrap}>
          <FadeUp>
            <h3 className={styles.joinTopTitleOne}>
              Join the Green Revolution
            </h3>
          </FadeUp>
          <FadeUp>
            <h3 className={styles.joinTopTitleTwo}>
              Choose Your Path to making a difference Today!
            </h3>
          </FadeUp>
        </div>
        <div className={styles.joinUsContentWrap}>
          {joinUsItems.map((item) => (
            <div key={item.id} className={styles.joinUsItemWrap}>
              <FadeUp>
                 <div className={styles.joinItemImgWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  priority
                />
              </div>
              </FadeUp>
             
              <FadeUp>
                <h2 className={styles.joinItemitle}>{item.title}</h2>
              </FadeUp>

              
              <FadeUp>
                 <p className={styles.joinItemDescription}>{item.description}</p>
              </FadeUp>

             
              <FadeUp>
                    <Button variant="primary" href="#">
                Contribute Now
              </Button>
              </FadeUp>

          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
