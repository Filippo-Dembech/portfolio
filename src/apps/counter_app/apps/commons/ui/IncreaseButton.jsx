import { useTheme } from '../../../ThemeContext';
import styles from '../styles/CounterButton.module.css';

export default function IncreaseButton({ onClick, isActive }) {
    const { isDarkTheme } = useTheme();
    
    function activate() {
        if (isDarkTheme) return styles.darkActive;
        return styles.lightActive;
    }

    return (
        <button onClick={onClick} className={isActive ? activate() : ""}>+</button>
    )
}