import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BgCispe from "../../assets/img/projetos/bg-cispe.png";
import BgDgmog from "../../assets/img/projetos/bg-dgmog.png";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
      },
    },
  };

  const animationDelay = 1;

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center md:justify-start py-10 px-4 gap-10 min-h-screen"
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: animationDelay }}
      >
        <h1 className="text-4xl text-[#013440] font-bold">Meus projetos</h1>
        <div className="flex gap-10">
          <div>
            <img src={BgCispe} alt="" />
          </div>
          <div>
            <img src={BgDgmog} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
