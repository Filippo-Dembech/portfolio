import { DarkModeSwitch } from "react-toggle-dark-mode";
import styles from './DarkModeButton.module.css';
import { useTheme } from "../../ThemeContext";

export default function DarkModeButton({ theme }) {
    
    const { toggleTheme, isDarkTheme } = useTheme()

    const iconTheme = isDarkTheme ? styles.darkIcon : styles.lightIcon
    const iconColor = isDarkTheme ? "black" : "white";

    return (
        <div className={styles.button}>
            <DarkModeSwitch
                checked={isDarkTheme}
                className={iconTheme}
                onChange={toggleTheme}
                moonColor={iconColor}
                sunColor={iconColor}
            />
        </div>
    );
}
