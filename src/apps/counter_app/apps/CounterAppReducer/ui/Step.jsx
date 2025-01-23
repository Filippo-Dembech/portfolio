import styles from '../../commons/styles/Step.module.css';

export default function Step({ stepAmount, setStepAmount, className }) {

    const component = (
        <div className={`${styles.amount} ${className}`}>
            <label htmlFor="amount">Step Amount: </label>
            <input
                type="number"
                onChange={setStep}
                value={stepAmount}
            />
        </div>
    );

    function setStep(e) {
        setStepAmount(computeStepFrom(e.target.value));
    }

    function computeStepFrom(value) {
        if (value) return Number(value);
        else return 1;
    }

    return component;
}
