import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Recommendations from "@/components/sections/Recommendations";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <BackgroundOrbs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
