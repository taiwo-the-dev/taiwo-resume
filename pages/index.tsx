import Head from 'next/head';
import Footer from '../components/layout/Footer';
import FrameLines from '../components/layout/FrameLines';
import Header from '../components/layout/Header';
import Preloader from '../components/layout/Preloader';
import AboutSection from '../components/sections/AboutSection';
import BlogSection from '../components/sections/BlogSection';
import ClientsSection from '../components/sections/ClientsSection';
import ContactsSection from '../components/sections/ContactsSection';
import HeroSection from '../components/sections/HeroSection';
import ResumeSection from '../components/sections/ResumeSection';
import ServiceSection from '../components/sections/ServiceSection';
import SkillsSectionGroup from '../components/sections/SkillsSectionGroup';
import WorksSection from '../components/sections/WorksSection';

export default function Home() {
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
      <Preloader />

      <div className="container">
        <Header />

        <div className="wrapper">
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <SkillsSectionGroup />
          <ServiceSection />
          <ClientsSection />
          <WorksSection />
          <BlogSection />
          <ContactsSection />
        </div>

        <Footer />
        <FrameLines />
      </div>
    </>
  );
}
