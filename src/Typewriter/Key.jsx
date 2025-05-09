import { motion } from "motion/react";
import { getRowSpan, getColSpan } from './getSpan';

export default function Key({ rowSpan, colSpan, className, isPressed, ...props }) {
    const variants = {
        idle: { y: 0, borderBottomWidth: "4px" },
        pressed: { y: "1px", borderBottomWidth: "2px", background: "#ffb86a" },
    };

    return (
        <motion.span
            variants={variants}
            initial="idle"
            animate={isPressed ? "pressed" : "idle"}
            whileTap="pressed"
            transition={{ type: "spring", duration: 0.1 }}
            className={`transition-colors bg-orange-50 font-custom-fira-code flex items-center justify-center text-orange-500 border-b-4 sm:border-b-6 lg:border-b-8 text-fluid font-bold rounded-lg border-b-orange-200 ${getRowSpan(
                rowSpan
            )} ${getColSpan(colSpan)} ${className}`}
        >
            {props.children}
        </motion.span>
    );
}