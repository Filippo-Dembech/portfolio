export const codeItems = [
    {
        isStateManagement: false,
        tabLabel: "Counter App",
        tabCode: `
import { useState } from "react";
import Header from "./ui/Header";
import Counter from "./ui/Counter";
import Step from "./ui/Step";
import StepDisplayer from "./ui/StepDisplayer";
import SignDisplayer from "./ui/SignDisplayer";
import ResetButton from "./ui/ResetButton";
import CodeViewer from "../CounterAppContext/CodeViewer";

export default function CounterApp() {
    const [counterValue, setCounterValue] = useState(0);
    const [stepAmount, setStepAmount] = useState(1);

    const component = (
        <div>
            <Header>CounterApp</Header>
            <Counter
                counterValue={counterValue}
                setCounterValue={setCounterValue}
                stepAmount={stepAmount}
            />
            <Step
                stepAmount={stepAmount}
                setStepAmount={setStepAmount}
            />
            <StepDisplayer stepAmount={stepAmount} />
            <SignDisplayer counterValue={counterValue} />
            <ResetButton
                onClick={resetValues}
            />
        </div>
    );
    
    // state management logic in event handler
    function resetValues() {
        setCounterValue(0);
        setStepAmount(1);
    }

    return component;
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Header",
        tabCode: `
export default function Header({children}) {
    return (
        <h1>{children}</h1>
    )
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Counter",
        tabCode: `
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";

export default function Counter({
    counterValue,
    setCounterValue,
    stepAmount = 1,
}) {
    const component = (
        <div>
            <DecreaseButton onClick={decreaseCounter} />
            <span key={counterValue} >
                {counterValue}
            </span>
            <IncreaseButton onClick={increaseCounter} />
        </div>
    );

    // state management logic in event handler
    function decreaseCounter() {
        setCounterValue((curr) => curr - stepAmount);
    }

    // state management logic in event handler
    function increaseCounter() {
        setCounterValue((curr) => curr + stepAmount);
    }

    return component;
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "DecreaseButton",
        tabCode: `
export default function DecreaseButton({ onClick }) {
    return (
        <button onClick={onClick}>-</button>
    )
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "IncreaseButton",
        tabCode: `
export default function IncreaseButton({ onClick }) {
    return (
        <button onClick={onClick}>+</button>
    )
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Step",
        tabCode: `
export default function Step({ stepAmount, setStepAmount }) {

    const component = (
        <div>
            <label htmlFor="amount">Step Amount: </label>
            <input
                type="number"
                onChange={setStep}
                value={stepAmount}
            />
        </div>
    );

    // event handler with decorator that validate the user input for the step
    function setStep(e) {
        setStepAmount(validateEmpty(e.target.value));
    }

    function validateEmpty(value) {
        if (value) return Number(value);
        else return 1;
    }

    return component;
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Reset Button",
        tabCode: `
export default function ResetButton({onClick}) {
    return (
        <button onClick={onClick}>Reset</button>
    )
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Sign Displayer",
        tabCode: `
export default function SignDisplayer({ counterValue }) {

    const isPositive = counterValue >= 0;
    const signDisplayerBackground = isPositive
                                    ? styles.greenBackground
                                    : styles.blueBackground; 
    const signDisplayerText = isPositive
                                ? "Positive"
                                : "Negative";
    const component = (
            <div className={\`\${styles.signDisplayer} \${signDisplayerBackground}\`}>{signDisplayerText}</div>
    )

    return component;
}
    `
    },
    {
        isStateManagement: false,
        tabLabel: "Step Displayer",
        tabCode: `
export default function StepDisplayer({ stepAmount }) {
    return (
        <div>
            Step Amount: <span>{stepAmount}</span>
        </div>
    );
}
    `
    }

]
