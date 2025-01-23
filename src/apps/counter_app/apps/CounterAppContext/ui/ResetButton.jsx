import { useCounter } from "../CounterContext";
import styles from "../../commons/styles/ResetButton.module.css";

export default function ResetButton({ className }) {
    
    const { reset } = useCounter();

    const component = (
        <button
            className={`${styles.resetButton} ${className}`}
            onClick={reset}
        >
            Reset
        </button>
    );

    return component;
}
