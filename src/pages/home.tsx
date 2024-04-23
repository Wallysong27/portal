import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/home";
import Projects from "../components/projects/projects";

export default function PaginaHome() {
  return (
    <>
      <Home sectionId="home" />
      <About sectionId="about" />
      <Projects sectionId="projects" />
      <Contact sectionId="contact" />
    </>
  );
}
