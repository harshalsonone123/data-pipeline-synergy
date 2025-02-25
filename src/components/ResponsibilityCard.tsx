
import { motion } from "framer-motion";

interface ResponsibilityCardProps {
  responsibility: string;
  index: number;
}

const ResponsibilityCard = ({ responsibility, index }: ResponsibilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
    </motion.div>
  );
};

export default ResponsibilityCard;
