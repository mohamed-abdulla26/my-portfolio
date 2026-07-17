import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-12 cursor-grab touch-none sm:w-15"
      alt="Technology logo"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute w-[9rem] cursor-grab touch-none rounded-full bg-storm px-1 py-3 text-center text-sm font-extralight ring ring-gray-700 sm:w-[12rem] sm:py-4 sm:text-xl"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
