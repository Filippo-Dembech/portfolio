import { useCounter } from '../CounterContext';
import styles from '../../commons/styles/SignDisplayer.module.css';

export default function SignDisplayer({ className }) {
    
    const { counterValue } = useCounter();

    const isPositive = counterValue >= 0;
    const signDisplayerBackground = isPositive ? styles.greenBackground : styles.blueBackground; 
    const signDisplayerText = isPositive ? "Positive" : "Negative";
    const component = (
            <div className={`${styles.signDisplayer} ${signDisplayerBackground} ${className}`}>{signDisplayerText}</div>
    )

    return component;
}