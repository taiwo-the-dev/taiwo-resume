import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import FrameLines from "../components/layout/FrameLines";
import Header from "../components/layout/Header";
import Preloader from "../components/layout/Preloader";
import AboutSection from "../components/sections/AboutSection";
import ContactsSection from "../components/sections/ContactsSection";
import HeroSection from "../components/sections/HeroSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ResumeSection from "../components/sections/ResumeSection";
import ServiceSection from "../components/sections/ServiceSection";
import SkillsSectionGroup from "../components/sections/SkillsSectionGroup";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fallbackTimerId = window.setTimeout(() => {
      if (isMounted) {
        setShowPreloader(false);
      }
    }, 12000);

    const waitForWindowLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      const onLoad = () => {
        window.removeEventListener("load", onLoad);
        resolve();
      };

      window.addEventListener("load", onLoad);
    });

    const waitForFonts = document.fonts?.ready
      ? document.fonts.ready.then(() => undefined).catch(() => undefined)
      : Promise.resolve();

    Promise.all([waitForWindowLoad, waitForFonts]).then(() => {
      window.setTimeout(() => {
        if (!isMounted) return;
        window.clearTimeout(fallbackTimerId);
        setShowPreloader(false);
      }, 150);
    });

    return () => {
      isMounted = false;
      window.clearTimeout(fallbackTimerId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Taiwo.Dev - John Taiwo | JavaScript Software Developer</title>
        <meta
          name="description"
          content="John Taiwo is a JavaScript software developer focused on web design, Node.js backend development, and React Native mobile apps."
        />
        <meta
          name="keywords"
          content="John Taiwo, JavaScript Developer, React Native, Node.js, Web Design, Backend Development, Tailwind CSS, MongoDB"
        />
      </Head>
      {showPreloader ? <Preloader /> : null}

      <div className="container">
        <Header />

        <div className="wrapper">
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <ServiceSection />
          <SkillsSectionGroup />
          <PortfolioSection />
          <ContactsSection />
        </div>

        <Footer />
        <FrameLines />
      </div>
    </>
  );
}
