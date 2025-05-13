import { motion } from "motion/react";
import { getRowSpanStyle, getColSpanStyle } from "./getSpanStyle";

export default function Key({ button, className, isPressed }) {
    const variants = {
        idle: { y: 0, borderBottomWidth: "4px" },
        pressed: { y: "1px", borderBottomWidth: "2px", background: "#ffb86a" },
    };

    const horizontalSpan = getColSpanStyle(button.colSpan);
    const verticalSpan = getRowSpanStyle(button.rowSpan);

    return (
        <motion.span
            variants={variants}
            initial="idle"
            animate={isPressed ? "pressed" : "idle"}
            whileTap="pressed"
            transition={{ type: "spring", duration: 0.1 }}
            className={`transition-colors bg-orange-50 font-custom-fira-code flex items-center justify-center text-orange-500 border-b-4 sm:border-b-6 lg:border-b-8 text-fluid font-normal sm:font-bold rounded-lg border-b-orange-200 ${verticalSpan} ${horizontalSpan} ${className}`}
        >
            {button.symbol}
        </motion.span>
    );
}
