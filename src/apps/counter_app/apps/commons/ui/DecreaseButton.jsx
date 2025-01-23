import styles from '../styles/CounterButton.module.css';
import { useTheme } from '../../../ThemeContext';

export default function DecreaseButton({ onClick, isActive }) {
    const { isDarkTheme } = useTheme();
    
    function activate() {
        if (isDarkTheme) return styles.darkActive;
        return styles.lightActive;
    }

    return (
        <button onClick={onClick} className={isActive ? activate() : ""}>-</button>
    )
}