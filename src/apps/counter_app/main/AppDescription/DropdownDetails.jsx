import { useState } from "react";
import styles from "./DropdownDetails.module.css";
import { useTheme } from '../../ThemeContext';


export default function DropdownDetails({ summaryText, children }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const { isDarkTheme } = useTheme();

    function toggleVisibility() {
        setIsOpen((curr) => !curr);
    }

    const actionAvailable = isOpen ? "hide" : "show";

    return (
        <details className={styles.details}>
            <summary
                className={styles.summary}
                onClick={toggleVisibility}
            >
                <h2 className={styles.header}>{summaryText}</h2>
                <span>
                    (<span className={styles.fakeLink}>click</span> to{" "}
                    {actionAvailable} details)
                </span>
            </summary>
            <div className={isDarkTheme ? styles.darkContent : styles.lightContent}>{children}</div>
        </details>
    );
}
