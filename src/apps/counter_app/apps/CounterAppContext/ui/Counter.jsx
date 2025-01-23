import DecreaseButton from "../../commons/ui/DecreaseButton";
import IncreaseButton from "../../commons/ui/IncreaseButton";
import styles from "../../commons/styles/Counter.module.css";
import { useCounter } from "../CounterContext";

export default function Counter({
    activeDecreaseButton,
    activeIncreaseButton,
    className
}) {
    
    const { counterValue, increaseCounter, decreaseCounter } = useCounter();

    const component = (
        <div className={`${styles.counter} ${className}`}>
            <DecreaseButton onClick={decreaseCounter} isActive={activeDecreaseButton}/>
            <span
                key={counterValue}
                className={styles.value}
            >
                {counterValue}
            </span>
            <IncreaseButton onClick={increaseCounter} isActive={activeIncreaseButton}/>
        </div>
    );

    return component;
}
