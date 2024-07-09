import React from "react";
import { isMobile } from 'react-device-detect';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section,
} from "gatsby-theme-portfolio-minimal";
import Experience from "./experience";

export default function IndexPage() {
  return (
    <>
      <Seo title="Christo Polydorou" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        {!isMobile && (
          <Section sectionId="experience" heading="Experience">
            <Experience />
          </Section>
        )}
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects"/>
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
