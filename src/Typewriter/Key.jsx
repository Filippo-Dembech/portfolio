import { motion } from "motion/react";
import { getRowSpanStyle, getColSpanStyle } from "./getSpanStyle";
import { classes } from "../utils/classes";

const keyVariants = {
    idle: { y: 0, borderBottomWidth: "4px" },
    pressed: {
        y: "1px",
        borderBottomWidth: "2px",
        backgroundColor: "#ffb86a",
    },
};
const keyTransition = { type: "spring", duration: 0.1 };

export default function Key({ button, className, isPressed }) {

    const keyClasses = classes(
        "transition-colors",
        "bg-orange-50 text-orange-500",
        "font-custom-fira-code text-fluid font-normal sm:font-bold",
        "flex items-center justify-center",
        "rounded-lg",
        "border-b-4 sm:border-b-6 lg:border-b-8 border-b-orange-200",
        getColSpanStyle(button.colSpan),
        getRowSpanStyle(button.rowSpan),
        className
    );

    return (
        <motion.span
            variants={keyVariants}
            initial="idle"
            animate={isPressed ? "pressed" : "idle"}
            whileTap="pressed"
            transition={keyTransition}
            className={keyClasses}
        >
            {button.symbol}
        </motion.span>
    );
}
