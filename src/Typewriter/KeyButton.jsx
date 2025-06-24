import { motion } from "motion/react";
import { getRowSpanStyle, getColSpanStyle } from "./getSpanStyle";
import { classes } from "../utils/classes";
import { useTypewriter } from "../context/TypewriterContext";

const keyButtonVariants = {
    idle: { y: 0, borderBottomWidth: "4px" },
    pressed: {
        y: "1px",
        borderBottomWidth: "2px",
        backgroundColor: "#ffb86a",
    },
};
const keyButtonTransition = { type: "spring", duration: 0.1 };

export default function KeyButton({ button, style, className, onClick }) {
    
    const { pressedKeyButton } = useTypewriter();
    
    const isPressed = pressedKeyButton === button.symbol;

    const keyButtonClasses = classes(
        "transition-colors",
        "bg-orange-50 text-orange-500",
        "font-custom-fira-code text-fluid",
        "flex items-center justify-center",
        "rounded-lg",
        "border-b-4 sm:border-b-6 lg:border-b-8 border-b-orange-200",
        getColSpanStyle(button.colSpan),
        getRowSpanStyle(button.rowSpan),
    );

    return (
        <motion.button
            onClick={onClick}
            style={style}
            variants={keyButtonVariants}
            initial="idle"
            animate={isPressed ? "pressed" : "idle"}
            whileTap="pressed"
            transition={keyButtonTransition}
            className={className + " " + keyButtonClasses}
        >
            {button.symbol}
        </motion.button>
    );
}
