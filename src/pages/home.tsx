import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Home from "../components/home/home";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";

export default function PaginaHome() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
