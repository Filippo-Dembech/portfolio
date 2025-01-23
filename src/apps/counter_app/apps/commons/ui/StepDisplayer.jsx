import styles from "../styles/StepDisplayer.module.css";

export default function StepDisplayer({ stepAmount, className }) {
    return (
        <div className={`${styles.stepDisplayer} ${className}`}>
            Step Amount: <span className={styles.value}>{stepAmount}</span>
        </div>
    );
}
