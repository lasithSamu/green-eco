// import Image from "next/image";

import AboutUs from "../components/sections/AboutUsSection/AboutUs";
import CountDown from "../components/sections/CountDownSection/CountDown";
import HomeBanner from "../components/sections/HomeBanner/HomeBanner";
import JoinUs from "../components/sections/JoinUs/JoinUs";
import KeepUp from "../components/sections/KeepUp/KeepUp";
import OurApp from "../components/sections/OurApp/OurApp";
import OurTeam from "../components/sections/OurTeam/OurTeam";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <CountDown />
      <AboutUs />
      <JoinUs/>
      <OurApp/>
      <OurTeam/>
      <KeepUp/>
    </>
  );
}
