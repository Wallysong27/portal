import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/home";
import Projects from "../components/projects/projects";

export default function PaginaHome() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
