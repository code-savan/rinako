import React from "react";
import AboutHero from "../components/aboutus/AboutHero";
import CoreValues from "../components/aboutus/CoreValues";
import OurMission from "../components/aboutus/OurMission";
import OurJourney from "../components/aboutus/OurJourney";
import LeadershipTeam from "../components/aboutus/LeadershipTeam";
import OrganizationalStructure from "../components/aboutus/OrganizationalStructure";
import OurFocus from "../components/aboutus/OurFocus";
import PartnersAndPartnerships from "../components/aboutus/PartnersAndPartnerships";
import ReviewAndMonitoring from "../components/aboutus/ReviewAndMonitoring";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <CoreValues />
      <OurJourney />
      <LeadershipTeam />
      <OrganizationalStructure />
      <OurFocus />
      <PartnersAndPartnerships />
      <ReviewAndMonitoring />
      <CTA />
      <Footer />
    </>
  );
};

export default Page;
