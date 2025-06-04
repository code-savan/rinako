import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import ProgramsSection from "./components/ProgramsSection";
import SuccessStories from "./components/SuccessStories";
import NewsUpdates from "./components/NewsUpdates";
import SupportMission from "./components/SupportMission";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <ImpactSection />
        <ProgramsSection />
        <SuccessStories />
        <NewsUpdates />
        <SupportMission />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
