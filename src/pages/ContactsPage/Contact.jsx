import { classes } from "../../utils/classes";

export default function Contact({ icon, link, text, onClick }) {
    
    const contactClassName = classes(
        "flex",
        "gap-3",
        "items-center",
        "transition-colors",
        "duration-200",
        "hover:text-orange-500",
        "cursor-pointer"
    )

    return (
        <a
            href={link}
            className="flex gap-3 items-center transition-colors duration-200 hover:text-orange-500 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
        >
            {icon}
            <span className="font-custom-fira-code">{text}</span>
        </a>
    );
}