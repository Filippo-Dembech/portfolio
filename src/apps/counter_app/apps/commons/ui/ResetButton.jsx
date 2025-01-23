import styles from "../styles/ResetButton.module.css";

export default function ResetButton({ onClick, className }) {
    const component = (
        <button
            className={`${styles.resetButton} ${className}`}
            onClick={onClick}
        >
            Reset
        </button>
    );

    return component;
}
