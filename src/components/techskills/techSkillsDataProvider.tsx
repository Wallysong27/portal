import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

interface TechSkillProps {
  name: string;
  level: number;
}

const TechSkillsDataProvider: React.FC<TechSkillProps> = ({ name, level }) => {
  return (
    <li className="flex items-center justify-between">
      <div className="mr-2">{name}</div>
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <FiStar
              className={`text-yellow-400 ${i < level ? "fill-current" : ""}`}
            />
          </motion.div>
        ))}
      </div>
    </li>
  );
};

export default TechSkillsDataProvider;
