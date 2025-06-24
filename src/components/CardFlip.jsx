import { useState } from "react";
import { motion } from "framer-motion";

export default function CardFlip({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(prev => !prev);
  };

  return (
    <div className="cursor-pointer rounded-xl transition-all hover:scale-105" onClick={handleFlip}>
      <div className="w-[300px] h-[250px] rounded-xl perspective-distant">
        <motion.div
          className="relative w-full h-full duration-200 rounded-xl transform-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="absolute w-full h-full rounded-xl shadow-lg backface-hidden">
            {front}
          </div>

          <div className="absolute w-full h-full rounded-xl shadow-lg rotate-y-180 backface-hidden">
            {back}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
