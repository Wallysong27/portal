import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  progress?: number;
}

export default function SkillDataProvider({
  src,
  width,
  height,
  index,
  progress = 0,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.5;

  const [maxWidth, setMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setMaxWidth(100);
      } else {
        setMaxWidth(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <img
        src={src}
        width={width}
        height={height}
        alt={`Skill ${index + 1}`}
        style={{ maxWidth: maxWidth !== null ? `${maxWidth}px` : "none" }}
      />
      {progress > 0 && (
        <div className="absolute inset-0 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
