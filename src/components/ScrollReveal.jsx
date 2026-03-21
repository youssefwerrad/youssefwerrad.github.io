import { motion } from "framer-motion";

const directionMap = {
  up: { y: 20, x: 0 },
  left: { y: 0, x: -20 },
  right: { y: 0, x: 20 },
};

export const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const offset = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", ...offset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
