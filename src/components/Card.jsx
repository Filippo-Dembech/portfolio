import { createContext } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardContext = createContext();

function Card({ children }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsFlipped((prev) => !prev);
    };

    return (
        <CardContext.Provider value={{ handleFlip }}>
            <div
                className="cursor-pointer rounded-xl transition-all hover:scale-105"
                onClick={handleFlip}
            >
                <div className="w-[300px] h-[250px] rounded-xl perspective-distant">
                    <motion.div
                        className="relative w-full h-full duration-200 rounded-xl transform-3d"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </CardContext.Provider>
    );
}

function Front({ children, className }) {
    return (
        <div className={`absolute w-full h-full rounded-xl shadow-lg backface-hidden ${className}`}>
            {children}
        </div>
    );
}

function Back({ children, className }) {
    return (
        <div className={`absolute w-full h-full rounded-xl shadow-lg rotate-y-180 backface-hidden ${className}`}>
            {children}
        </div>
    );
}

Card.Front = Front;
Card.Back = Back;

export default Card;
