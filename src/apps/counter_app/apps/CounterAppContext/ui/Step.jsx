import { useCounter } from '../CounterContext';
import styles from '../../commons/styles/Step.module.css';

export default function Step({ className }) {
    
    const { stepAmount, setStep } = useCounter();

    const component = (
        <div className={`${styles.amount} ${className}`}>
            <label htmlFor="amount">Step Amount: </label>
            <input
                type="number"
                onChange={(e) => setStep(e.target.value)}
                value={stepAmount}
            />
        </div>
    );


    return component;
}
