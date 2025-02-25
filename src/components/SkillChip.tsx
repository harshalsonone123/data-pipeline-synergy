
import { motion } from "framer-motion";

interface SkillChipProps {
  skill: string;
  index: number;
}

const SkillChip = ({ skill, index }: SkillChipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="skill-chip"
    >
      {skill}
    </motion.div>
  );
};

export default SkillChip;
