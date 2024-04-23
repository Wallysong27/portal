import BgHome from "../../assets/img/bg-home.jpg";
import Skills from "../skills/skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HomeProps {
  sectionId: string;
}

export default function Home(props: HomeProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
      },
    },
  };

  return (
    <>
      <div
        id={props.sectionId}
        className="flex justify-around items-center w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgHome})` }}
      >
        <div className="flex flex-col lg:flex-row w-full items-center justify-evenly lg:justify-around bg-black backdrop-blur-sm backdrop-filter bg-opacity-50 p-10 h-screen">
          <div className="flex flex-col items-start justify-center text-[#E0E4E7] gap-5">
            <motion.h1
              className="text-5xl md:text-7xl"
              ref={ref}
              initial="hidden"
              variants={imageVariants}
              animate={inView ? "visible" : "hidden"}
            >
              Desenvolvedor <br />
              Web
            </motion.h1>
            <motion.p
              ref={ref}
              initial="hidden"
              variants={imageVariants}
              animate={inView ? "visible" : "hidden"}
            >
              Especializado em React.js, JavaScript, HTML, CSS, Tailwind CSS e
              Python
            </motion.p>
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
