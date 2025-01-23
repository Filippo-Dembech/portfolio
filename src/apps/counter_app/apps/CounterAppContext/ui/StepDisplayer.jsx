import { useCounter } from "../CounterContext";
import styles from "../../commons/styles/StepDisplayer.module.css";

export default function StepDisplayer({ className }) {
    
    const { stepAmount } = useCounter();

    return (
        <div className={`${styles.stepDisplayer} ${className}`}>
            Step Amount: <span className={styles.value}>{stepAmount}</span>
        </div>
    );
}
