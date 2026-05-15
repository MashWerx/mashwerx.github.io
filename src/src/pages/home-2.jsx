import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";

import CallToActionSection from "../components/sections/CallToAction";
import AboutSection from "../components/sections/About";
import Divider from "../components/sections/Divider";
import IconBoxesSection from "../components/sections/IconBoxes"
import AwardsSection from "../components/sections/Awards"
import HowItWorksSection from "../components/sections/HowItWorks";

const HeroSlider = dynamic( () => import("../components/sliders/Hero"), { ssr: false } );
const ServicesSlider = dynamic( () => import("../components/sliders/Services"), { ssr: false } );

const Home2 = () => {
  return (
    <Layouts footer={1} headerTop extarClass={"has-additional-panel"}>
      <Head>
        <title>Mashwerx | Software, AI, Cloud & Automation Agency</title>
        <meta
          name="description"
          content="Mashwerx helps businesses design, build, automate, and secure digital systems through SaaS development, product design, mobile apps, cloud engineering, and AI-powered security."
        />
      </Head>
      <HeroSlider />
      <ServicesSlider />
      <CallToActionSection />
      <HowItWorksSection />
      <AboutSection />
      <Divider />
      <IconBoxesSection />
      <AwardsSection />
    </Layouts>
  );
};
export default Home2;
